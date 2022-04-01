# alyra-projet02-testing

**⚡️ Projet 02 - Unit testing for the voting contract** <br />
Text

👉 Title:
- Text
- Text
- Text
    
👉 Title:
- Text
- Text
- Text
- Text
- Text
- Text
- Text
- Text
- Text


- Contract: Vote
    * Workflow status change </br>
      ✔️ should show a default status set to 0 (RegisteringVoters) </br>
      ✔️ should be able to switch from status 0 (RegisteringVoters) to 1 (ProposalsRegistrationStarted) if admin (57ms) </br>
      ✔️ should not be able to start proposals registration if not admin (40ms)
      ✓ should be able to switch from status 1 (ProposalsRegistrationStarted) to 2 (ProposalsRegistrationEnded) if admin (38ms)
      * ✓ should not be able to end proposals registration if not admin
      * ✓ should be able to switch from status 2 (ProposalsRegistrationEnded) to 3 (VotingSessionStarted) if admin (42ms)
      ✓ should not be able to start voting session if not admin
      ✓ should be able to switch from status 3 (VotingSessionStarted) to 4 (VotingSessionEnded) if admin (43ms)
      ✓ should not be able to end voting session if not admin
      ✓ should be able to switch from status 4 (VotingSessionEnded) to 5 (VotesTallied) if admin (41ms)
      ✓ should not be able to tally votes if not admin
    Registration phase
      ✓ should add a new voter if admin (51ms)
      ✓ should not add a new voter if not admin (41ms)
      ✓ should not add a voter if already exists in the list of voters
      ✓ should not add a new voter if the workflow status is set to another status (66ms)
      ✓ should not get a voter in the list if not registered as voter (216ms)
    Proposals phase
      ✓ should add a proposal if provided by a registered voter (124ms)
      ✓ should add an additional proposal, provided by the same registered voter (71ms)
      ✓ should add a new proposal from another a registered voter (50ms)


  19 passing (2s)