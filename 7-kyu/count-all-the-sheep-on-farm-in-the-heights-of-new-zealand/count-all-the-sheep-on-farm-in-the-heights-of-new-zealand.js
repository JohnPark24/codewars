function lostSheep(friday,saturday,total){
  return total - [friday,saturday].flat().reduce((total, num) => total + num,0);
}