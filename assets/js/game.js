
 //function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);

    return value;
};
 
 // function to set name
var getPlayerName = function() {
     var name = "";

     while (name === "" || name === null) {
         name = prompt("What is your robot's name?");
     }
     console.log("Your robot's name is " + name);
     return name;
 };
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillhealth: function() {
        if (this.money >= 7) {
            window.alert(" refilling player's health by 20 for 7 dollars.")
        this.health += 20;
        this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.")
        this.attack += 6;
        this.money -= 7;
    } else {
        window.alert("You don't have enough money!");
    }
  }
};
// enemy information
var enemyInfo = [
    {
    name: "Roborto",
    attack: randomNumber(10, 14)
    
},
{
    name: "Amy Android",
    attack: randomNumber(10, 14)
},
{
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
}
];

/*console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);
/*
for(var i = 0; i < enemyNames .length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index ");
        
}  
*/

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Enter the conditional recursive function here!
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    // if player picks "skip" confirm and then stop the loop
    promptFight = promptFight.toLowerCase();

    if (promptFight === "skip"){
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decide to skip the fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0,playerInfo.money - 10);
                //stop while() loop using break; and enter next fight
    
             //return true if player wants to leave
             return true;
            }
        }
        return false;
};

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;

    // randomly change turn order
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

while (playerInfo.health > 0  &&  enemy.health > 0) {
        if (isPlayerTurn) {
         // ask player if they'd like to fight or skip using fightOrSkip() function
          if (fightOrSkip()) {
           break;
       }

      // remove enemy's health by subtracting the amount set in the playerAttack variable
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      // remove enemy's health by subtracting the amount we set in the damage variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
    } else {
     // remove players's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
    }
};

  // fight each enemy-robot by looping over them and fighting them one at a time
  var startGame = function() {
      // reset player stats
      playerInfo.reset();
      // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
      //check player stats
      console.log(playerInfo);
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyObj = enemyInfo[i];
  
      // set enemy health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);
       console.log(pickedEnemyObj);
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyObj);

      if (playerInfo.health > 0  &&  i < enemyInfo.length - 1){
          // ask player if want to use store before next round
          var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

          //if yes, take them to the store() function
          if (storeConfirm){
          shop();
          }
      }
    }
    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in the battle! Game Over!');
      break;
    }
  }
 endGame();
};

var endGame = function() {
    // if palyer is still alive, player wins!
    window.alert("The game has now ended. Let's see how you did!");

    var highScore = localStorage.getItem("highscore");
    if (highScore  === null){
        highScore = 0;
    }
     // if player has more money than the high score, player has new high score!
  if (playerInfo.money > highScore) {
    localStorage.setItem("highscore", playerInfo.money);
    localStorage.setItem("name", playerInfo.name);

    alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
  } else {
    alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
// go to shop between battle function
var shop = function(){
    // ask player what they'd like to do
    var shopOptionPromt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, 3 for LEAVE, to make a choice.");

    shopOptionPromt = parseInt(shopOptionPromt);
// use switch case to carry out function
switch (shopOptionPromt) {
    case 1:
        playerInfo.refillhealth();
       /* if (playerInfo.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars");
        // increase health and decrease money
        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;
        }
        else {
            window.alert("You don't have enough money");
        } */
        break;
    
    case 2:
        playerInfo.upgradeAttack();
        /*if (playerInfo.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        // increase atack and decrease money
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money - 7;
        }
        else {
            window.alert("You don't have enough money");
        } */
        break;
   
    case 3:
        window.alert("Leaving the store");

        // do nohting, so function will end
        break;
    default:
        window.alert("You did not pick a valid option. Try again.");

        // call shop() again to force player to pick a valid option
        shop();
        break;
}
};

// run the game
startGame();

