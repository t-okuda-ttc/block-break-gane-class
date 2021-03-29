class BrickInfo {
    //ブロックの列変えれる
    #brickRowCount;
    //ブロックの行変えれる
    #brickColumnCount;
    //ブロックの幅を変える
    #brickWidth;
    //ブロックの高さを変える
    #brickHeight;
    //ブロックの間隔を開けれる
    #brickPadding;
    //上の間隔を開けれる
    #brickOffsetTop;
    //左側の間隔を開けることができる
    #brickOffsetLeft;
    //配列の箱を作る
    #bricks;
    constructor(brickRowCount,brickColumnCount,brickWidth,brickHeight,brickPadding,
        brickOffsetTop,brickOffsetLeft,bricks){
        this.#brickRowCount = 5;
        this.#brickColumnCount = 5;
        this.#brickWidth = 75;
        this.#brickHeight = 20;
        this.#brickPadding = 20;
        this.#brickOffsetTop = 45;
        this.#brickOffsetLeft = 50;
        this.#bricks = [];
    }

    get getBrickRowCount() {
        return this.#brickRowCount;
    }

    set setBrickRowCount(value) {
        this.#brickRowCount = value;
    }

    get getBrickColumnCount() {
        return this.#brickColumnCount;
    }

    set setBrickColumnCount(value) {
        this.#brickColumnCount = value;
    }

    get getBrickWidth() {
        return this.#brickWidth;
    }

    set setBrickWidth(value) {
        this.#brickWidth = value;
    }

    get getBrickHeight() {
        return this.#brickHeight;
    }

    set setBrickHeight(value) {
        this.#brickHeight = value;
    }

    get getBrickPadding() {
        return this.#brickPadding;
    }

    set setBrickPadding(value) {
        this.#brickPadding = value;
    }

    get getBrickOffsetTop() {
        return this.#brickOffsetTop;
    }

    set setBrickOffsetTop(value) {
        this.#brickOffsetTop = value;
    }

    get getBrickOffsetLeft() {
        return this.#brickOffsetLeft;
    }

    set setBrickOffsetLeft(value) {
        this.#brickOffsetLeft = value;
    }

    get getBricks() {
        return this.#bricks;
    }

    set setBricks(value) {
        this.#bricks = value;
    }

    brickMake(){
        for(var c=0; c<this.#brickColumnCount; c++) {
            this.#bricks[c] = [];
            for(var r=0; r<this.#brickRowCount; r++) {
            this.#bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
    }

    drawBricks() {
        for(var c=0; c<this.#brickColumnCount; c++) {
            for(var r=0; r<this.#brickRowCount; r++) {
                if(this.#bricks[c][r].status == 1) {
                    var brickX = (r*(this.#brickWidth+this.#brickPadding))+this.#brickOffsetLeft;
                    var brickY = (c*(this.#brickHeight+this.#brickPadding))+this.#brickOffsetTop;
                    this.#bricks[c][r].x = brickX;
                    this.#bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, this.#brickWidth, this.#brickHeight);
                    ctx.fillStyle = "white";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    //ブロックの衝突処理
    collisionDetection(ballinfo,playerinfo) {
        var nowX = ballinfo.getX;
        var nowY = ballinfo.getY;
        var nowdY = ballinfo.getDY;
        var nowScore = playerinfo.getScore;
        for(var c=0; c<this.#brickColumnCount; c++) {
            for(var r=0; r<this.#brickRowCount; r++) {
                var b = this.#bricks[c][r];
                if(b.status == 1) {
                    if(nowX > b.x && nowX < b.x+this.#brickWidth && nowY > b.y && nowY < b.y+this.#brickHeight) {
                        ballinfo.setDY = -nowdY;
                        b.status = 0;
                        ballinfo.colorChange();
                        playerinfo.setScore = nowScore + 1;
                        if(nowScore + 1 == this.#brickRowCount*this.#brickColumnCount) {
                            //クリアした時のscoreを表示
                            alert("成功です。最終得点は " + (nowScore + 1) + "点です。");
                            document.location.reload();
                        }
                    }
                }
            }
        }
    }
}