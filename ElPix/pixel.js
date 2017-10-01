function Pixel(cor){
	this.x = 300;
	this.y = 300;
	this.xspeed = 0;
	this.yspeed = 0;
	this.cor = cor;

	switch(Math.floor(Math.random() * 5)){
	   	case 0 : this.cor = amarelo;
	    	 break;
	    case 1 : this.cor = verde;
	    	 break;
	    case 2 : this.cor = azul;
	    	 break;
	    case 3 : this.cor = vermelho;
	    	 break;
	    case 4 : this.cor = preto;
	    	 break;
	}


	this.update = function(){
		this.x = this.x + this.xspeed*(scl/10);
		this.y = this.y + this.yspeed*(scl/10);

		this.x = constrain(this.x,scl/2,width-(scl/2));
		this.y = constrain(this.y,70,height-(scl/2));
	}

	this.show = function(){
		fill(this.cor);
		ellipse(this.x,this.y,scl,scl);
		fill(255);
		ellipse(this.x,this.y,scl/3,scl/3);
	}

	this.eat = function(){
		for (var i = 0; i < food.length; i++) {
    		var d = dist(this.x,this.y,food[i].x,food[i].y);
    		if(d < (scl/2)+(sclR/2)){
    			if(this.cor == food[i].cor){food.splice(i,1);score++;}
    			else if(food[i].cor == roxo){food.splice(i,1);secretEvent();}
    			else {
    				fill(0,0,0);
    				textSize(30);
    				text("GAME OVER",250,300);
    				noLoop();
    			}
    		}
  		}
	}

	this.changeColor = function(){
		switch(Math.floor(Math.random() * 5)){
	   		case 0 : this.cor = amarelo;
	    	 	break;
	    	case 1 : this.cor = verde;
	    	 	break;
	    	case 2 : this.cor = azul;
	    	 	break;
	    	case 3 : this.cor = vermelho;
	    	 	break;
	    	case 4 : this.cor = preto;
	    	 	break;
		}
	}

	this.up = function(){
		this.yspeed += -1;
	}

	this.down = function(){
		this.yspeed += 1;
	}

	this.right = function(){
		this.xspeed += 1;
	}

	this.left = function(){
		this.xspeed += -1;
	}
}
