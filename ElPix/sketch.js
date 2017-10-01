var p;
var scl = 30;
var sclR = 30;
var score = 0;
var food = [];
var amarelo;
var verde;
var azul;
var vermelho;
var preto;
var level;
var tempLevel;
var roxo;

function setup(){
	level = 1;
	tempLevel = 1;
	createCanvas(600,600);
	amarelo = color(255,255,0);
	verde = color(0,255,0);
	azul = color(0,0,255);
	vermelho = color(255,0,0);
	preto = color(0,0,0);
	roxo = color(102,0,204);
	p = new Pixel();
	carregaNivel();
}

function draw(){
	background(255,255,255);
	fill(0,0,0);
	textSize(30);
	text("Level: "+tempLevel,10,40);
	text("Score: "+score,150,40);
	var preto = color(0,0,0);
	stroke(preto);
	noFill();
	rect(0, 55, 598, 544);
	p.update();
	p.show();
	for (var i = 0; i < food.length; i++) {
    	food[i].update();
    	food[i].show();
  	}
  	p.eat();
  	var existe = false;
  	for (var i = 0; i < food.length; i++) {
    	if(food[i].cor == p.cor) {existe = true;break;}
  	}
  	if(existe == false) p.changeColor();
  	if(food.length == 0) {
  		level++;
  		tempLevel++; 
  		fill(0,0,0);
    	textSize(30);
    	text("Level Up",250,300);
    	carregaNivel();
    }
}

function carregaNivel(){
	sclR = scl;
	level = tempLevel;
	for(var i=0;i<5*level;i++){
		switch(Math.floor(Math.random() * 5)){
	   		case 0 : food[i] = new PixelR(amarelo);
	   	 			break;
	   		case 1 : food[i] = new PixelR(verde);
	   	 			break;
	   		case 2 : food[i] = new PixelR(azul);
	   	 			break;
	   		case 3 : food[i] = new PixelR(vermelho);
	   	 			break;
	   		case 4 : food[i] = new PixelR(preto);
	   	 			break;
		}
	}
	food[i] = new PixelR(roxo);
	//setTimeout(secretEvent,5000);
}

function secretEvent(){
	sclR = scl*2;
	level += 5;
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		p.up();
	}
	else if(keyCode == DOWN_ARROW){
		p.down();
	}
	else if(keyCode == RIGHT_ARROW){
		p.right();
	}
	else if(keyCode == LEFT_ARROW){
		p.left();
	}
}

function keyReleased(){
	if(keyCode == UP_ARROW){
		p.down();
	}
	else if(keyCode == DOWN_ARROW){
		p.up();
	}
	else if(keyCode == RIGHT_ARROW){
		p.left();
	}
	else if(keyCode == LEFT_ARROW){
		p.right();
	}
}