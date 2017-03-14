function highScoreTemplate(name, score){
  var newRow = document.createElement('tr');
  var nameCell = document.createElement('td');
  var scoreCell = document.createElement('td');
  nameCell.innerText = name;
  scoreCell.innerText = score;
  newRow.appendChild(nameCell);
  newRow.appendChild(scoreCell);
  return newRow;
}