"use strict"
var map;
var layer;
var player;
var controls = {};
var playerSpeed = 180;
var jumpTimer = 0; // tempo entre saltos
var button;
var gameOverPanel;
var gameCompletedPanel;
var menuInicial;
var menuInicialGO;
var restartBtn;
var menuNiveis;
var gOFlag;


var invuln = 0;


var book;

var vidashard;
//inimigos
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10;
var timer,total;




Game.Level3hard = function(game){};


Game.Level3hard.prototype = {
    create:function(game){
        levelPlaying = 3;
        gOFlag = 0;
        this.backgroundSprite = this.game.add.sprite(0, 0,'background');
        this.backgroundSprite.fixedToCamera = true;
        this.backgroundSprite.scale.setTo(0.80);

        this.physics.arcade.gravity.y = 1400; // gravidade

        timer = game.time.create(false);
        timer.loop(1000, updateCounter, this);
        timer.start();

        map = this.add.tilemap('map3',32,32);
        map.addTilesetImage('tileset');

        layer = map.createLayer(0);
        layer.resizeWorld();

        //fim do jogo
        map.setTileIndexCallback(53,this.fimJogo,this);
        map.setTileIndexCallback(59,this.fimJogo,this);
        map.setTileIndexCallback(65,this.fimJogo,this);


        map.setCollisionBetween(0,3);
        map.setCollisionBetween(6,9);
        map.setCollisionBetween(12,15);
        map.setCollisionBetween(18,21);
        map.setCollisionBetween(24,32);
        map.setCollisionBetween(48,70);
        map.setCollision(43);
        map.setCollision(76);

        //se cair nos picos volta ao inicio
        map.setTileIndexCallback(30,this.resetPlayer,this);
        map.setTileIndexCallback(31,this.resetPlayer,this);
        map.setTileIndexCallback(32,this.resetPlayer,this);
        //agua
        map.setTileIndexCallback(54,this.resetPlayer,this);
        map.setTileIndexCallback(55,this.resetPlayer,this);
        map.setTileIndexCallback(56,this.resetPlayer,this);
        map.setTileIndexCallback(57,this.resetPlayer,this);
        map.setTileIndexCallback(66,this.resetPlayer,this);
        map.setTileIndexCallback(67,this.resetPlayer,this);
        map.setTileIndexCallback(68,this.resetPlayer,this);
        map.setTileIndexCallback(69,this.resetPlayer,this);
        //lava
        map.setTileIndexCallback(48,this.resetPlayer,this);
        map.setTileIndexCallback(49,this.resetPlayer,this);
        map.setTileIndexCallback(50,this.resetPlayer,this);
        map.setTileIndexCallback(51,this.resetPlayer,this);
        // se tocar na moeda, esta é substituida por um sprite vazio
        //map2.setTileIndexCallback(3,this.getCoin,this);

        player = this.add.sprite(200,450,'player'); //real 200,450
        player.anchor.setTo(0.5);

        //spawn dos inimigos
        enemy1 = new EnemyBirdHard(0,game,1200,player.y-320);
        enemy2 = new EnemyBirdHard(0,game,760,player.y-280);
        enemy3 = new EnemyManHard(0,game,300,player.y+50);
        enemy4 = new EnemyBotRedHard(0,game,1970,player.y-50);
        enemy5 = new EnemyBirdHard(0,game,3240,player.y-250);
        enemy6 = new EnemyManHard(0,game,3480,player.y-175);
        enemy7 = new EnemyBirdHard(0,game,4650,player.y-250);
        enemy8 = new EnemyBotGreenHard(0,game,2700,player.y-310);
        enemy9 = new EnemyBotYellowHard(0,game,2700,player.y-210);
        enemy10 = new EnemyBirdHard(0,game,4650,player.y-480);

        //animaçoes do jogador
        player.animations.add('idle',[0,1],2,true);
        player.animations.add('jump',[2],1,true);
        player.animations.add('run',[3,4,5,6,7,8],8,true);
        this.physics.arcade.enable(player); //fisica no boneco
        this.camera.follow(player);
        player.body.colideWorldBounds = true;

        //animaçoes inimigo spaceman
        enemy3.eman.animations.add('right',[3,4,5],3,true);
        enemy3.eman.animations.add('left',[9,10,11],3,true);
        enemy6.eman.animations.add('right',[3,4,5],3,true);
        enemy6.eman.animations.add('left',[9,10,11],3,true);

        //animaçoes inimigo redBot
        enemy4.rbot.animations.add('right',[3,4,5],3,true);
        enemy4.rbot.animations.add('left',[9,10,11],3,true);
        //animaçoes inimigo greenBot
        enemy8.gbot.animations.add('right',[3,4,5],3,true);
        enemy8.gbot.animations.add('left',[9,10,11],3,true);
        //animaçoes inimigo yellowBot
        enemy9.ybot.animations.add('right',[3,4,5],3,true);
        enemy9.ybot.animations.add('left',[9,10,11],3,true);

        //colocar o livro no nivel

        book = this.add.sprite(2530,243 ,'book');
        book.anchor.setTo(0.5);
        //animaçoes do livro
        book.animations.add('normal');
        book.animations.play('normal',10,true);
        game.physics.enable(book,Phaser.Physics.ARCADE);
        book.body.allowGravity = false;
        book.scale.setTo(0.4);

        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.W),
        };

        gameOverPanel = this.game.add.image(170,100,'gameOver');
        gameOverPanel.visible = false;
        gameOverPanel.fixedToCamera = true;

        gameCompletedPanel = this.game.add.image(170,100,'gameCompleted');
        gameCompletedPanel.visible = false;
        gameCompletedPanel.fixedToCamera = true;

        menuInicial = this.add.button(850,610,'voltarBtn',startMenuBtnClick,this);
        menuInicial.scale.setTo(0.5);
        menuInicial.fixedToCamera = true;
        menuInicialGO = this.add.button(600,375,'voltarBtn',startMenuBtnClick,this);
        menuInicialGO.visible = false;
        menuInicialGO.fixedToCamera = true;
        restartBtn = this.add.button(600,310,'restartBtn',restart3hBtnClick,this);
        restartBtn.visible = false;
        restartBtn.fixedToCamera = true;
        restartBtn.inputEnabled = false;
        menuNiveis = this.add.button(600,310,'menuNiveisBtn',jogarBtnClick,this);
        menuNiveis.fixedToCamera = true;
        menuNiveis.visible = false;
        menuNiveis.inputEnabled = false;


    },
    update:function(){
        this.physics.arcade.collide(player,layer);
        this.physics.arcade.collide(player,book,this.tocaLivro,null,this);
        this.physics.arcade.collide(layer,book);
        this.physics.arcade.collide(layer,enemy3.eman,null,null,this);
        this.physics.arcade.collide(layer,enemy6.eman,null,null,this);
        this.physics.arcade.collide(layer,enemy4.rbot,null,null,this);
        this.physics.arcade.collide(layer,enemy8.gbot,null,null,this);
        this.physics.arcade.collide(layer,enemy9.ybot,null,null,this);

        if(invuln==0){
            this.physics.arcade.collide(player,enemy3.eman,this.resetPlayer,null,this);
            this.physics.arcade.collide(player,enemy6.eman,this.resetPlayer,null,this);
            this.physics.arcade.collide(player,enemy1.bird,this.resetPlayer,null, this);
            this.physics.arcade.collide(player,enemy10.bird,this.resetPlayer,null, this);
            this.physics.arcade.collide(player,enemy5.bird,this.resetPlayer,null, this);
            this.physics.arcade.collide(player,enemy7.bird,this.resetPlayer,null, this);
            this.physics.arcade.collide(player,enemy2.bird,this.resetPlayer,null, this);
            this.physics.arcade.collide(player,enemy4.rbot,this.resetPlayer,null,this);
            this.physics.arcade.collide(player,enemy8.gbot,this.resetPlayer,null,this);
            this.physics.arcade.collide(player,enemy9.ybot,this.resetPlayer,null,this);
        }else{
            this.physics.arcade.collide(player,enemy3.eman,this.killenemy3,null,this);
            this.physics.arcade.collide(player,enemy6.eman,this.killenemy6,null,this);
            this.physics.arcade.collide(player,enemy1.bird,this.killenemy1,null,this);
            this.physics.arcade.collide(player,enemy10.bird,this.killenemy10,null,this);
            this.physics.arcade.collide(player,enemy5.bird,this.killenemy5,null,this);
            this.physics.arcade.collide(player,enemy7.bird,this.killenemy7,null,this);
            this.physics.arcade.collide(player,enemy2.bird,this.killenemy2,null,this);
            this.physics.arcade.collide(player,enemy4.rbot,this.killenemy4,null,this);
            this.physics.arcade.collide(player,enemy8.gbot,this.killenemy8,null,this);
            this.physics.arcade.collide(player,enemy9.ybot,this.killenemy9,null,this);
        }
        //arrastar livro
        //this.physics.arcade.collide(player,book);
        //console.log(enemy3.eman.body.velocity.x);
        //console.log(enemy3.eman.x);
        player.body.velocity.x = 0;

        if(gOFlag==0){
            if(controls.left.isDown){
            player.animations.play('run');
            player.scale.setTo(-1,1); // inverte o sprite
            player.body.velocity.x -= playerSpeed;
            }
            if(controls.right.isDown){
                player.animations.play('run');
                player.scale.setTo(1,1);
                player.body.velocity.x += playerSpeed;
            }
            if(controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now>jumpTimer){
                player.animations.play('jump');
                player.body.velocity.y = -630;
                jumpTimer = this.time.now + 700;
            }

            if(player.body.velocity.x == 0 && player.body.velocity.y == 0){
                player.animations.play('idle');
            }
        }
        if(enemy3.eman.x==300){
            enemy3.eman.animations.play('right');
        }
        if(enemy3.eman.x==500){
            enemy3.eman.animations.play('left');
        }
        if(enemy4.rbot.x==1970){
            enemy4.rbot.animations.play('right');
        }
        if(enemy4.rbot.x==2220){
            enemy4.rbot.animations.play('left');
        }
        if(enemy6.eman.x==3480){
            enemy6.eman.animations.play('right');
        }
        if(enemy6.eman.x==3680){
            enemy6.eman.animations.play('left');
        }
        if(enemy8.gbot.x==2700){
            enemy8.gbot.animations.play('right');
        }
        if(enemy8.gbot.x==2830){
            enemy8.gbot.animations.play('left');
        }
        if(enemy9.ybot.x==2700){
            enemy9.ybot.animations.play('right');
        }
        if(enemy9.ybot.x==2830){
            enemy9.ybot.animations.play('left');
        }


        this.game.debug.text("Lives "+vidashard,740,50);
        this.game.debug.text("Time",840,50);

        if(total > 10)
        	this.game.debug.text(total, 890, 50);
        else
        	this.game.debug.text(total, 890, 50,"#ff0000");
    },
    resetPlayer:function(spriteThatTriggeredMe,layer){


        if(spriteThatTriggeredMe==player){
            if(gOFlag == 0){
                vidashard--;
            }
            if(vidashard<=0){
                gOFlag = 1;
                gameOverPanel.visible = true;
                restartBtn.visible = true;
                menuInicialGO.visible = true;
                menuInicial.visible = false;
                player.body.allowGravity = false;
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;
                player.animations.stop();
                timer.stop();
                restartBtn.inputEnabled = true;
                console.log("Game Over!");

            }
            else if(vidashard>0){
                playerSpeed = 180;
                total=30;
                console.log("Tem "+vidashard+" vidas");
                console.log("Morreu, nível recomeçado!");
                this.state.start("Level3hard");
            }
        }
    },
    fimJogo:function(){
        gOFlag = 1;
        player.body.allowGravity = false;
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        player.animations.stop();
        timer.stop();
        gameCompletedPanel.visible = true;
        menuNiveis.visible = true;
        menuInicialGO.visible = true;
        menuNiveis.inputEnabled = true;
        level4Unlocked = true;
        if(total==0){
            this.state.start('perguntaRecurso');
        }
    },
    tocaLivro:function(){
        invuln = 1;
        console.log('Player tocou no livro');
        this.time.events.add(Phaser.Timer.SECOND * 3, function(){
            invuln = 0;
        });
        book.kill();
    },
    getCoin:function(){
        map.putTile(-1,layer.getTileX(player.x),layer.getTileY(player.y));
        playerSpeed = playerSpeed*1.2;
        this.time.events.add(Phaser.Timer.SECOND * 2.5, function(){
        playerSpeed = 180;
    }); //Aumenta a velocidade em 20% quando apanha uma modeda durante 2.5 seg
    },
    killenemy1:function(){
        enemy1.bird.kill();
    },
    killenemy2:function(){
        enemy2.bird.kill();
    },
    killenemy3:function(){
        enemy3.eman.kill();
    },
    killenemy4:function(){
        enemy4.rbot.kill();
    },
    killenemy5:function(){
        enemy5.bird.kill();
    },
    killenemy6:function(){
        enemy6.eman.kill();
    },
    killenemy7:function(){
        enemy7.bird.kill();
    },
    killenemy8:function(){
        enemy8.gbot.kill();
    },
    killenemy9:function(){
        enemy9.ybot.kill();
    },
    killenemy10:function(){
        enemy10.bird.kill();
    },

}



function checkOverlap(spriteA,spriteB){ // verifica se 2 sprites deram overlap(se se tocaram)
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA,boundsB);
}

function updateCounter() {
	if(total > 0)
    	total--;

}

function restart3hBtnClick(){
    vidashard=1;
    total = 30;

    this.state.start('Level3hard');
}
