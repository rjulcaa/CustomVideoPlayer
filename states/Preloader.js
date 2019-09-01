Preloader = function(game){Preloader}

Preloader.prototype = {
    preload:function(){
        

        this.game.load.video('Video1','assets/Video/Video1.mp4');
         this.game.load.video('Video2','assets/Video/Video2.mp4');
         this.game.load.video('Video4','assets/Video/Video4.mp4');
         this.game.load.spritesheet('button', 'assets/Images/button.png', 193, 71);
         this.game.load.spritesheet('buttonReload','assets/Images/butonreload.png');
         this.game.load.spritesheet('buttonMenu','assets/Images/buttonMenu.png');
         this.game.load.spritesheet('buttonHigscore','assets/Images/Highscores.png');
         this.game.load.image('MenuBackground','assets/Images/starfield.jpg');
         this.game.load.image('HighscoreBackground','assets/Images/backScore.png');
         this.game.load.image('VideoBackground','assets/Images/starfield.jpg');
         this.game.load.bitmapFont('bitfont','assets/Fonts/carrier_command.png','assets/Fonts/carrier_command.xml');
         this.game.load.script('filter', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/Fire.js');
         this.game.load.audio('ScoreTheme','assets/Sounds/ScoreTheme.ogg');
         this.game.load.audio('MainTheme','assets/Sounds/MainTheme.ogg');
         this.game.load.image('Tile1','assets/Images/PARCIAL.png');
          this.game.load.image('Tile2','assets/Images/TRABAJO.png');

    },
    
    create:function(){
        this.game.state.start('Menu');
    }
    
}