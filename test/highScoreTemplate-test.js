describe('highScoreTemplate', function(){
  var score, name, $subject;
 
  beforeEach(function(){
    score = 10;
    name = 'Amy';
    var subject = highScoreTemplate(score, name);
    $subject = $(subject);
  });

  it('generates a tr', function(){
    expect($subject.is('tr')).to.equal(true);
  });

  it('contains name and score information', function(){
    expect($subject.text()).to.equal(score + name);
  });
});