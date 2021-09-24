var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    // Alert players that they are starting
    window.alert("Welcome to Robot Gladiators");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight);
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT"){
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName +  " attacked " +  enemyName + "." +  enemyName  + " now has "  +  enemyHealth + " health left");

    // check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died ");
    }
    else {
        window.alert(enemyName + " still has " +  enemyHealth + " health left");
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerhealth' an duse that as a result to update 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName  + ' attacked ' + playerName + "." +  playerName  + " now has " +  playerHealth   +   " health left ");

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
    }
    else {
        window.alert(playerName + " has still " + playerHealth + " health left. ");
    }
    // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP"){ 
    // confir player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave the fight
    if (confirmSkip){
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again 
    else {
        fight();
    }
} 
}
fight();