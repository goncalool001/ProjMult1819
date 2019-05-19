class EnemyBirdHard {
    constructor(index,game,x,y) {
        this.bird = game.add.sprite(x,y,'ufo');
        this.bird.anchor.setTo(0.5);
        this.bird.scale.setTo(0.055);
        this.bird.name = index.toString();//transforma o index do passaro numa string

        game.physics.enable(this.bird,Phaser.Physics.ARCADE);
        this.bird.body.immovable = true;
        this.bird.body.collideWorldBounds = true;
        this.bird.body.allowGravity = false;//retira a gravidade do passaro
        //nao percebi bem a cena dos Tweens
        this.birdTween = game.add.tween(this.bird).to({
            y: this.bird.y + 125//mexe-se 100frames
        },1200,'Linear',true,0,100,true);
    }
}

class EnemyManHard {
    constructor(index,game,x,y) {
        this.eman = game.add.sprite(x,y,'spaceman');

        this.eman.anchor.setTo(0.5);
        this.eman.scale.setTo(0.8);

        game.physics.enable(this.eman,Phaser.Physics.ARCADE);
        this.eman.body.collideWorldBounds = true;
        this.eman.body.setSize(10, 62);

        this.birdTween = game.add.tween(this.eman).to({
            x: this.eman.x + 200//mexe-se 150frames
        },1300,'Linear',true,0,100,true);
    }
}

class EnemyBotRedHard{
    constructor(index,game,x,y) {
        this.rbot = game.add.sprite(x,y,'redBot');

        this.rbot.anchor.setTo(0.5);
        this.rbot.scale.setTo(0.8);

        game.physics.enable(this.rbot,Phaser.Physics.ARCADE);
        this.rbot.body.collideWorldBounds = true;

        this.rbot.body.setSize(24, 60);
        this.birdTween = game.add.tween(this.rbot).to({
            x: this.rbot.x + 250//mexe-se 150frames
        },1000,'Linear',true,0,100,true);
    }
}


class EnemyBotGreenHard{
    constructor(index,game,x,y) {
        this.gbot = game.add.sprite(x,y,'greenBot');

        this.gbot.anchor.setTo(0.5);
        this.gbot.scale.setTo(0.8);

        game.physics.enable(this.gbot,Phaser.Physics.ARCADE);
        this.gbot.body.collideWorldBounds = true;

        this.gbot.body.setSize(24, 60);
        this.birdTween = game.add.tween(this.gbot).to({
            x: this.gbot.x + 130//mexe-se 150frames
        },1100,'Linear',true,0,100,true);
    }
}


class EnemyBotYellowHard{

    constructor(index,game,x,y) {
        this.ybot = game.add.sprite(x,y,'yellowBot');

        this.ybot.anchor.setTo(0.5);
        this.ybot.scale.setTo(0.8);

        game.physics.enable(this.ybot,Phaser.Physics.ARCADE);
        this.ybot.body.collideWorldBounds = true;

        this.ybot.body.setSize(24, 60);
        this.birdTween = game.add.tween(this.ybot).to({
            x: this.ybot.x + 130//mexe-se 150frames
        },1100,'Linear',true,0,100,true);
    }
}


class AllyBirdy{
    constructor(index,game,x,y) {
        this.abirdy = game.add.sprite(x,y,'allyBird');
        this.abirdy.anchor.setTo(0.5);
        this.abirdy.scale.setTo(1);
        this.abirdy.name = index.toString();//transforma o index do passaro numa string

        game.physics.enable(this.abirdy,Phaser.Physics.ARCADE);
        this.abirdy.body.immovable = true;
        this.abirdy.body.collideWorldBounds = true;
        this.abirdy.body.allowGravity = false;//retira a gravidade do passaro

        this.abirdy.body.setSize(30, 28);
        this.abirdyTween = game.add.tween(this.abirdy).to({
            y: this.abirdy.y + 150//mexe-se 100frames
        },2000,'Linear',true,0,100,true);
        }
}
class EnemyBird{

    constructor(index,game,x,y) {
    this.bird = game.add.sprite(x,y,'ufo');
    this.bird.anchor.setTo(0.5);
    this.bird.scale.setTo(0.055);
    this.bird.name = index.toString();//transforma o index do passaro numa string

    game.physics.enable(this.bird,Phaser.Physics.ARCADE);
    this.bird.body.immovable = true;
    this.bird.body.collideWorldBounds = true;
    this.bird.body.allowGravity = false;//retira a gravidade do passaro


    this.birdTween = game.add.tween(this.bird).to({
        y: this.bird.y + 100//mexe-se 100frames
    },2000,'Linear',true,0,100,true);
    }
}

class EnemyMan{
        constructor(index,game,x,y) {
        this.eman = game.add.sprite(x,y,'spaceman');

        this.eman.anchor.setTo(0.5);
        this.eman.scale.setTo(0.8);

        game.physics.enable(this.eman,Phaser.Physics.ARCADE);
        this.eman.body.collideWorldBounds = true;
        this.eman.body.setSize(10, 62);
        this.birdTween = game.add.tween(this.eman).to({
            x: this.eman.x + 200//mexe-se 150frames
        },1750,'Linear',true,0,100,true);
    }
}

class EnemyBotRed{
    constructor(index,game,x,y) {
        this.rbot = game.add.sprite(x,y,'redBot');

        this.rbot.anchor.setTo(0.5);
        this.rbot.scale.setTo(0.8);

        game.physics.enable(this.rbot,Phaser.Physics.ARCADE);
        this.rbot.body.collideWorldBounds = true;

        this.rbot.body.setSize(24, 60);
        this.birdTween = game.add.tween(this.rbot).to({
            x: this.rbot.x + 250//mexe-se 150frames
        },1250,'Linear',true,0,100,true);
    }
}
class EnemyBotGreen{
    constructor(index,game,x,y) {
        this.gbot = game.add.sprite(x,y,'greenBot');

        this.gbot.anchor.setTo(0.5);
        this.gbot.scale.setTo(0.8);

        game.physics.enable(this.gbot,Phaser.Physics.ARCADE);
        this.gbot.body.collideWorldBounds = true;

        this.gbot.body.setSize(24, 60);
        this.birdTween = game.add.tween(this.gbot).to({
            x: this.gbot.x + 130//mexe-se 150frames
        },1250,'Linear',true,0,100,true);
    }
}
class EnemyBotYellow{
    constructor(index,game,x,y) {
        this.ybot = game.add.sprite(x,y,'yellowBot');

        this.ybot.anchor.setTo(0.5);
        this.ybot.scale.setTo(0.8);

        game.physics.enable(this.ybot,Phaser.Physics.ARCADE);
        this.ybot.body.collideWorldBounds = true;

        this.ybot.body.setSize(24, 60);
        this.birdTween = game.add.tween(this.ybot).to({
            x: this.ybot.x + 130//mexe-se 150frames
        },1250,'Linear',true,0,100,true);
    }
}

class EnemyBoss{
    constructor(index,game,x,y) {
        this.boss = game.add.sprite(x,y,'boss');

        this.boss.anchor.setTo(0.5);
        this.boss.scale.setTo(1.2);


        game.physics.enable(this.boss,Phaser.Physics.ARCADE);
        this.boss.body.collideWorldBounds = true;

        this.boss.body.setSize(19, 38);
        this.birdTween = game.add.tween(this.boss).to({
            x: this.boss.x + 250//mexe-se 150frames
        },2500,'Linear',true,0,100,true);
    }
}
