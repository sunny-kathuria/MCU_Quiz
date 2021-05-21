
var input = require("readline-sync");
var score=0;
var user=input.question("What is your name? ");
console.log("Welcome "+user+"!!!, Now start playing this Awesome Avenger's-Quiz. All ansers are case-sensitive");

function Quiz(Ques,Ans){
  var userAns=input.question(Ques);
    if(userAns==Ans){
    score+=1;
    console.log("Lovely!, your answer is correct.");
  }
  else{
    score-=1;
    console.log("Sad! Wrong answer, try again later");
  }
}


Quiz("Which avenger is magician? ","Dr Strange");
Quiz("What is the name of Iron Man character? ", "Tony Stark");
Quiz("Which avenger can change it's size at any extent? ","Antman");
Quiz("Steve Rogers AKA? ","Captain America");
console.log("Thank You, "+user+"\nYour Score: "+score);
