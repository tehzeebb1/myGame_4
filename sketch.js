var canvas
var gameState=0;
var playerCount;
var database;
var form,player,game;
var backgroundImg;
var allPlayers;
var player1, player2,players;
var player1Img, player2Img;
var reward,coin, cImg;
var wallGroup, rewardGroup;
var confidence = 0;
var cb1;

function preload()
{
    player1Img=loadImage("Images/Sun1.png");
    player2Img=loadImage("Images/WingBot.png");
    cImg=loadAnimation("Images/C1.png", "Images/C2.png", "Images/C3.png", "Images/C4.png", "Images/C5.png", "Images/C6.png");
    rewardImg = loadAnimation("Images/Coin1.png","Images/Coin2.png", "Images/Coin3.png", "Images/Coin4.png", "Images/Coin5.png", "Images/Coin6.png", "Images/Coin7.png", "Images/Coin8.png", "Images/Coin9.png", "Images/Coin10.png");
}

function setup()
{
    canvas=createCanvas(displayWidth-100, displayHeight-100);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();
   
    wallGroup = new Group();
    rewardGroup = new Group();

}
function draw()
{
if(playerCount === 2)
{
game.update(1);
}
if(gameState === 1)
{
    clear();
    game.play();
}
if(gameState === 2)
{
    game.end();
}
}