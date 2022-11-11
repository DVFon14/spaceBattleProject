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
      console.log(`ourAccuracyTester ${ourAccuracyTester} <0.7, so we are in the first \'if\' statement.`)
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
        console.log(`ships array hull: ${shipsArray[0].e_hull}> 0. We will go into enemyAttack function`)
        enemyAttack()
      }     
    } else { //if we miss
      console.log(`You missed because ourAccuracyTester ${ourAccuracyTester} > 0.7! This should go into enemyAttack function`)
    enemyAttack();
    }

}

attack();





function enemyAttack(){
  const enemyAccuracyTester = Math.random() 
  console.log('you are in the enemy function')


    if (enemyAccuracyTester < shipsArray[0].e_accuracy){ //if enemy hits us
      ourShip.hull = ourShip.hull - shipsArray[0].e_firepower;
      console.log(`We got hit, enemyAccuracyTester: ${enemyAccuracyTester}<${shipsArray[0].e_accuracy}. Our new hull is ${ourShip.hull}.`)
      



      if(ourShip.hull <= 0){ //if we die 
        console.log(`Since your hull is ${ourShip.hull}, you are dead.`)  
        process.exit();
      } 
      else{
        console.log(`enemyAccuracyTester2 > 0.1, so you will now go to attack function`)
        attack()
      }     
    } else {
      console.log(`enemyAccuracyTester >0.6, so it should go into attack function`)
      attack();
    }

}

