var game = new Phaser.Game(1020,800,Phaser.AUTO);
game.state.add('Preloader',Preloader);
game.state.add('Menu',Menu);
game.state.add('Game',Game);
game.state.add('Highscore',Highscore);
//game.state.add('GameOver',GameOver);
game.state.start('Preloader');