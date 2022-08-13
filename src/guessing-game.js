class GuessingGame {
    constructor() {}

    setRange(min, max) {
  this.left = min;
  this.right = max;   
    }

    guess() {
  this.middle = Math.round((this.right - this.left)/2) + this.left;
      return this.middle;
      
    }

    lower() {
        this.right = this.guess();
        return this.right
    }

    greater() {
this.left = this.guess();
    return this.left
    }
}

module.exports = GuessingGame;
