var c =document.getElementById("mycanvas");
c.width=1000;
c.height=470;
var ctx = c.getContext('2d');


setInterval(loop,1);
var xPos =100;
var yPos =100;
var vx = 0;
var vy = 0;
var bugx = 230;
var bugy = 230;

var snake = [];

function loop()
{
	update();
	draw();
}
function draw()
{	

	ctx.fillStyle = "lightblue";
	ctx.fillRect(0,0,1000,470);
	ctx.fillStyle = "orange";
	ctx.fillRect(bugx,bugy, 50,50);
	ctx.fillStyle="green";
	for(var i = 0; i<snake.length; i++){
		ctx.fillRect(snake[i].xPos ,snake[i].yPos, 50, 50);
	 };
}

function update()
{	

	xPos += vx;
	yPos += vy;
	snake.push({xPos:this.xPos , yPos:this.yPos});
	
	for(var d=0; d<snake.length; d++){
		if(snake.length > 100){
			snake.shift();
		}
	}


	if(xPos === bugx && yPos === bugy ){
		bugx=Math.floor(Math.random() * 10);
		bugy=Math.floor(Math.random() * 10);

	}

	if(xPos < 0 || yPos <0 || xPos >c.width || yPos > c.height){
		alert('game over');
		window.location.reload(false) 
		
		}
		
}







function move(e) {
  
  if (e.keyCode == 38 && vy != 1) {
		vx= 0;
		vy= -1;
	}
	if(e.keyCode == 40 && vy != -1){
		vx= 0;
		vy= 1;
	}
	if (e.keyCode == 39 && vx != -1){
		vx= 1;
		vy= 0;
	}
	if(e.keyCode == 37 && vx != 1){
		vx= -1;
		vy= 0;
	}

}

document.onkeydown=move;





