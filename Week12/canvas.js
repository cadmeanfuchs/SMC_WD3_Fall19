var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");
var counterFire = 1;

var ballX = canvas.width/2;
var ballY = canvas.height/2;
var ballColor = 'rgb(0, 155, 155)';
var ballRadius = 50;

var speedX = 5;
var speedY = 3;

var directionDown = true;
var directionRight = true;

function animate(){
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = 'yellow';
    ctx.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if(ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0 ) {
        directionRight = !directionRight;
    }

    if(directionRight){
        ballX = ballX + speedX;
    }
    else {
        ballX = ballX - speedX;
    }


    if(ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
        directionDown = !directionDown;
    }
    if(directionDown){
        ballY = ballY + speedY;
    }
    else {
        ballY = ballY - speedY;
    }

    window.requestAnimationFrame(animate);
}

animate();

canvas.addEventListener("click", function(event){

    var distX = Math.abs(ballX - event.clientX);
    var distY = Math.abs(ballY - event.clientY);
    
    var countBall = document.createElement("p");
    var numz = document.createTextNode(counterFire);
    countBall.appendChild(numz);

    var element = document.getElementById("Ballcounter");
    element.appendChild(countBall);
    
    if(ballColor = 'rgb(0, 155, 155)'){
        ballColor = 'rgb(155, 55, 155)';
    }
    
    else if(ballColor = 'rgb(155, 55, 155)'){
        ballColor = 'rgb(155, 155, 55)';
    }
    
    else if(ballColor =  'rgb(155, 155, 55)'){
        ballColor = 'rgb(0, 155, 155)';
    };

    if(distX < ballRadius && distY < ballRadius){
        console.log('FIRE!!!!!!');
        counterFire += 1;
    };
})