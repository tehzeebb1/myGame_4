class Game
{
   constructor()
   {

    
   }
   getState()
   {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
        console.log("gameState is:"+gameStateRef)
   }
   update(state)
   {
    database.ref('/').update({
        gameState:state
       });
   }
   
   async start()
   {
    if (gameState === 0)
    {
        console.log("inside start");
        player=new Player();
        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
        player.getCount();
        }
        form=new Form();
        form.display();     
    }
    //add players here

   // cb1 = createSprite(180, 300);
    //cb1.addAnimation("conf", cImg);
    //cb1.scale = 0.05;
    player1 = createSprite(545, 240)
    player1.addImage(player1Img);
    player1.scale = 0.2;
    player2 = createSprite(545, 270)
    player2.addImage(player2Img);
    player2.scale = 0.2;
    players=[player1,player2];
    createWallPuzzle();
   }
   

   play()
   {
        form.hide();
       
         Player.getPlayerInfo();
         
            
            var index = 0;
            var x = 525;
            var y;
            drawSprites();
                for (var plr in allPlayers)
                {

                    index = index+1;
                    y = allPlayers[plr].playerY;
                    x = allPlayers[plr].playerX;
                   
                    players[index-1].x=x;
                    players[index-1].y=y;

                   /* if(index==player.index)
                    {
                        fill("black");
                        textSize(25);
                        //text(allPlayers[plr].name ,950,24);
                    }*/
                  // console.log(allPlayers)
                   fill("black");
                   textSize(25);
                   
                    text("Player 1 :" +allPlayers.player1.confidence,650,24);
                   text("Player 2 :" + allPlayers.player2.confidence, 850, 24);
                   

                }
            
                if (frameCount % 300 === 0) 
                {
                 //player.addAnimation()
                 //player.scale = 0.2;
                 player.playerY = player.playerY-0.5;
                 player.playerY = player.playerY+0.5;
                 player.playerX = player.playerX-0.5;
                 player.playerX = player.playerX+0.5;
                }


                if(player1.isTouching(wall)||player1.isTouching(wall2)||player1.isTouching(wall3)) 
                { 
                    player1.bounceOff(wall);
                    player1.bounceOff(wall2); 
                    player1.bounceOff(wall3); 
                } 
                if(player2.isTouching(wall)||player2.isTouching(wall2)||player2.isTouching(wall3)) 
                { 
                    player2.bounceOff(wall); 
                    player2.bounceOff(wall2); 
                    player2.bounceOff(wall3); 
                }

                if(player1.isTouching(wall4)||player1.isTouching(wall5)||player1.isTouching(wall6)) 
                { 
                    player1.bounceOff(wall4);
                    player1.bounceOff(wall5); 
                    player1.bounceOff(wall6); 
                } 
                if(player2.isTouching(wall4)||player2.isTouching(wall5)||player2.isTouching(wall5)) 
                { 
                    player2.bounceOff(wall4); 
                    player2.bounceOff(wall5); 
                    player2.bounceOff(wall6); 
                }
        
 


    // form.hide();
    if(keyIsDown(UP_ARROW)&& player.index != null)
    {
        console.log("It worked!");
        player.playerY = player.playerY-2;
        player.update();
    }
    if(keyIsDown(DOWN_ARROW)&& player.index != null)
    {
        player.playerY = player.playerY+2;
        player.update();
    }
    if(keyIsDown(RIGHT_ARROW)&& player.index != null)
    {
        player.playerX = player.playerX+2;
        player.update();
    }
    if(keyIsDown(LEFT_ARROW)&& player.index != null)
    {
        player.playerX = player.playerX-2;
        player.update();
    }
    
   //write code here to spawn the coins
   if (frameCount % 20 === 0) 
   {
    var reward = createSprite(600,120,40,10);
    reward.addAnimation("rewardCoin", rewardImg);
    reward.scale = 0.2;
    reward.y = Math.round(random(100,1000));
   reward.x = Math.round(random(100, 1000));
  
   
    
    //add each cloud to the group
    rewardGroup.add(reward);
  }

  if (player.index !== null)
  {
      for (var i = 0; i < rewardGroup.length; i++) {
          if (rewardGroup.get(i).isTouching(players)) {
            rewardGroup.get(i).destroy();
            console.log("before:"+player.confidence);
              player.confidence =player.confidence+1;
              console.log("after:"+player.confidence);
              player.update();
              
          }
          
      }
  }
      
   }
   end()
   {
    imageMode(CENTER);
    Player.getPlayerInfo();  
    console.log("Game Ended");
    fill("red");
    textAlign(CENTER);
    textSize(50);
    // Add ending rank here 
   } 
} 


function createWallPuzzle()
{
    var wall = createSprite(505, 250, 10,100);
    wall.shapeColor = "blue";
    var wall2 = createSprite(540, 200, 80, 10);
    wall2.shapeColor ="blue";
    var wall3 = createSprite(575, 215, 10, 20);
    wall3.shapeColor = "blue";
    var wall4 = createSprite(575, 285, 10, 20);
    wall4.shapeColor = "blue";
    var wall5 = createSprite(540, 300, 80, 10);
    wall5.shapeColor = "blue"
    var wall6 = createSprite(595, 230, 50, 10);
    wall6.shapeColor = "blue";
    var wall7 = createSprite(595, 270, 50, 10);
    wall7.shapeColor = "blue";
    var wall8 = createSprite(625, 300, 10, 70);
    wall8.shapeColor = "blue";
    var wall9 = createSprite(625, 215, 10, 40);
    wall9.shapeColor = "blue";
    var wallx = createSprite(670, 250, 10, 100);
    wallx.shapeColor = "blue";
    var wally = createSprite(700, 300, 70, 10);
    wally.shapeColor = "blue";
    var wallx2 = createSprite(645, 340, 50, 10);
    wallx2.shapeColor = "blue";
    var wallx3 = createSprite(665, 370, 10, 50);
    wallx3.shapeColor = "blue";
    var wallx4 = createSprite(705, 385, 10, 100);
    wallx4.shapeColor = "blue";
    var wallx5 = createSprite(725, 340, 50, 10);
    wallx5.shapeColor = "blue";
    var wallx6 = createSprite(605, 390, 130, 10);
    wallx6.shapeColor = "blue";
    var wallx7 = createSprite(650, 430, 40, 10);
    wallx7.shapeColor = "blue";
    var wallx8 = createSprite(665, 440, 10, 30);
    wallx8.shapeColor = "blue";
   var wallx9 = createSprite(810, 540, 80, 10);
    wallx9.shapeColor = "blue";
    var wallx20 = createSprite(810, 580, 80, 10);
    wallx20.shapeColor = "blue";
    var wallx21 = createSprite(590, 460, 10, 70);
    wallx21.shapeColor = "blue";
    var wallx22 = createSprite(610, 430, 40, 10);
    wallx22.shapeColor = "blue";
    var wallx23 = createSprite(550, 440, 10, 30);
    wallx23.shapeColor = "blue";
    var wallx24 = createSprite(560, 490, 70, 10);
    wallx24.shapeColor = "blue";
    var wallx25 = createSprite(535, 450, 40, 10);
    wallx25.shapeColor = "blue";
    var wallx26 = createSprite(530, 430, 30, 10);
    wallx26.shapeColor = "blue";
    var wallx27 = createSprite(490, 430, 60, 10);
    wallx27.shapeColor = "blue";
    var wallx28 = createSprite(515, 390, 50, 10);
    wallx28.shapeColor = "blue";
    var wallx29 = createSprite(455, 405, 10, 60);
    wallx29.shapeColor = "blue";
    var wallx30 = createSprite(490, 370, 10, 50);
    wallx30.shapeColor = "blue";
    var wallx31 = createSprite(460, 340, 70, 10);
    wallx31.shapeColor = "blue";
    var wallx32 = createSprite(420, 380, 60, 10);
    wallx32.shapeColor = "blue";
    var wallx33 = createSprite(390, 338, 10, 95);
    wallx33.shapeColor = "blue";
    var wallx34 = createSprite(490, 450, 60, 10);
    wallx34.shapeColor = "blue";
    var wallx35 = createSprite(430, 290, 10, 90);
    wallx35.shapeColor = "blue";
    var wallx36= createSprite(490, 490, 80, 10);
    wallx36.shapeColor = "blue";
    var wallx37 = createSprite(390, 250, 70, 10);
    wallx37.shapeColor = "blue";
    var wallx38 = createSprite(355, 290, 80, 10);
    wallx38.shapeColor = "blue";
    var wallx39 = createSprite(450, 450, 30, 10);
    wallx39.shapeColor = "blue";
    var wallx40 = createSprite(430, 490, 60, 10);
    wallx40.shapeColor = "blue";
    var wallx41 = createSprite(395, 505, 10, 40);
    wallx41.shapeColor = "blue";
    var wallx42 = createSprite(360, 505, 10, 40);
    wallx42.shapeColor = "blue";
    var wallx43 = createSprite(378, 530, 45, 10);
    wallx43.shapeColor = "blue";
    var wallx44 = createSprite(430, 435, 10, 40);
    wallx44.shapeColor = "blue";
    var wallx45 = createSprite(400, 435, 10, 40);
    wallx45.shapeColor = "blue";
    var wallx46 = createSprite(415, 410, 40, 10);
    wallx46.shapeColor = "blue";
    var wallx47 = createSprite(380, 450, 40, 10);
    wallx47.shapeColor = "blue";
    var wallx48 = createSprite(360, 465, 10, 40);
    wallx48.shapeColor = "blue";
    var wallx49 = createSprite(640, 560, 140, 10);
    wallx49.shapeColor = "blue";
    var wallx50 = createSprite(705, 520, 10, 70);
    wallx50.shapeColor = "blue";
    var wallx51 = createSprite(705, 460, 10, 60);
    wallx51.shapeColor = "blue";
    var wallx52 = createSprite(620, 520, 100, 10);
    wallx52.shapeColor = "blue";
    var wallx53 = createSprite(665, 485, 10, 65);
    wallx53.shapeColor = "blue";
    var wallx54 = createSprite(760, 340, 30, 10);
    wallx54.shapeColor = "blue";
    var wallx55 = createSprite(770, 290, 10, 110);
    wallx55.shapeColor = "blue";
    var wallx56 = createSprite(730, 250, 10, 110);
    wallx56.shapeColor = "blue";
    var wallx57 = createSprite(790, 240, 40, 10);
    wallx57.shapeColor = "blue";
    var wallx58= createSprite(750, 200, 40, 10);
    wallx58.shapeColor = "blue";
    var wallx59 = createSprite(810, 205, 10, 80);
    wallx59.shapeColor = "blue";
    var wallx60 = createSprite(770, 165, 10, 80);
    wallx60.shapeColor = "blue";
    var wallx61 = createSprite(750, 130, 50, 10);
    wallx61.shapeColor = "blue";
    var wallx62 = createSprite(825, 160, 40, 10);
    wallx62.shapeColor = "blue";
    var wallx63 = createSprite(825, 125, 40, 10);
    wallx63.shapeColor = "blue";
    var wallx64 = createSprite(740, 90, 70, 10);
    wallx64.shapeColor = "blue";
    var wallx65 = createSprite(700, 75, 10, 40);
    wallx65.shapeColor = "blue";
    var wallx66 = createSprite(660, 75, 10, 40);
    wallx66.shapeColor = "blue";
    var wallx67 = createSprite(800, 110, 10, 40);
    wallx67.shapeColor = "blue";
    var wallx68 = createSprite(790, 90, 30, 10);
    wallx68.shapeColor = "blue";
    var wallx69 = createSprite(840, 190, 10, 50);
    wallx69.shapeColor = "blue";
    var wallx70 = createSprite(840, 95, 10, 50);
    wallx70.shapeColor = "blue";
    var wallx71 = createSprite(880, 145, 10, 150);
    wallx71.shapeColor = "blue";
    var wallx72 = createSprite(730, 150, 10, 50);
    wallx72.shapeColor = "blue";
    var wallx73 = createSprite(670, 190, 10, 30);
    wallx73.shapeColor = "blue";
    var wallx74 = createSprite(700, 170, 70, 10);
    wallx74.shapeColor = "blue";
    var wallx75 = createSprite(655, 130, 60, 10);
    wallx75.shapeColor = "blue";
    var wallx76 = createSprite(625, 160, 10, 70);
    wallx76.shapeColor = "blue";
    var wallx77 = createSprite(625, 110, 10, 40);
    wallx77.shapeColor = "blue";
    var wallx78 = createSprite(640, 90, 40, 10);
    wallx78.shapeColor = "blue";
    var wallx79 = createSprite(840, 255, 10, 80);
    wallx79.shapeColor = "blue";
    var wallx80= createSprite(880, 240, 10, 40);
    wallx80.shapeColor = "blue";
    var wallx81 = createSprite(860, 290, 50, 10);
    wallx81.shapeColor = "blue";
    var wallx82 = createSprite(900, 255, 50, 10);
    wallx82.shapeColor = "blue";
    var wallx83 = createSprite(920, 280, 10, 40);
    wallx83.shapeColor = "blue";
    var wallx84 = createSprite(890, 305, 10, 40);
    wallx84.shapeColor = "blue";
    var wallx85 = createSprite(945, 295, 40, 10);
    wallx85.shapeColor = "blue";
    var wallx86 = createSprite(935, 330, 100, 10);
    wallx86.shapeColor = "blue";
    var wallx87 = createSprite(1030, 345, 10, 40);
    wallx87.shapeColor = "blue";
    var wallx88 = createSprite(990, 345, 10, 40);
    wallx88.shapeColor = "blue";
    var wallx89 = createSprite(1030, 310, 10, 40);
    wallx89.shapeColor = "blue";
    var wallx90 = createSprite(995, 295, 70, 10);
    wallx90.shapeColor = "blue";
    var wallx91 = createSprite(970, 360, 50, 10);
    wallx91.shapeColor = "blue";
    var wallx92 = createSprite(1030, 380, 10, 30);
    wallx92.shapeColor = "blue";
    var wallx93 = createSprite(1045, 400, 40, 10);
    wallx93.shapeColor = "blue";
    var wallx94 = createSprite(1045, 440, 40, 10);
    wallx94.shapeColor = "blue";
    var wallx95 = createSprite(1060, 380, 10, 50);
    wallx95.shapeColor = "blue";
    var wallx96 = createSprite(1060, 460, 10, 50);
    wallx96.shapeColor = "blue";
    var wallx97 = createSprite(1100, 435, 10, 160);
    wallx97.shapeColor = "blue";
    var wallx98 = createSprite(970, 400, 50, 10);
    wallx98.shapeColor = "blue";
    var wallx99 = createSprite(990, 460, 10, 120);
    wallx99.shapeColor = "blue";
    var wallx100 = createSprite(1045, 520, 120, 10);
    wallx100.shapeColor = "blue";
    var wallx101 = createSprite(1045, 480, 40, 10);
    wallx101.shapeColor = "blue";
    var wallx102 = createSprite(1030, 460, 10, 40);
    wallx102.shapeColor = "blue";
    var wallx103 = createSprite(910, 360, 70, 10);
    wallx103.shapeColor = "blue";
    var wallx104 = createSprite(870, 340, 10, 50);
    wallx104.shapeColor = "blue";
    var wallx105 = createSprite(835, 340, 10, 50);
    wallx105.shapeColor = "blue";
    var wallx106 = createSprite(855, 320, 40, 10);
    wallx106.shapeColor = "blue";
    var wallx107 = createSprite(805, 370, 70, 10);
    wallx107.shapeColor = "blue";
    var wallx108 = createSprite(805, 405, 70, 10);
    wallx108.shapeColor = "blue";
    var wallx109 = createSprite(835, 430, 10, 40);
    wallx109.shapeColor = "blue";
    var wallx110 = createSprite(875, 440, 10, 80);
    wallx110.shapeColor = "blue";
    var wallx111 = createSprite(895, 440, 10, 80);
    wallx111.shapeColor = "blue";
    var wallx112 = createSprite(935, 425, 10, 60);
    wallx112.shapeColor = "blue";
    var wallx113 = createSprite(950, 400, 20, 10);
    wallx113.shapeColor = "blue";
    var wallx114 = createSprite(950, 450, 40, 10);
    wallx114.shapeColor = "blue";
    var wallx115 = createSprite(950, 485, 40, 10);
    wallx115.shapeColor = "blue";
    var wallx116 = createSprite(970, 467.5, 10, 45);
    wallx116.shapeColor = "blue";
    var wallx117 = createSprite(805, 450, 70, 10);
    wallx117.shapeColor = "blue";
    var wallx118 = createSprite(805, 485, 150, 10);
    wallx118.shapeColor = "blue";
    var wallx119 = createSprite(775, 430, 10, 40);
    wallx119.shapeColor = "blue";
    var wallx120 = createSprite(730, 430, 10, 120);
    wallx120.shapeColor = "blue";
    var wallx121 = createSprite(750, 370, 50, 10);
    wallx121.shapeColor = "blue";
    var wallx122 = createSprite(895, 510, 10, 60);
    wallx122.shapeColor = "blue";
    var wallx123 = createSprite(930, 510, 10, 60);
    wallx123.shapeColor = "blue";
    var wallx124 = createSprite(875, 540, 50, 10);
    wallx124.shapeColor = "blue";
    var wallx125 = createSprite(950, 540, 50, 10);
    wallx125.shapeColor = "blue";
    var wallx126 = createSprite(910, 580, 130, 10);
    wallx126.shapeColor = "blue"
    var wallx127 = createSprite(430, 205, 10, 20);
    wallx127.shapeColor = "blue"
    var wallx128 = createSprite(885, 400, 30, 10);
    wallx128.shapeColor = "blue";
    var wallx129 = createSprite(900, 40, 130, 10);
    wallx129.shapeColor = "blue";
    var wallx130 = createSprite(905, 75, 40, 10);
    wallx130.shapeColor = "blue";
    var wallx131 = createSprite(930, 95, 10, 50);
    wallx131.shapeColor = "blue";
    var wallx132 = createSprite(970, 90, 10, 110);
    wallx132.shapeColor = "blue";
    var wallx133 = createSprite(840, 60, 10, 40);
    wallx133.shapeColor = "blue";
    var wallx134 = createSprite(775, 560, 10, 40);
    wallx134.shapeColor = "blue";
    var wallx135 = createSprite(985, 140, 40, 10);
    wallx135.shapeColor = "blue";
    var wallx136 = createSprite(985, 190, 40, 10);
    wallx136.shapeColor = "blue";
    var wallx137 = createSprite(1000, 220, 10, 50);
    wallx137.shapeColor = "blue";
    var wallx138 = createSprite(1000, 120, 10, 50);
    wallx138.shapeColor = "blue";
    var wallx139 = createSprite(1045, 180, 10, 100);
    wallx139.shapeColor = "blue";
    var wallx140 = createSprite(930, 155, 10, 80);
    wallx140.shapeColor = "blue";
    var wallx141 = createSprite(1060, 330, 10, 60);
    wallx141.shapeColor = "blue";   
    var wallx142 = createSprite(950, 190, 30, 10);
    wallx142.shapeColor = "blue";
    var wallx143 = createSprite(1100, 330, 10, 60);
    wallx143.shapeColor = "blue";
    var wallx144 = createSprite(1015, 265, 40, 10);
    wallx144.shapeColor = "blue";
    var wallx145 = createSprite(1065, 230, 50, 10);
    wallx145.shapeColor = "blue";
    var wallx146 = createSprite(1000, 250, 10, 20);
    wallx146.shapeColor = "blue";
    var wallx147 = createSprite(1045, 265, 30, 10);
    wallx147.shapeColor = "blue";
    var wallx148 = createSprite(1060, 280, 10, 40);
    wallx148.shapeColor = "blue";
    var wallx149 = createSprite(1095, 230, 20, 10);
    wallx149.shapeColor = "blue";
    var wallx150 = createSprite(1100, 265, 10, 70);
    wallx150.shapeColor = "blue";
    var wallx151 = createSprite(1035, 540, 120, 10);
    wallx151.shapeColor = "blue";
    var wallx152 = createSprite(1035, 580, 120, 10);
    wallx152.shapeColor = "blue";
    var wallx153 = createSprite(1100, 560, 10, 50);
    wallx153.shapeColor = "blue";
    var wallx154 = createSprite(1020, 90, 50, 10);
    wallx154.shapeColor = "blue";
    var wallx155 = createSprite(1065, 130, 50, 10);
    wallx155.shapeColor = "blue";
    var wallx156 = createSprite(1090, 165, 10, 80);
    wallx156.shapeColor = "blue";
    var wallx157 = createSprite(1120, 165, 10, 80);
    wallx157.shapeColor = "blue";
    var wallx158 = createSprite(1100, 200, 30, 10);
    wallx158.shapeColor= "blue";
    var wallx159 = createSprite(1085, 90, 80, 10);
    wallx159.shapeColor = "blue";
    var wallx160 = createSprite(1120, 110, 10, 30);
    wallx160.shapeColor = "blue";
    var wallx161 = createSprite(680, 60, 40, 10);
    wallx161.shapeColor = "blue";
    var wallx162 = createSprite(360, 210, 10, 70);
    wallx162.shapeColor = "blue";
    var wallx163 = createSprite(320, 270, 10, 50);
    wallx163.shapeColor = "blue";
    var wallx164 = createSprite(300, 210, 40, 10);
    wallx164.shapeColor = "blue";
    var wallx165 = createSprite(300, 250, 40, 10);
    wallx165.shapeColor = "blue";
    var wallx166 = createSprite(320, 195, 10, 40);
    wallx166.shapeColor = "blue";
    var wallx167 = createSprite(280, 195, 10, 40);
    wallx167.shapeColor = "blue";
    var wallx168 = createSprite(240, 195, 10, 40);
    wallx168.shapeColor = "blue";
    var wallx169 = createSprite(280, 265, 10, 40);
    wallx169.shapeColor = "blue";
    var wallx170 = createSprite(240, 265, 10, 40);
    wallx170.shapeColor = "blue";
    var wallx171 = createSprite(240, 230, 10, 60);
    wallx171.shapeColor = "blue";
    var wallx172 = createSprite(300, 170, 50, 10);
    wallx172.shapeColor = "blue";
    var wallx173 = createSprite(380, 170, 50, 10);
    wallx173.shapeColor = "blue";
    var wallx174 = createSprite(360, 130, 90, 10);
    wallx174.shapeColor = "blue";
    var wallx175 = createSprite(310, 115, 10, 40);
    wallx175.shapeColor = "blue";
    var wallx176 = createSprite(270, 115, 10, 40);
    wallx176.shapeColor = "blue";
    var wallx177 = createSprite(240, 160, 10, 40);
    wallx177.shapeColor = "blue";
    var wallx178 = createSprite(255, 140, 40, 10);
    wallx178.shapeColor = "blue";
    var wallx179 = createSprite(225, 290, 40, 10);
    wallx179.shapeColor = "blue";
    var wallx180 = createSprite(225, 330, 40, 10);
    wallx180.shapeColor = "blue";
    var wallx181 = createSprite(280, 320, 10, 70);
    wallx181.shapeColor = "blue";
    var wallx182 = createSprite(305, 360, 60, 10);
    wallx182.shapeColor = "blue";
    var wallx183 = createSprite(305, 400, 60, 10);
    wallx183.shapeColor = "blue";
    var wallx184 = createSprite(335, 380, 10, 50);
    wallx184.shapeColor = "blue";
    var wallx185 = createSprite(240, 380, 10, 100);
    wallx185.shapeColor = "blue";
    var wallx186 = createSprite(280, 420, 10, 50);
    wallx186.shapeColor = "blue";
    var wallx187 = createSprite(295, 450, 40, 10);
    wallx187.shapeColor = "blue";
    var wallx188 = createSprite(295, 490, 40, 10);
    wallx188.shapeColor = "blue";

    var wallx189 = createSprite(320, 470, 10, 50);
    wallx189.shapeColor = "blue";
    var wallx190 = createSprite(225, 430, 40, 10);
    wallx190.shapeColor = "blue";
    var wallx191 = createSprite(225, 470, 40, 10);
    wallx191.shapeColor = "blue";
    var wallx192 = createSprite(280, 525, 10, 60);
    wallx192.shapeColor = "blue";
    var wallx193 = createSprite(240, 530, 10, 120);
    wallx193.shapeColor = "blue";
    var wallx194 = createSprite(350, 550, 130, 10);
    wallx194.shapeColor = "blue";
    var wallx195 = createSprite(340, 590, 210, 10);
    wallx195.shapeColor = "blue";
    var wallx196 = createSprite(470, 580, 10, 30);
    wallx196.shapeColor = "blue";
    var wallx197 = createSprite(520, 560, 110, 10);
    wallx197.shapeColor = "blue";
    var wallx198 = createSprite(460, 590, 30, 10);
    wallx198.shapeColor = "blue";
    var wallx199 = createSprite(500, 520, 150, 10);
    wallx199.shapeColor = "blue";
    var wallx200 = createSprite(420, 535, 10, 40);
    wallx200.shapeColor = "blue";
    var wallx201 = createSprite(430, 200, 10, 60);
    wallx201.shapeColor = "blue";   
    var wallx202 = createSprite(470, 200, 10, 60);
    wallx202.shapeColor = "blue";
    var wallx203 = createSprite(420, 170, 30, 10);
    wallx203.shapeColor = "blue";
    var wallx204 = createSprite(500, 170, 70, 10);
    wallx204.shapeColor = "blue";
    var wallx205 = createSprite(450, 130, 100, 10);
    wallx205.shapeColor = "blue";
    var wallx206 = createSprite(540, 130, 10, 90);
    wallx206.shapeColor = "blue";
    var wallx207 = createSprite(495, 100, 10, 50);
    wallx207.shapeColor = "blue";
    var wallx208 = createSprite(450, 230, 50, 10);
    wallx208.shapeColor = "blue";
    var wallx209 = createSprite(200, 380, 10, 110);
    wallx209.shapeColor = "blue";
    var wallx210 = createSprite(200, 510, 10, 90);
    wallx210.shapeColor = "blue";
    var wallx211 = createSprite(160, 490, 10, 50);
    wallx211.shapeColor = "blue";
    var wallx212 = createSprite(200, 250, 10, 90);
    wallx212.shapeColor = "blue";
    var wallx213 = createSprite(160, 270, 10, 50);
    wallx213.shapeColor = "blue";
    var wallx214 = createSprite(160, 380, 10, 180);
    wallx214.shapeColor = "blue";
    var wallx215 = createSprite(150, 560, 110, 10);
    wallx215.shapeColor = "blue";
    var wallx216 = createSprite(145, 520, 40, 10);
    wallx216.shapeColor = "blue";
    var wallx217 = createSprite(130, 510, 10, 30);
    wallx217.shapeColor = "blue";
    var wallx218 = createSprite(90, 530, 10, 70);
    wallx218.shapeColor = "blue";
    var wallx219 = createSprite(110, 490, 50, 10);
    wallx219.shapeColor = "blue";
    var wallx220 = createSprite(115, 200, 180, 10);
    wallx220.shapeColor = "blue";
    var wallx221 = createSprite(115, 250, 80, 10);
    wallx221.shapeColor = "blue";
    var wallx222 = createSprite(30, 260, 10, 110);
    wallx222.shapeColor = "blue";
    var wallx223 = createSprite(70, 260, 10, 30);
    wallx223.shapeColor = "blue";
    var wallx224 = createSprite(95, 280, 60, 10);
    wallx224.shapeColor = "blue";
    var wallx225 = createSprite(55, 320, 60, 10);
    wallx225.shapeColor = "blue";
    var wallx226 = createSprite(130, 325, 10, 100);
    wallx226.shapeColor = "blue";
    var wallx227 = createSprite(90, 330, 10, 30);
    wallx227.shapeColor = "blue";
    var wallx228 = createSprite(65, 350, 60, 10);
    wallx228.shapeColor = "blue";
    var wallx229 = createSprite(80, 390, 100, 10);
    wallx229.shapeColor = "blue";
    var wallx230 = createSprite(130, 380, 10, 30);
    wallx230.shapeColor = "blue";
    var wallx231 = createSprite(30, 370, 10, 50);
    wallx231.shapeColor = "blue";
    var wallx232 = createSprite(245, 90, 60, 10);
    wallx232.shapeColor = "blue";
    var wallx233 = createSprite(325, 90, 40, 10);
    wallx233.shapeColor = "blue";
    var wallx234 = createSprite(215, 50, 260, 10);
    wallx234.shapeColor = "blue";
    var wallx235 = createSprite(215, 110, 10, 50);
    wallx235.shapeColor = "blue";
    var wallx236 = createSprite(175, 110, 10, 50);
    wallx236.shapeColor = "blue";
    var wallx237 = createSprite(130, 90, 90, 10);
    wallx237.shapeColor = "blue";
    var wallx238 = createSprite(195, 140, 50, 10);
    wallx238.shapeColor = "blue";
    var wallx239 = createSprite(90, 70, 10, 50);
    wallx239.shapeColor = "blue";
    var wallx240 = createSprite(520, 80, 50, 10);
    wallx240.shapeColor = "blue";
    var wallx241 = createSprite(350, 70, 10, 50);
    wallx241.shapeColor = "blue";


         wallGroup.add(wall, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9);
         wallGroup.add(wallx, wally, wallx2, wallx3, wallx4, wallx5, wallx6, wallx7, wallx8, wallx9, wallx10);
         wallGroup.add(wallx11, wallx12, wallx13, wallx14, wallx15, wallx16, wallx17, wallx18, wallx19, wallx20);
         wallGroup.add(wallx21, wallx22, wallx23, wallx24, wallx25, wallx26, wallx27, wallx28, wallx29, wallx30);
         wallGroup.add(wallx31, wallx32, wallx33, wallx34, wallx35, wallx36, wallx37, wallx38, wallx39, wallx40);
         wallGroup.add(wallx41, wallx42, wallx43, wallx44, wallx45, wallx46, wallx47, wallx48, wallx49, wallx50);
         wallGroup.add(wallx51, wallx52, wallx53, wallx54, wallx55, wallx56, wallx57, wallx58, wallx59, wallx60);
         wallGroup.add(wallx61, wallx62, wallx63, wallx64, wallx65, wallx66, wallx67, wallx68, wallx69, wallx70);
         wallGroup.add(wallx71, wallx72, wallx73, wallx74, wallx75, wallx76, wallx77, wallx78, wallx79, wallx80);
         wallGroup.add(wallx81, wallx82, wallx83, wallx84, wallx85, wallx86, wallx87, wallx88, wallx89, wallx90);
         wallGroup.add(wallx91, wallx92, wallx93, wallx94, wallx95, wallx96, wallx97, wallx98, wallx99, wallx100);
         wallGroup.add(wallx101, wallx102, wallx103, wallx104, wallx105, wallx106, wallx107, wallx108, wallx109, wallx110);
         wallGroup.add(wallx111, wallx112, wallx113, wallx114, wallx115, wallx116, wallx117, wallx118, wallx119, wallx120);
         wallGroup.add(wallx121, wallx122, wallx123, wallx124, wallx125, wallx126, wallx127, wallx128, wallx129, wallx130);
         wallGroup.add(wallx131, wallx132, wallx133, wallx134, wallx135, wallx136, wallx137, wallx138, wallx139, wallx140);
         wallGroup.add(wallx141, wallx142, wallx143, wallx144, wallx145, wallx146, wallx147, wallx148, wallx149, wallx150);
         wallGroup.add(wallx151, wallx152, wallx153, wallx154, wallx155, wallx156, wallx157, wallx158, wallx159, wallx160);
         wallGroup.add(wallx161, wallx162, wallx163, wallx164, wallx165, wallx166, wallx167, wallx168, wallx169, wallx170);
         wallGroup.add(wallx171, wallx172, wallx173, wallx174, wallx175, wallx176, wallx177, wallx178, wallx179, wallx180);
         wallGroup.add(wallx181, wallx182, wallx183, wallx184, wallx185, wallx186, wallx187, wallx188, wallx189, wallx190);
         wallGroup.add(wallx191, wallx192, wallx193, wallx194, wallx195, wallx196, wallx197, wallx198, wallx199, wallx200);
         wallGroup.add(wallx201, wallx202, wallx203, wallx204, wallx205, wallx206, wallx207, wallx208, wallx209, wallx210);
         wallGroup.add(wallx211, wallx212, wallx213, wallx214, wallx215, wallx216, wallx217, wallx218, wallx219, wallx220);
         wallGroup.add(wallx221, wallx222, wallx223, wallx224, wallx225, wallx226, wallx227, wallx228, wallx229, wallx230);
         wallGroup.add(wallx231, wallx232, wallx233, wallx234, wallx235, wallx236, wallx237, wallx238, wallx239, wallx240);
        wallGroup.add(wallx241);
        }
