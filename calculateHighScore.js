function calculateHighScore(score, highScore){
  return Math.max(score, highScore);
}

if(typeof module !== 'undefined') {
  module.exports = calculateHighScore;
}