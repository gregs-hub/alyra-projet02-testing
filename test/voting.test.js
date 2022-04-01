// IMPORTS
const Voting = artifacts.require("./Voting.sol");
const { BN, expectRevert, expectEvent } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

contract('Vote', accounts => {
    // VARIABLES
    const admin = accounts[0];
    const notadmin = accounts[3];

    const voterA = accounts[1];
    const voterB = accounts[2];
    const notvoter = accounts[4];

    const propA = "This is Proposal 1";
    const propB = "This is Proposal 2";
    const propC = "This is Proposal 3";
    const emptyprop = "";

    let instance;

    // REGISTRATION
    describe("Registration phase", () => {

        before(async () => {
            instance = await Voting.new({ from: admin });
        });
        
        // Admin can add a new voter during registration phase and can get a voter
        // check: voter.isRegistered = true
        // check: event VoterRegistered(voterAddress)
        it('should add a new voter if admin', async () => {
            const receipt = await instance.addVoter(voterA, { from: admin });
            const voter = await instance.getVoter(voterA, { from: voterA });
            expect(voter.isRegistered).to.equal(true);
            expectEvent(receipt, "VoterRegistered", { voterAddress: voterA });
        });

        // Only admin can add a new voter
        // check: revert "Ownable: caller is not the owner"
        it('should not add a new voter if not admin', async () => {
            await expectRevert(instance.addVoter(voterB, { from: notadmin }), "Ownable: caller is not the owner");
        });

        // Cannot add a new voter if already registered in the list
        // check: revert "Already registered"
        it('should not add a voter if already exists in the list of voters', async () => {
            await expectRevert(instance.addVoter(voterA, { from: admin }), "Already registered");
        });
        
        // Admin can only add new voters when status is set to RegisteringVoters
        // do: change status to ProposalsRegistrationStarted
        // check: revert "Voters registration is not open yet"
        it("should not add a new voter if the workflow status is set to another status", async () => {
            await instance.startProposalsRegistering({ from: admin });
            await expectRevert(instance.addVoter(voterA, { from: admin }), "Voters registration is not open yet");
        });
        
        // Only voters can get a voter in the list
        // check: revert "You're not a voter"
        it('should not get a voter in the list if not registered as voter', async () => {
            await expectRevert(instance.getVoter(voterA, { from: notvoter }), "You're not a voter");
        });

    });
    
});

