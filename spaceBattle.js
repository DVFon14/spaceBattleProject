const ourShip = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};

class enemyShipClass {
  constructor() {
    this.e_hull = Math.random() * 3 + 3;
    this.e_firepower = Math.random() * 2 + 2;
    this.e_accuracy = Math.random() * 0.2 + 0.6;
  }
}

const shipsArray = [];

for (j = 0; j < 6; j++) {
  const enemyShips = new enemyShipClass();
  shipsArray.push(enemyShips);
}









alert("\nAliens are attacking our planet! Join us in our battle to save Earth.\n " );

function start(){
    const begin = prompt("Press 1 to join, and then look at your console. If you press anything else our planet explodes!")

    if (begin == 1){
        console.log("Let's begin!")
    } else {
        console.log("You have caused our world to explode. I hope you're proud of yourself.")
        process.exit();
    }
}

start ();






let i=0;

function attack(){
  const ourAccuracyTester = Math.random() 



    if (ourAccuracyTester < 0.7){ //if we hit
      //console.log(`ourAccuracyTester ${ourAccuracyTester} <0.7, so you are able to hit the enemy!`)
      shipsArray[i].e_hull = shipsArray[i].e_hull - ourShip.firepower;

      if(shipsArray[i].e_hull <= 0){ //if we hit and destroy
        let shipsRemaining = 5-i;
        console.log(`Your enemy's hull is ${shipsArray[i].e_hull}. Congratulations! You have destroyed enemy ship ${[i]}! You have ${shipsRemaining} ships left to destroy.\n`)
        
        if(shipsRemaining==0){
          console.log(`Our Earth is safe now thanks to your bravery, soldier! Thank you for helping to keep us safe.`)
        }

        
        const begin2 = prompt("Press 1 to continue, or anything else to retreat.")

        if (begin2 == 1){
             i++;
             console.log("Let's continue!")
            attack();
        } else {
            console.log("Earth just died.")
            process.exit();
        }


      } 
      else{ //if we hit but do not destroy
        console.log(`The enemy ship's hull is ${shipsArray[i].e_hull}. Take cover, they are about to attack!`)
        enemyAttack()
      }     
    } else { //if we miss
      console.log(`You missed the target! Watch out, the enemy is about to attack!`)
    enemyAttack();
    }

}

attack();









function enemyAttack(){
  const enemyAccuracyTester = Math.random() 
  console.log('You are in the enemy\'s aim!')


    if (enemyAccuracyTester < shipsArray[i].e_accuracy){ //if enemy hits us
      ourShip.hull = ourShip.hull - shipsArray[i].e_firepower;
      console.log(`You got hit! Your new hull is ${ourShip.hull}.`)
      



      if(ourShip.hull <= 0){ //if enemy hits us and we die
        console.log(`Oh no! Your ship's hull fell below zero. You are dead.`)  
        process.exit();
      } 
      else{ //if enemy hits us but we live
        console.log(`Hang in there, you can still win this! Get ready to attack.`)
        attack()
      }     
    } else { //if enemy misses us
      console.log(`Good job dodging their attack! Ready your aim.`)
      attack();
    }

}

