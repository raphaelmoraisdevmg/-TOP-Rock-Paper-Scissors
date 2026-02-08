// this function will return a number between 0 and 2
function getRandomNumber(){
   return Math.random(3).toFixed(0); //making sure that will be a integer number
} 
/* this function will call getRandomNumber to obtain a number and based on
will return wich elemnt computer choice between the three possible 
rock,paper,scissors for this time. 
*/ 
function getComputerChoice(){
  let randomNumber = getRandomNumber();
  if(randomNumber == 0){
    return "rock"
  }else if(randomNumber == 1){
    return "paper"
  }else{
    return "scissors"
  }
 }
function getHumanChoice(){
  let choice=prompt("chose our element between rock,paper,scissors? ");
  return choice.toLowerCase();
  //as requirement said this have tobe case insentive
}
function playRound(humanChoice,ComputerChoice){
  if(humanChoice=="paper"&&ComputerChoice=="paper"||humanChoice=="rock"&&ComputerChoice=="rock"
  ||humanChoice=="scissors"&&ComputerChoice=="scissors"){
    console.log(`computer:${ComputerChoice} player:${humanChoice} tied`)
  }
  if(humanChoice =="paper"&&ComputerChoice=="rock"||humanChoice=="rock"&&ComputerChoice=="scissors"
    ||humanChoice=="scissors"&&ComputerChoice=="paper"
  ){
    console.log(`computer:${ComputerChoice} player:${humanChoice} human wins`)
  }else{
    console.log(`computer:${ComputerChoice} player:${humanChoice} computer wins`)
  }
  
}
//testing section
let number = getRandomNumber();//making sure this function will return a number between 0 and 2
console.log(number);
let choice = getComputerChoice();
console.log(choice);
let humanChoice = getHumanChoice();
console.log(humanChoice);
playRound(humanChoice,choice);