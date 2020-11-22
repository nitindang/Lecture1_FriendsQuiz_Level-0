//ex01: output your name
console.log("Nitin's Program ");
console.log("Welcome User ");
//ex02: read the name of your user
// ex03: welcome your user
// ex04: do it all together
var readlineSync=require("readline-sync");
var winners={};
var username=readlineSync.question("What's your name ?");
console.log("Welcome "+username)

console.log("Oh "+ readlineSync.question("Where are you from? ")+ " is pretty great")

age=readlineSync.question("So tell me your age for entry into the program.")
// ex05: print right/wrong if greater than 25
if(age>25){
  console.log("You can enter the program ")
}
else{
  console.log("Sorry you are underage to be here. Exiting Program ")
  process.exit();
}

// ex06: increment score if the right answer
var score=0;
var nationality=readlineSync.question("Are you an Indian ? ");

if(nationality.toUpperCase() == "YES"){
  score+=1
  console.log("I Love India and its people. They are really kind. ");
  console.log("You score value is "+ score)
}
else{
  score-=1
  console.log("You score value is "+ score)
}

// ex07: function to add two numbers
function add(no1,no2){
  var sum=no1+no2;
  return sum;
}

console.log("Enter 2 numbers to add : ");

var number1=parseInt(readlineSync.question());
var number2=parseInt(readlineSync.question());

var result=add(number1,number2);

console.log("The addition of " + number1 + " and " + number2 + " gives: " + result);

// ex08: function to check the answer
function qstreak(question, answer){
  
  var tempans=readlineSync.question(question);
  if(tempans.toLowerCase()==answer.toLowerCase()){
    console.log("Right Answer ")
    score+=1
    console.log("Now your current score is ", score);
  }
  else{
    console.log("Wrong Answer ");
    score-=1
    console.log("Now your current score is ", score);
  }
}

qstreak("Where does Nitin work ? ","Microsoft");
qstreak("How old is Nitin ? ", "21")


// ex09: print your name 5 times
var myname="Nitin Dang "
for(var i=0;i<5;i++){
  console.log((i+1)+" "+ myname);
}

// homework: star pattern
function printpattern(number){
  for(var i=0;i<number;i++){
  
      console.log("*".repeat(i+1))
  }
}
printpattern(readlineSync.question("Enter the number for star pattern "))

//reverse pattern 
function printpattern2(number){
  for(var i=number;i>0;i--){
   
      console.log("*".repeat(i))
  }
}
printpattern2(readlineSync.question("Enter the number for reverse star pattern "))


// ex10: list grocery items to buy
// ex11: print every item on the list
grocery=["milk","curd","cake","paan","scotch"];

var ans=readlineSync.question("Do you need to add something to grocery list. Mom is gonna buy all that ");
if(ans.toLowerCase()=="yes"){
  console.log("Tellme what to add(press q if you want to stop adding )")
  flag=0
  while(flag==0){
    var temp=readlineSync.question()
    if(temp!='q'){
    grocery.push(temp)
    }
    else{
      flag=1;
    }
  }


}
else{

}
console.log("Printing the items of the grocery list to  be bought ");
for(var i=0;i<grocery.length;i++){
  console.log("Item "+i+" " + grocery[i]);
}


// ex12: club info about a superhero together
var superman={
  name:"superman",
  power:"flight",
  costumecolor:"red-blue",
  strength:10000,
  stealth:10
}

var batman={
  name:"batman",
  power:"money",
  costumecolor:"black",
  strength:100,
  stealth:1000
}

console.log("Superman strength "+ superman.strength);

console.log("Batman strength " +batman.strength);

console.log("Is Superman strength more than batman? "+ (superman.strength > batman.strength));

// ex13: put a list of questions together
questionOne = {
  question: "Who is my favorite superhero?",
  answer: "Dhruv"
}

questionTwo = {
  question: "Which is my favorite sad song?",
  answer: "Channa Meraya"
}

/**
 * next challenge: create an array of superhero objects
 * 
 * then print name and costume color of every superhero in the list
 * 
 * array, for loop, objects, function call
 */

var superheroarray=[superman, batman];

for(var i=0;i<superheroarray.length;i++){
  console.log("name ", superheroarray[i].name,"costumecolor ", superheroarray[i].costumecolor)

}


// ex14: club everything to make the game

// ex15: print the final score to the user
//array of objects

var questions=[{
  question : "where do i live ? ",
  answer: "Bangalore"
},
{
  question : "My favorite superhero would be ? ? ",
  answer: "Spiderman"
}]

//loop 

for(var i=0;i<questions.length;i++){
  var currentquestion=questions[i];
  qstreak(currentquestion.question,currentquestion.answer)
}

console.log("Yay! You scored", score);

highestscore=4

if(score>highestscore){
  winners[username]=score;
  console.log("The highest score was "+highestscore+" You just beat the Highest Score!!! Send me this screenshot and I will add you to my list of besties. You are awesome :) ")
}
else{
  console.log("The highest score is "+highestscore+" Better luck next time!! ")
}

for(var key in winners){
  console.log("Player",key,"Highestscore",winners[key]);
}