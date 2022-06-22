const puzzleEl = document.querySelector("#puzzle")
const guessEl = document.querySelector("#guesses")
const gameOne = new Hangman("cat", 3)

puzzleEl.textContent = gameOne.puzzle
guessEl.textContent = gameOne.statusMessage

console.log(gameOne.status)

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode)
  gameOne.makeGuess(guess)
  puzzleEl.textContent = gameOne.puzzle
  guessEl.textContent = gameOne.statusMessage
})

// const gameTwo = new Hangman("New Jersey", 8)
// gameTwo.makeGuess("w")
// console.log(gameTwo.getPuzzle())
