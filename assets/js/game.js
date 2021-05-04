var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 10;

// This creates a function (everything after the variable declaration)
var fight = function () {
  window.alert("Welcome to Robot Gladiators!");
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );

  // Enemy health check - conditional statement
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has been defeated!");
  } else {
    window.alert(
      enemyName + " still has " + enemyHealth + " health remaining."
    );
  }
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );
  // Check player health
  if (playerHealth <= 0) {
    window.alert(playerName + " has been defeated!");
  } else {
    window.alert(playerName + " still has " + " health remaining.");
  }
};

// This calls the function
fight();
