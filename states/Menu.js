Menu = function(game){Menu}
var Tipo;
Menu.prototype = {
    preload:function(){
    
       this.tile1 = this.game.add.image(480, 350, 'Tile1');
      this.tile2= this.game.add.image(480, 200, 'Tile2');
        this.button1=this.game.add.sprite(150,600,'button',1);
        this.button2=this.game.add.sprite(400,600,'button',2);
        this.button3=this.game.add.sprite(700,600,'button',0);
        this.buttonHighscore=this.game.add.sprite(400,400,'buttonHigscore');
        this.tile1.anchor.set(0.5, 1);
        this.tile2.anchor.set(0.5,1);
         this.MenuTheme = this.game.add.audio('MainTheme');
         this.MenuTheme.play();
      this.button1.inputEnabled=true;
      this.button2.inputEnabled=true;
      this.button3.inputEnabled=true;
     this.buttonHighscore.inputEnabled=true;
      this.time=0;
      this.button1.events.onInputDown.add(this.Go1,this);
      this.button2.events.onInputDown.add(this.Go2,this);
      this.button3.events.onInputDown.add(this.Go3,this);
      this.buttonHighscore.events.onInputDown.add(this.GoHighscore,this);
    
    },
    update:function(){ 
         
        if(this.game.time.now > this.time)
        
        {
      this.game.add.tween(this.tile2.scale).to( { x:1.3, y: 1.4 },400, "Sine.easeInOut", true, 0, -1, true);  
     
         this.game.add.tween(this.tile1.scale).to( { x:1.3, y: 1.4 },400, "Sine.easeInOut", true, 0, -1, true);  

            
        }
          this.time=this.game.time.now+1500;
    },
    
    Go1:function(){
        Tipo=1;
       this.MenuTheme.stop();
        this.game.state.start('Game');
    },
    
     Go2:function(){
        Tipo=2;
        this.MenuTheme.stop();
        this.game.state.start('Game');
    },
     Go3:function(){
        Tipo=4;
         this.MenuTheme.stop();
        this.game.state.start('Game');
    },
     GoHighscore:function(){
          this.MenuTheme.stop();
         this.game.state.start('Highscore');
     }
    
}