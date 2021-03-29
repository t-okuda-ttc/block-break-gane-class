class PaddleInfo {
    //パドルの高さ
    #paddleHeight;
    //パドルの横幅
    #paddleWidth;
    //パドルの位置
    #paddleX;
    //パドルが押された判別
    //パドルが右側に行くか
    #rightPressed;
    //パドルが左側に行くか
    #leftPressed;
    constructor(paddleHeight,paddleWidth,paddleX,rightPressed,leftPressed){
        this.#paddleHeight = 10;
        this.#paddleWidth = 75;
        this.#paddleX = (canvas.width-this.#paddleWidth)/2;
        this.#rightPressed = false;
        this.#leftPressed = false;
    }

    get getPaddleHeight() {
        return this.#paddleHeight;
    }

    set setPaddleHeight(value) {
        this.#paddleHeight = value;
    }

    get getPaddleWidth() {
        return this.#paddleWidth;
    }

    set setPaddleWidth(value) {
        this.#paddleWidth = value;
    }

    get getPaddleX() {
        return this.#paddleX;
    }

    set setPaddleX(value) {
        this.#paddleX = value;
    }

    get getRightPressed() {
        return this.#rightPressed;
    }

    set setRightPressed(value) {
        this.#rightPressed = value;
    }

    get getLeftPressed() {
        return this.#leftPressed;
    }

    set setLeftPressed(value) {
        this.#leftPressed = value;
    }

    //パドルを表示させるメソッド
    drawPaddle() {
        ctx.beginPath();
        ctx.rect(this.#paddleX, canvas.height-this.#paddleHeight, this.#paddleWidth, this.#paddleHeight);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }

    //パドルがどのくらい動いたかを決める
    paddleMoving() {
        if(this.#rightPressed && this.#paddleX < canvas.width-this.#paddleWidth) {
            this.#paddleX += 7;
        }
        else if(this.#leftPressed && this.#paddleX > 0) {
            this.#paddleX -= 7;
        }
    }
}
    //パドルのキーボード操作
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        paddleinfo.setRightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        paddleinfo.setLeftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        paddleinfo.setRightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        paddleinfo.setLeftPressed = false;
    } 
}


