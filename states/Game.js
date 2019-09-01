Game = function(game){}

Game.prototype ={
    create:function(){
        	
        
         this.video=this.game.add.video('Video'+Tipo);//+Tipo);
         this.video.play(true);
        this.video.addToWorld(500, 140, 0.5, 0);
        this.space=this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
         this.aux=0;
         this.TimeAux=0;
         this.Score=0;
        this.time=0;
        this.timeHour=0;
        this.TimeMin=0;
     this.TimeSec=0;
     this.style1 = { font: 'bold 25pt Comic sans', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 };
   //his.bmpText = this.game.add.bitmapText(200, 100, this.style1, Duracion , 30);
       this.buttonReload=this.game.add.sprite(190,515,'buttonReload');
       this.buttonMenu=this.game.add.sprite(900,0,'buttonMenu');
   this.buttonReload.scale.setTo(0.2);
  // this.buttonMenu.scale.setTo(0.2);
   this.video.loop=false;
    
     this.Duracion = 'Duracion : ';
    this.scoreText = this.game.add.text(270, 525, this.Duracion  + this.timeHour + this.TimeMin +this.TimeSec,this.style1);
    this.scoreMax=this.game.add.text(350,720,' ',this.style1);
    
    this.buttonMenu.inputEnabled=true;
   this.buttonReload.inputEnabled=true;
   
    this.buttonMenu.events.onInputDown.add(this.GoMenu,this);
    this.buttonReload.events.onInputDown.add(this.GoAgain,this);
 
   
  
;
    },
    
    update:function(){
         
        
        if(this.game.time.now > this.time)
        
        {
        if(this.space.isDown  || this.game.input.activePointer.isDown)
        {
            this.aux+=0.2;
        }
       
        else if(this.aux<=0)
        {
            this.aux=0;
            this.video.playbackRate=0;
        }else
        {
        this.aux-=0.2;
       
        }
        
        this.video.playbackRate=this.aux;
        this.time=this.game.time.now+800;
     
       this.TimeMin=Math.floor(this.video.currentTime/60);
      this.timeHour=Math.floor(this.video.currentTime/3600);
       if(this.video.currentTime <= 60)
       {
           this.TimeSec=Math.floor(this.video.currentTime);
         
       }
       else{
           this.TimeSec=Math.floor(this.video.currentTime%60);
           
       }
    
   
        }
       
         if(this.video.currentTime >= this.video.duration)
         {
              this.Scoring();
         }
        this.Score=Math.floor(this.video.currentTime);
        
      
         this.scoreText.text=   this.timeHour + '   :   ' + this.TimeMin+ '   :   '  +this.TimeSec;
         this.scoreMax.text= ' Puntaje Maximo '+ this.GetScoreMax();
    
        
        
    },
        GetScoreMax:function(){
          var score;
          switch (Tipo) {
              case 1:
                  {
                  if(localStorage.score1==null)
                    score='No hay puntaje maximo :( ';
                    else
                    score=localStorage.score1;
                  break;
                  }
              case 2:
                  {
                   if(localStorage.score2==null)
                    score='No hay puntaje maximo :( ';
                    else
                    score=localStorage.score2;
                    break;
                  }
              case 4:{
                   if(localStorage.score3==null)
               score='No hay puntaje maximo :( ';
               else
               score=localStorage.score3;
              }
                  // code
          }
          
          return score;  
        },
         GoMenu:function()
         {
             
             this.Scoring();
             this.video.currentTime=0;
            this.video.destroy();
           
             this.game.state.start('Menu')
         },
         
         GoAgain:function()
         {    
          
             this.Scoring();
             
             
              this.Score=0;
             this.aux=0;
              this.video.currentTime=0;
               this.video.play(true);
         },
         Scoring:function(){
            switch (Tipo)
             {
                 case 1:
                     {  if(localStorage.score1==null && this.Score!=0){
                          localStorage.score1=this.Score;
                              }else
                            if(this.Score>=localStorage.score1) {
                                localStorage.score1=this.Score;
                            }
                     
                     
                     break;
                     }
                    
                 case 2:
                     {   
                         if(localStorage.score2==null && this.Score!=0){
                              localStorage.score2=this.Score;
                             }else
                            if(this.Score>=localStorage.score2) {
                               
                                localStorage.score2=this.Score;
                            }
                         
                         break;
                     
                      } 
                 case 4:
                     { 
                         if(localStorage.score3==null && this.Score!=0){
                              localStorage.score3=this.Score;
                              }else
                              
                            if(this.Score>=localStorage.score3) {
                         
                                localStorage.score3=this.Score;
                            }
                         }
                         
                     }
                  
             
             
         }
    
    
   
    
}