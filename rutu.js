class forestrutu
{
    constructor() {
		this.x = 500;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 100,100);
		this.spt.shapeColor="blue";
		this.spt.addAnimation("rutuinforestidle1",rutuinforestidle);
        this.spt.addAnimation("rutuinforestrunning1",rutuinforestrunning);
		this.spt.addAnimation("rutuinforestjump",rutuinforestjump);
		this.spt.frameDelay=1
		//this.spt.debug=true
        this.spt.scale=0.5
	}

rutuapplyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+0.5;
		this.spt.changeAnimation("rutuinforestidle1",rutuinforestidle);
	}

	rutumoveLeft()
	{ 
	
		this.spt.changeAnimation("rutuinforestrunning1",rutuinforestrunning);
	}

	rutumoveRight()
	{ 

		this.spt.x=this.spt.x+8;
        this.spt.changeAnimation("rutuinforestrunning1",rutuinforestrunning);
       
	}

	rutujump()
	{ 
		this.spt.velocityY=-15;
	
    }
	
}
