const gForce = 1;
const groundForce = 1;

var box = document.getElementById("box");
var boxX = 50;
var boxY = 0;
var boxYforce = 0;
var boxXforce = 0;
function gameTic(){
	console.log("_ game tic _");
	boxXmove = boxXforce;
	boxYmove = boxYforce;
	console.log("move x: " + boxXmove);
	console.log("move y: " + boxYmove);
	
	if((boxX+boxXmove) < -50){
		boxXmove = 0;
		console.log("move x stoppers active1: " + (boxX+boxXmove));
	}
	if((boxX+boxXmove) > 250){
		boxXmove = 0;
		console.log("move x stoppers active2: " + (boxX+boxXmove));
	}
	
	if((boxY+boxYmove) <= -1){
		boxYmove = 0;
		console.log("move y stoppers active: " + (boxY+boxYmove));
	}

	console.log("move x after stoppers: " + boxXmove);
	console.log("move y after stoppers: " + boxYmove);
	
	box.style.left = (boxX+boxXmove) + "px"; //moving x
	box.style.top = (260-(boxY+boxYmove)) + "px"; //moving y
	boxX = (boxX+boxXmove);
	boxY = ((boxY+boxYmove));
	
	console.log(boxX+boxXmove);
	console.log((boxY+boxYmove));
	
	
	if(boxXforce > 0){
		if (boxY < 2){
			boxXforce = boxXforce-groundForce;
			console.log("move x decreaser active: " + boxXforce);
		}
	}
	else if(boxXforce < 0){
		if (boxY < 2){
			boxXforce = boxXforce+groundForce;
			console.log("move x decreaser active: " + boxXforce);
		}
	}
	else{
		console.log("move x decreaser NOTactive: " + boxXforce);
	}
	if(boxYforce > -50){
		boxYforce = boxYforce-gForce;
		console.log("move y decreaser active: " + boxYforce);
	}
	else{
		console.log("move y decreaser NOTactive: " + boxYforce);
	}
	console.log("_ game tic end _");
}
function jump(x, y){
	boxXforce = x;
	boxYforce = y;
	console.log("force set " + x + ", " + y);
}
setInterval(gameTic, 40);