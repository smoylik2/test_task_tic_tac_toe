Test task to create front-end application for tic-tac-toe game
LIVE: https://test-task-tic-tac-toe.herokuapp.com

# Requirements
- The front-end presents the interface for a game of tic-tac-toe against the AI (back-end implementation supplied).
- Interaction with the AI and acquisition of data about the current game and previous games are performed via the REST API.
- The application screens includes the following elements:
  - The main game screen:
    - *(`X`, `O`)* commands, one for the player, the other for the AI
    - gameboard
    - log of the moves in the current round.
  - The scoreboard
    - scores of all previously played rounds
    - the total of wins and losses *(player:AI, Х:О)*
- The game should not be interrupted by switching between screens
- The game should be mostly mouse-controlled

# Game rules
Obviously, the general rules conform to the classical tic-tac-toe game. Xs go first. In the first game upon the server launch the player is X, the UI is O. In each subsequent round, they swap places. The number of rounds is not limited. In each round the player is opposed by the AI.
