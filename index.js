let playerDisplayLabel = document.getElementById("playerDisplayLabel");
let computerDisplayLabel = document.getElementById("computerDisplayLabel");
let resultLabel = document.getElementById("resultLabel");

function handleGamePlay(input) {
  let result;
  playerDisplayLabel.textContent = "Player Choice: " + input;
  const compChoice = Math.floor(Math.random() * 3);
  const compSelection = ["stone", "paper", "scissor"][compChoice];
  computerDisplayLabel.textContent = "Computer Choice: " + compSelection;
  resultLabel.classList.remove("success", "failure");
  if (compSelection === input) {
    result = "It's a tie... Try Again";
  } else {
    switch (compSelection) {
      case "stone":
        result = input === "paper" ? "You Win" : "Computer Wins";
        break;
      case "paper":
        result = input === "scissor" ? "You Win" : "Computer Wins";
        break;
      case "scissor":
        result = input === "stone" ? "You Win" : "Computer Wins";
        break;
    }
  }
  resultLabel.innerText = result;
  switch (result) {
    case "You Win":
      resultLabel.classList.add("success");
      break;
    case "Computer Wins":
      resultLabel.classList.add("failure");
      break;
  }
}
