class BallInfo {
    //ボールのサイズ
    #ballRadius;
    //ボールの初期値
    #x;
    #y;
    //dxは横の向きと速さ
    //dyは縦の向きと速さ
    #dx;
    #dy;
    //ボールの色の固定値を変数に入れる
    #ballColar;
    constructor(ballRadius,x,y,dx,dy,ballColar) {
        this.#ballRadius = 10;
        this.#x = canvas.width/2;
        this.#y = canvas.height-30;
        this.#dx = 3;
        this.#dy = -3;
        this.#ballColar = "blue";
    }
    
    get getBallRadius() {
        return this.#ballRadius;
    }

    set setBallRadius(value) {
        this.#ballRadius = value;
    }

    get getX() {
        return this.#x;
    }

    set setX(value) {
        this.#x = value;
    }

    get getY() {
        return this.#y;
    }

    set setY(value) {
        this.#y = value;
    }

    get getDX() {
        return this.#dx;
    }

    set setDX(value) {
        this.#dx = value;
    }

    get getDY() {
        return this.#dy;
    }

    set setDY(value) {
        this.#dy = value;
    }

    get getBallColar() {
        return this.#ballColar;
    }

    set setBallColar(value) {
        this.#ballColar = value;
    }

    //ボールの色をランダムで変える
    colorChange() {
        var color = { r: 0, g: 0, b: 0 };
        for (var i in color) {
            color[i] = Math.floor(Math.random() * 256);
        }
        //固定値にランダムな値を入れる。
        this.#ballColar = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
    }

    drawBall() {
        ctx.beginPath();
        ctx.arc(this.#x,this.#y, this.#ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.#ballColar;
        ctx.fill();
        ctx.closePath();
    }

    //ボールが壁に当たった時の処理
    wallCollision(playerinfo,paddleinfo) {
        let nowLife = playerinfo.getLives;
        let nowScore = playerinfo.getScore;
        if (this.#x + this.#dx > canvas.width - this.#ballRadius || this.#x + this.#dx < this.#ballRadius) {
            this.#dx = -this.#dx;
            this.colorChange();
        }
        if (this.#y + this.#y < this.#ballRadius) {
            this.#dy = -this.#dy;
            this.colorChange();
        }
        else if (this.#y + this.#dy > canvas.height - this.#ballRadius) {
            if (this.#x > paddleinfo.getPaddleX && this.#x < paddleinfo.getPaddleX + paddleinfo.getPaddleWidth) {
                this.#dy = -this.#dy;
            }
            else {
                if (nowLife  == 5) {
                    alert("残りは" + (nowLife - 1) + "です。まだまだこれから。");
                }
                if(nowLife  == 4) {
                    alert("残りは" + (nowLife - 1) + "です。まだ大丈夫。");
                }
                if(nowLife  == 3) {
                    alert("残りは" + (nowLife - 1) + "です。ちょっとやばいかも");
                }
                if(nowLife  == 2) {
                    alert("残りは" + (nowLife- 1) + "です。やばいやばいやばい");
                }
                playerinfo.setLives = nowLife - 1;
                if (nowLife　== 1) {
                    //失敗した時のスコアを表示
                    alert("0になりました。失敗です。最終スコアは" + nowScore + "です。");
                    document.location.reload();
                }
                else {
                    this.#x = canvas.width / 2;
                    this.#y = canvas.height - 30;
                    //ここで復活した時の速度
                    let min = 1;
                    let max = 10;
                    this.#dx = Math.floor( Math.random() * (max + 1 - min) ) + min ;
                    this.#dy = -(Math.floor( Math.random() * (max + 1 - min) ) + min) ;                  
                    paddleinfo.setPaddleX = (canvas.width - paddleinfo.getPaddleWidth) / 2;
                }
            }
        }
    }
}

