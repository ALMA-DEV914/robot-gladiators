var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
 
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
/*
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length); 
for(var i = 0; i < enemyNames .length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index ");
        
}  
*/
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){
    while(playerHealth > 0 && enemyHealth > 0) {
    // Alert players that they are starting
    window.alert("Welcome to Robot Gladiators");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
 if (promptFight === "skip" || promptFight === "SKIP"){ 
    // confir player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave the fight
    if (confirmSkip){
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
 }
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName +  " attacked " +  enemyName + "." +  enemyName  + " now has "  +  enemyHealth + " health left");

    // check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died ");
    // award player money for winning

    playerMoney = playerMoney + 20;
    // leave while( loop since enemy is dead
    break;
    } else {
        window.alert(enemyName + " still has " +  enemyHealth + " health left");
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerhealth' an duse that as a result to update 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName  + ' attacked ' + playerName + "." +  playerName  + " now has " +  playerHealth   +   " health left ");

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
        break;
    } else {
        window.alert(playerName + " has still " + playerHealth + " health left. ");
    }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);

}
//fight();
