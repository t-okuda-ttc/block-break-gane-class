class PlayerInfo {
    //スコアの初期値
    #score;
    //ここでライフの数を変更できる
    #lives;
    constructor(score,width) {
        this.#score = 0;
        this.#lives = 5;
    }

    get getScore() {
        return this.#score;
    }

    set setScore(value) {
        this.#score = value;
    }

    get getLives() {
        return this.#lives;
    }

    set setLives(value) {
        this.#lives = value;
    }

    drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("score: "+this.#score, 8, 20);
    }

    drawLives() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("HP: "+this.#lives, canvas.width-65, 20);
    }

    drawTitle() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("ブロック崩しゲーム", canvas.width-350, 20);
    }
}