class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.middle = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max  = max;

        this.guess();
    }

    guess() {
        if(this.min < this.max){
            this.middle = Math.round((this.min + this.max) / 2);
        }
        return this.middle;
    }

    lower() {
        this.max  = this.middle;
    }

    greater() {
        this.min  = this.middle;
    }


}

module.exports = GuessingGame;
