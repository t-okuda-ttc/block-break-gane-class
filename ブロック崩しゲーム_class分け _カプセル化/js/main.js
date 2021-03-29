//全てのjsを終結させるjs 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 
var brickinfo = new BrickInfo();
var ballinfo = new BallInfo();
var paddleinfo = new PaddleInfo();
var playerinfo = new PlayerInfo();

brickinfo.brickMake();

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    brickinfo.drawBricks();
    ballinfo.drawBall();
    paddleinfo.drawPaddle();
    playerinfo.drawScore();
    playerinfo.drawLives();
    playerinfo.drawTitle();
    brickinfo.collisionDetection(ballinfo,playerinfo);
    ballinfo.wallCollision(playerinfo,paddleinfo);
    paddleinfo.paddleMoving();

    let nextX = ballinfo.getDX + ballinfo.getX;
    let nextY = ballinfo.getDY + ballinfo.getY;

    ballinfo.setX = nextX;
    ballinfo.setY = nextY;

    requestAnimationFrame(draw); 
}

draw();



