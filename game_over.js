var Game_Over = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('gameover', 'PAB_OVER.png');
    },

    create : function() {

        // Create button to start game similar to the main menu.
        this.add.button(0, 0, 'gameover', this.startGame, this);

        // Last Score Info.
      //  game.add.text(400, 450, "LAST SCORE", { font: "bold 16px sans-serif", fill: "#000000", align: "center"});
    game.add.text(400, 430, count.toString(), { font: "bold 28px sans-serif", fill: "#000000", align: "center" });

    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');
	
    }

};
