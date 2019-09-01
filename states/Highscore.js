Highscore = function(game){Highscore}

Highscore.prototype = {
    preload:function(){
        
       
        
       this.back = this.game.add.tileSprite(0, 0, 1020, 800, 'HighscoreBackground');
       

        this.buttonMen=this.game.add.sprite(900,0,'buttonMenu');
       this.Scoretheme = this.game.add.audio('ScoreTheme');
      this.Scoretheme.play();
      this.buttonMen.inputEnabled=true;
      var style = { font: 'bold 60pt Comic sans', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 };
       var style1 = { font: 'bold 20pt Comic sans', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 };
      this.buttonMen.events.onInputDown.add(this.GoMenu,this);
    this.scoreString = 'HIGHSCORES : ';
    
    this.Video1Score=localStorage.score1;
    this.Video2Score=localStorage.score2;
    this.Video3Score=localStorage.score3;
    console.log(localStorage.score3);
   if(this.Video1Score== null )
    {
        this.Video1Score='No hay puntuacion';
    }
    if(this.Video2Score==null)
    {
        this.Video2Score='No hay puntuacion';
    }
    if(this.Video3Score==null)
    {
        this.Video3Score='No hay puntuacion';
    }
     this.ScoreText = this.game.add.text(this.game.world.centerX-300,this.game.world.centerY-300, "HIGHSCORES ", style);

    
   this.ScoreText1 = this.game.add.text(this.game.world.centerX-300,this.game.world.centerY-100, "Video 1 : " + this.Video1Score, style1);
   this.ScoreText2 = this.game.add.text(this.game.world.centerX-300,this.game.world.centerY, "Video 2 : " + this.Video2Score, style1);
   this.ScoreText3 = this.game.add.text(this.game.world.centerX-300,this.game.world.centerY+100, "Video 3 : " + this.Video3Score, style1);
    //this.ScoreVideo1 = this.game.add.bitmapText(this.game.world.centerX-100,this.game.world.centerY +150,'bitfont','Video 1 : ' + this.Video1Score,34);
    //this.ScoreVideo2 = this.game.add.bitmapText(this.game.world.centerX-100,this.game.world.centerY +200,'bitfont','Video 2 : ' + this.Video2Score,34);
    //this.ScoreVideo3 = this.game.add.bitmapText(this.game.world.centerX-100,this.game.world.centerY +250,'bitfont','Video 3 : ' + this.Video3Score,34);
    },
    
    update:function(){
        //if(this.Video3Score == null)
      this.back.tilePosition.y += 1;  
    },
    GoMenu:function(){
        this.Scoretheme.stop();
        this.game.state.start('Menu');
    }
}