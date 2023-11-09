const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()
  if (
    userInput === 'rock' ||
    userInput === 'bomb' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput
  } else {
    console.log('Error!')
  }
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'You win!!!'
  }
  if (userChoice === computerChoice) {
    return 'Game Drawn'
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
}

function playGame() {
  rl.question(
    'Enter your choice (rock, paper, or scissors): ',
    (userChoice) => {
      const computerChoice = getComputerChoice()
      console.log('Loading...')

      // Simulate a loading bar animation
      let loadingBar = '[          ]'
      const interval = setInterval(() => {
        loadingBar = `[${loadingBar.slice(1)} ]`
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
        process.stdout.write(loadingBar)

        if (loadingBar === '[          ]') {
          clearInterval(interval)
          process.stdout.clearLine()
          process.stdout.cursorTo(0)
          console.log('You threw: ' + userChoice)
          console.log('The computer threw: ' + computerChoice)
          console.log(determineWinner(userChoice, computerChoice))
          rl.close()
        }
      }, 2)
    }
  )
}

playGame()
