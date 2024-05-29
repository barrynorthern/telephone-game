# telephone-game
A repo to help create and manage a code-based telephone game

# what is it?
- run the create command with up to 4 team names (add more functions to the functions folder for more teams
- this will generate a game plan with [instructions.md](./instructions.md)
- the game files are stored in the game folder
- the game plan, along with a session that got to round 2, is committed to this repo.

# what is the telephone game
A number of teams play. Each team is given a simple function. Their task is to describe it. In the next round, each team is given a decription from another team. Their task is to implement it. This goes around until the function comes back to where it started. This means there are as many rounds as teams, but fewer rounds can be played if desired (e.g. function -> description -> function. The instructions.md helps the host to supply and record the functions and descriptions going to and coming back from the teams. Afterwards, the files are grouped by function, so that the evolution can be studied.

# early days!
This is a quickly-put-together repo to help run a manual game. Much of it could be further automated. The create script is written in Bash (for linux/mac environments). Another language should be used for any further development.
