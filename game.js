// var snake,apple,mario,flower;
// var counter=0;
// var timer;
var timer;
var total=1;
var count=0;

var Game = {

    preload : function() {
    	game.load.image('background','very-cool-blue-sky-800x600-wallpaper.jpg');
    	game.load.image('pbub', 'speech-balloon-white-p-icon.png');
    	game.load.image('abub','speech-balloon-green-a-icon.png');
    	game.load.image('bbub','speech-balloon-orange-b-icon.png');
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        // game.load.image('snake', 'snake.png');
        // game.load.image('apple', 'apple.png');
        // game.load.image('mario','Mario.png');
        // game.load.image('flower','PNGPIX-COM-Dahlia-Flower-PNG-Transparent-Image.png');
    },

    create : function() {

         

    	timer=game.time.create(false);
    timer.loop(1000,updateCounter,this);
        timer.start();


    function updateCounter()
    {
        total++;
        if(total==11)
        {
            
           // game_music.stop();
            alert("SORRY!! TIME UP :(");
    game.state.start('Game_Over');
    total = 1;
    }
}

        var bg = game.add.tileSprite(0, 0, 800, 600, 'background');
        var delay = 0;

// for random p and a bubbles

        for(var j=0; j< 10; j++)
        {
        	var pbubble = game.add.sprite(-100 + (game.world.randomX), 600, 'pbub');

        pbubble.scale.set(game.rnd.realInRange(0.1, 0.5));

        var abubble = game.add.sprite(-100 + (game.world.randomX), 600, 'abub');

        abubble.scale.set(game.rnd.realInRange(0.1, 0.3));

        var bbubble = game.add.sprite(-100 + (game.world.randomX), 600, 'bbub');

        bbubble.scale.set(game.rnd.realInRange(0.1, 0.4));

        var speed = game.rnd.between(8000, 10000);

        game.add.tween(abubble).to({ y: -100 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        game.add.tween(pbubble).to({ y: -120 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        game.add.tween(bbubble).to({ y: -90 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 150;

        bbubble.inputEnabled = true;

        bbubble.input.useHandCursor = true;

		bbubble.events.onInputDown.add(destroySprite, this);
        }

// for b bubbles only
    	for (var i = 0; i < 10; i++)
    	{
        var bbubble = game.add.sprite(-100 + (game.world.randomX), 600, 'bbub');

        bbubble.scale.set(game.rnd.realInRange(0.1, 0.4));

        // var pbubble = game.add.sprite(-100 + (game.world.randomX), 600, 'pbub');

        // pbubble.scale.set(game.rnd.realInRange(0.1, 0.5));

        // var abubble = game.add.sprite(-100 + (game.world.randomX), 600, 'abub');

        // abubble.scale.set(game.rnd.realInRange(0.1, 0.3));

        // var speed = game.rnd.between(8000, 10000);

        // game.add.tween(abubble).to({ y: -100 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        // game.add.tween(pbubble).to({ y: -120 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        
        game.add.tween(bbubble).to({ y: -90 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

        delay += 150;

        bbubble.inputEnabled = true;

        bbubble.input.useHandCursor = true;

		bbubble.events.onInputDown.add(destroySprite, this);
    	}

function destroySprite (bbubble) {

    bbubble.destroy();
       count++;
       if(count==15)
    {
        alert("CONGRATS!! YOU WON :)");
        game.state.start('Game_Over');
        total=1;
    }

    }
},

    update: function() {

    	 game.add.text(32, 32, "BURST 15 'B' BUBBLES IN 10 SECS", { font: "16px sans-serif", fill: "#FFFFFF"});
    game.debug.text('TIME IN SECONDS: ' + total,32,32);
    game.debug.text('BUBBLES BURST: ' +count,32,580);
    	//bg.tilePosition.y += -0.4;
    },

   

};
