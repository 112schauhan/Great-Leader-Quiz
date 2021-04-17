const readlinesync = require("readline-sync");
const chalk = require('chalk');

let playerScore = 0, min = 10;

console.log(chalk.whiteBright("THIS IS THE QUIZ WHICH TESTS HOW MUCH DO YOU KNOW ABOUT DR.KALAM!!!"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.bold.magenta("Hi, Please enter your name, and we will begin the Game"));
var firstName = readlinesync.question("Please enter your name:");
console.log(chalk.bold.green("Welcome " + firstName));
console.log(chalk.bold.magenta("Lets see how well do you know me!!"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));
console.log(chalk.blueBright("***************************"));

const highScore = [
  {
    name: "Jason",
    score: 10
  },
  {
    name: "Mark",
    score: 9
  },
  {
    name: "Tyson",
    score: 7
  }
]

const questionArray = [
  {
    question: "What is the full name of Dr. Abdul Kalam?",
    answer: "Avul Pakir Jainulabdeen Abdul Kalam"
  },
  {
    question: "When was Dr. A.P.J. Abdul Kalam born?",
    answer: "15 October 1931"
  },
  {
    question: "Dr.Kalam was elected as the president during the tenure of which Prime minister?",
    answer: "Atal Bihari Vajpayee"
  },
  {
    question: "Dr. A.P.J. Abdul Kalam in the Presidential election in 2002 won against:",
    answer: "Lakshmi Sehgal"
  },
  {
    question: "Dr. A.P.J. Abdul Kalam was the ......President of India",
    answer: "11"
  },
  {
    question: "Which island is named after Dr. A.P.J. Abdul Kalam?",
    answer: "Wheeler Island"
  },
  {
    question: "Dr. Kalam was awarded with which prestigious honour for his outstanding public service in 2008?",
    answer: "Hoover Medal"
  },
  {
    question: "Dr Kalam completed his engineering degree from which institute?",
    answer: "Madras Institute of Technology"
  },
  {
    question: "What is the name of autobiography of Dr. Abdul Kalam?",
    answer: "Wings of Fire"
  },
  {
    question: "When was Dr.Kalam sworn in as the President of India?",
    answer: "25 July 2002"
  }
]

const playGame = (question, answer) => {
  let userResponse = readlinesync.question(question);

  if (answer.toLowerCase() == userResponse.toLowerCase()) {
    playerScore += 1;
    console.log(chalk.bold.bgGreenBright.blue("You are correct!!"));
    console.log(chalk.bold.bgYellow.magentaBright("Your score is " + playerScore));
    console.log(chalk.magentaBright("-------------------------------------------"));
    console.log(chalk.magentaBright("-------------------------------------------"));
    console.log(chalk.magentaBright("-------------------------------------------"));
  }

  else {
    console.log(chalk.bold.bgRed.blue("You are wrong!!"));
    console.log(chalk.bold.bgYellow.magentaBright("Do not Worry. Stay and Play ahead"));
    console.log(chalk.magentaBright("-------------------------------------------"));
    console.log(chalk.magentaBright("-------------------------------------------"));
    console.log(chalk.magentaBright("-------------------------------------------"));
  }
}


for (i = 0; i < questionArray.length; i++) {
  let q = questionArray[i];
  playGame(q.question, q.answer);
}

for(j=0;j<highScore.length;j++){
  if(highScore[i]<min){
    min=highScore[i];
  }
}

console.log(chalk.bold.bgMagentaBright.white("Your score is "+playerScore+"!!!"));
console.log(chalk.bold.magentaBright("Show Leaderboard:"));

for(i=0;i<highScore.length;i++){
  let player=highScore[i];
  if(player.score>=min){
      min=player.score;
  }
  console.log(chalk.bold.magenta(player.name));
  console.log(chalk.bold.magenta(player.score));
}

if(playerScore>=min){
  console.log(chalk.bold.bgGreenBright.blue("Well done!! Your score qualifies for the top 3 high scores"));
  console.log(chalk.bold.bgGreenBright.blue("Send the screenshot of you score, and it will be updated in the leaderboard"));
}
