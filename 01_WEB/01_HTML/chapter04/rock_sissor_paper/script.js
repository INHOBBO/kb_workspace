function playGame(userChoice) {
  const choices = ['가위', '바위', '보'];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  let resultMessage = '';

  if (userChoice === computerChoice) {
    resultMessage = 'DRAW~';
  } else if (
    (userChoice === '바위' && computerChoice === '가위') ||
    (userChoice === '가위' && computerChoice === '보') ||
    (userChoice === '보' && computerChoice === '바위')
  ) {
    resultMessage = 'YOU WIN!!! :)';
  } else {
    resultMessage = 'YOU LOSE (:';
  }

  const result = document.getElementById('resultText');
  result.innerHTML = `
          PLAYER: ${userChoice} vs COMPUTER: ${computerChoice} <br><br>
          <span>${resultMessage}</span>
        `;
}
