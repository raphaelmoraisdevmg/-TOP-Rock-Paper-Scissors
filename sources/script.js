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
let number = getRandomNumber();//making sure this function will return a number between 0 and 2
console.log(number);
let choice = getComputerChoice();
console.log(choice);
