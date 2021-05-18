# Minesweeper
A very instructive project in which those who are interested in learning Reactjs could challenge themselves could be a popular game called minesweeper. I believe most developers or avid, old-fashioned gamers are familiar with this simple but  amusing game. Therefore, if you know about the general programming concepts, reviewing the game’s source-code, you will be able to get a good grounding in React programming.
# Game definition
Minesweeper is a 2D, single-player game. What a player needs to do to win the game is flagging a field , so laid mines are found. When all empty, safe cells are revealed by the player, the game is completed successfully! The layout is a board which has a determined number of rows and columns. For instance, if the board had 3 rows and 3 columns, there would be 9 cells. The first click of players arranges the mines on the board randomly. Hence, it is guaranteed that the first click is always safe. Afterwards, every cell may contain a mine which has been hidden from players. When a player clicks on a cell, there will be three possibilities

![MineSweeper](https://media-exp1.licdn.com/dms/image/C4D12AQFQmWjhKRhfBw/article-inline_image-shrink_1000_1488/0/1621227342963?e=1626912000&v=beta&t=C0ISzDD0P7ar6EQUrWhvbRJe-0RF_PjolCaCGVpgf9U)

* If a mine had been laid under the cell, the whole board would be blown up and the player would lose
* If there was no mine behind the cell, but any of its neighbouring cells contained a mine, the cell would be popped open showing a number. The number would indicate how many mines had been laid around the clicked cell ranging from 1 to 8.  
* If there was no mine behind the cell, and none of its neighbouring cells contained a mine, the whole clean area would be ploughed away and all neighbouring cells would be popped open! This process would be continued for all those neighbouring cells which had been cleared recently. Thus, there might always be a good chance for players to clean a large area with a single click! 

# Players mindset
If losers hadn’t entrusted their steps to chance only, they would have won the game! This game has nothing to do with sheer chance! Players need to analyze the disclosed numbers and make the right, safe decisions! I am not going to deny that chance plays a role in this game at all! Yes, there might be a situation in which you have to flip a coin or roll a dice to click an unopened cell! However, the mentioned condition is almost rare, and it causes your heart to pump a little faster anyway!

![Losers!](https://media-exp1.licdn.com/dms/image/C4D12AQHvPBnR5b_eyw/article-inline_image-shrink_1000_1488/0/1621229801077?e=1626912000&v=beta&t=EMrrohgVu6rvQF5eP30TMZ3gSz4IOP-TZBJdeFFOb-0)
