function PixelR(cor){
	while(true){
		this.x = random(10,width-scl);
		this.y = random(10,height-scl);
		var d = dist(this.x,this.y,p.x,p.y);
		if(d < scl*2){}
		else break;
	}
	this.xspeed = random(-2,3);
	this.yspeed = random(-2,3);
	this.cor = cor;

	this.show = function(){
		fill(this.cor);
		ellipse(this.x,this.y,sclR,sclR);
	}

	this.update = function(){
		if(this.x <= sclR/2) this.xspeed=1;
		if(this.x >= width-(sclR/2)) this.xspeed=-1;

		if(this.y <= 55+(sclR/2)) this.yspeed=1;
		if(this.y >= height-(sclR/2)) this.yspeed=-1;

		this.x = this.x + this.xspeed*(level/5);
		this.y = this.y + this.yspeed*(level/5);

		this.x = constrain(this.x,sclR/2,width-(sclR/2));
		this.y = constrain(this.y,70,height-(sclR/2));
	}
}