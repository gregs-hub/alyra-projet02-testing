# alyra-projet02-testing

**⚡️ Projet 02 - Unit testing for a voting contract in a small organization** <br />
This project aims at testing a voting smart contract for a small organization. The voters, all known by the organization, are registered by the administrator on a whitelist with their wallet address. Voters can submit proposals to the vote during the Proposal Registration phase. Voters can vote on propositions during the Voting Session.
   
👉 Tests are done following:
- First context is to ensure all the workflow status changes and rights are correct
- Second context validates the registration phase
- Third context validates the proposals phase
- Fourth context validates the voting phase
- Fifth context validates the tallying phase

👉 Testing results:

- Contract: Vote

    * Validate workflow status changes and rights </br>
      ✔️ should show a default status set to 0 (RegisteringVoters) </br>
      ✔️ should start the proposals registration and switch to status 1 </br>
      ✔️ should end the proposals registration and switch to status 2 </br>
      ✔️ should start voting session and switch to status 3 </br>
      ✔️ should end voting session and switch to status 4 </br>
      ✔️ should tallies vote and switch to status 5 </br>
      ✔️ should not start proposals registration if not currently in RegisteringVoters status </br>
      ✔️ should not end the proposals registration if not currently in ProposalsRegistrationStarted status </br>
      ✔️ should not start voting session if not currently in ProposalsRegistrationEnded status </br>
      ✔️ should not end voting session if not currently in VotingSessionStarted status </br>
      ✔️ should not tally votes if not currently in VotingSessionEnded status </br>
      ✔️ should not start the proposals registration if not admin </br>
      ✔️ should not end proposals registration if not admin </br>
      ✔️ should not start voting session if not admin </br>
      ✔️ should not end voting session if not admin </br>
      ✔️ should not be able to tally votes if not admin </br>

    * Validate registration phase </br>
      ✔️ should add a new voter </br>
      ✔️ should not add a new voter if not admin </br>
      ✔️ should not add a voter if already exists in the list of voters </br>
      ✔️ should not add a new voter if the workflow status is set to another status </br>
      ✔️ should not get a voter from the list if not registered as voter </br>

    * Validate proposals phase </br>
      ✔️ should not add a new proposal if workflow status is not ProposalsRegistrationStarted </br>
      ✔️ should not add a proposal if not a registered voter </br>
      ✔️ should not add an empty proposal </br>
      ✔️ should add a proposal if provided by a registered voter </br>
      ✔️ should add an additional proposal, provided by the same registered voter </br>
      ✔️ should add a new proposal from another a registered voter </br>
      ✔️ should not get a proposal from the list if not registered as voter </br>

    * Validate voting phase </br>
      ✔️ should not vote if workflow status is not VotingSessionStarted </br>
      ✔️ should not vote if not a registered voter </br>
      ✔️ should vote for an existing proposal if a registered voter </br>
      ✔️ should not vote twice </br>
      ✔️ should not vote for a non-existing proposal </br>

    * Validate tallying phase </br>
      ✔️ should tally votes and return the winning proposal (accessible for everyone) </br>
      ✔️ should count two votes for the winning proposal </br>
      ✔️ should return "This is Proposal 2" as the winning proposal </br>

  <span style="color:green">36 passing</span>