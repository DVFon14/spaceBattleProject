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

for (i = 0; i < 6; i++) {
  const enemyShips = new enemyShipClass();
  shipsArray.push(enemyShips);
}











console.log("\nAliens are attacking our planet! Join us in our battle to save Earth.\n " );

function start(){
    const begin = prompt("Press 1 to join.")

    if (begin == 1){
        console.log("Let's begin!")
    } else {
        console.log("Quitter!")
        process.exit();
    }
}

start ();


function attack(){
  console.log(`you are in attack function`)
  const ourAccuracyTester = Math.random() 
  console.log(ourAccuracyTester)


    if (ourAccuracyTester < 0.7){ //if we hit
      console.log(`ourAccuracyTester ${ourAccuracyTester} <0.7, so you are able to hit the enemy!`)
      shipsArray[0].e_hull = shipsArray[0].e_hull - ourShip.firepower;

      if(shipsArray[0].e_hull <= 0){ //if we hit and destroy
        console.log(`${shipsArray[0].e_hull} is the enemy ship's hull. Congratulations! You have destroyed enemy ship [0]! \n`)
        console.log(`Press 1 to continue, or anything else to retreate`)
        
        
        const begin2 = prompt("Press 1 to continue.")

        if (begin2 == 1){
            console.log("Let's continue!")
            attack();
        } else {
            console.log("earth just died.")
            process.exit();
        }







      } 
      else{ //if we hit but do not destroy
        console.log(`The enemy ship's hull is ${shipsArray[0].e_hull}> 0.Take cover, they are about to attack!`)
        enemyAttack()
      }     
    } else { //if we miss
      console.log(`Better luck with your accuracy next time! ${ourAccuracyTester} > 0.7! Watch out, the enemy is about to attack!`)
    enemyAttack();
    }

}

attack();





function enemyAttack(){
  const enemyAccuracyTester = Math.random() 
  console.log('You are in the enemy function')


    if (enemyAccuracyTester < shipsArray[0].e_accuracy){ //if enemy hits us
      ourShip.hull = ourShip.hull - shipsArray[0].e_firepower;
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

