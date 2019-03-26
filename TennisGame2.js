class TennisGame2{
    constructor(player1Name, player2Name){
        this.player1Point = 0;
        this.player2Point = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    getScore() {
        let score = "";
        if(this.isTie()) {
            score = this.getLiteralForTie();
        }
        if(this.isDeuce()){
            score = this.getLiteralForDeuce();
        }
        if(this.isNormal()){
            score = this.getLiteralForNormal();
        }
        if(this.isAdvantage()){
            score = this.getLiteralForAdvantage();
        }
        if(this.isWin()){
            score = this.getLiteralForWin();
        }
        return score;
    }

    getLiteralForNormal(){
        return this.translateToLiteral(this.player1Point) + "-" + this.translateToLiteral(this.player2Point);
    }

    getLiteralForDeuce(){
        return "Deuce";
    }

    getLiteralForTie(){
        return this.translateToLiteral(this.player1Point) + "-All";
    }

    getLiteralForWin(){
        let result = "";
        if (this.player1Point > this.player2Point) {
            result = "Win for player1";
        }else{
            result = "Win for player2";
        }
        return result;
    }

    getLiteralForAdvantage(){
        let result = "";
        if (this.player1Point > this.player2Point) {
            result = "Advantage player1";
        }else{
            result = "Advantage player2";
        }
        return result;
    }
    
    isInWinOver(player1Points, player2Points) {
        return player1Points >= 4 && player2Points >= 0 && (player1Points - player2Points) >= 2;
    }
    
    isWin(){
        return this.isInWinOver(this.player1Point, this.player2Point) ||
         this.isInWinOver(this.player2Point, this.player1Point);
    }

    isAdvantage(){
        return this.isInAdvantageOver(this.player1Point, this.player2Point) ||
         this.isInAdvantageOver(this.player2Point, this.player1Point);
    }

    isInAdvantageOver(player2Points, player1Points){
        return player2Points > player1Points && player1Points >= 3;
    }

    isNormal() {
        return this.player1Point !== this.player2Point;
    }

    translateToLiteral(point) {
        let result="";
        if(point === 0)
            result = "Love";
        if (point === 1)
            result = "Fifteen";
        if (point === 2)
            result = "Thirty";
        if (point === 3)
            result = "Forty";
        return result;
    }

    isDeuce() {
        return this.player1Point === this.player2Point && this.player1Point > 2;
    }

    isTie() {
        return this.player1Point === this.player2Point && this.player1Point < 3;
    }

    SetP1Score(number) {
        var i;
        for (i = 0; i < number; i++) {
            this.P1Score();
        }
    }

    SetP2Score(number) {
        var i;
        for (i = 0; i < number; i++) {
            this.P2Score();
        }
    }

    P1Score() {
        this.player1Point++;
    }

    P2Score() {
        this.player2Point++;
    }

    wonPoint(player) {
        if (player === "player1")
            this.P1Score();
        else
            this.P2Score();
    }
}
module.exports = TennisGame2;

