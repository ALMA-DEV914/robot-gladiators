/* var playerName = window.prompt("What is your robot's name?");
console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
console.log(10 + 10);
console.log("Our robot's name is " + playerName);
function fight(){
    window .alert ("The fight has begun!");
}
//fight();*/
var playerName = window.alert("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
     // alert player that they are strating the round
    window.alert("Welcome to Robot Gladiators");
    // subtract the value of playerAttack from the value of enemyHealth
enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so we know that it worked
console.log(playerName + " attacked " + enemyName + "." + enemyName + " now has " +  enemyHealth + " health remaining. "); 

//Substract the  value of enemyAttack from the value of playerHealth
playerHealth = playerHealth - playerAttack;
// log a resulting message to the console so we know it worked
console.log(enemyName + " attacked " + playerName + "." +  playerName + " now has " + playerHealth + " health remaining");
}
fight(); 


