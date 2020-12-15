//Chalk to add colors
const chalk = require('chalk');
// Used to take User input 
var readlineSync = require('readline-sync');
// Welcoming the user.
function Welcome()
{
var userName= readlineSync.question(chalk.yellowBright("Please Enter Your Name?"));
console.log(chalk.bgCyan('WELCOME '+userName+ ' How Much You Like DOREMON ?\n'));
console.log(chalk.bgCyan('************ Lets Begin with Quiz **********'));
}
// Arrays of objects for questions and answers
var quesBank= [
	{
		question: `
	Who is Doraemon Best Friend?
	a) Jian
	b) Nobita
	c) Doraemi\n`,
		answer: "b"
	},
	{
        question: `
	From Which Century Doraemon is Came from?
	a) 20th Century
	b) 21st Century
  c) 22nd Century\n`,
		answer: "c"
	},
	{
		question: `
	What is the Color of Doraemon?
	a) Blue
	b) Red
	c) Yellow\n`,
		answer: "a"
	},
  {
		question: `
	What Doraemon loves to Eat?
	a) Cakes
	b) Cookies
	c) DoraCakes\n`,
		answer: "c"
	},
  {
		question: `
	Which Gadget helps us to go Anywhere?
	a) Bag 
	b) Pocket
	c) Locker\n`,
		answer: "b"
	},
  {
		question: `
	Who is Doremi?
	a) Doraemons Sister
	b) Nobitas Sister
	c) Jians Sister\n`,
		answer: "a"
	}
];
//High Score Array objects
var highScore=
[
  {
    name:"Khyati",
    score:5
  },
  {
    name:"Nikhil",
    score:4
  }
]

var point=0;
// function to check the user answers is right..
function check(question,answer)
{
  var userAns=readlineSync.question(question);
  if( userAns.toUpperCase() == answer.toUpperCase())
  {
    console.log(chalk.green.bold("Your are Right"));
    point=point+1;
  }
  else
  {
    console.log(chalk.red.bold("Your Wrong"));
   
  }
  console.log("Current score: ", point);
  console.log(chalk.yellowBright("****************************************************"));
}

// for loop to access array of objects and print scores of Users
function game()
{
  for(var i = 0;i<quesBank.length;i++)
  { 
    var currentQue =quesBank[i];
    check(currentQue.question,currentQue.answer);
  }
  //console.log('*******************************');
  console.log(chalk.red ('Thanks for PLAYING \nYour Score is: ', point));
  console.log(chalk.yellowBright("****************************************************"));
  console.log(chalk.yellow.bold(("Check Out Highest Scores of All Users")));

  for (var i = 0; i < highScore.length; i++) 
  {
    var max= highScore[i];
    console.log(chalk.blue.bold(max.name,max.score));
  }

  
}
// for loop to check if high score is Beaten
function high()
{
  for(var i=0;i<highScore.length;i++)
{
  var curr = highScore[i];
  if(curr.score<point)
  {
    console.log(chalk.yellowBright('Congratulations! You have Beaten '+ curr.name + " " +"in Doraemon Quiz"));
  }
}
}
Welcome()
game() 
high()