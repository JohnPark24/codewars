// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  constructor(side){
    this.side = Math.abs(side || 0);
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}