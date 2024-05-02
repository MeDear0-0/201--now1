/*6
Instruction:
- Create a 'Elevator' object for 'Practice 5'. Use a constructor and methods in class.
Initiate code:
// Insert your code here*/
class Elevator {
    constructor() {
      this.currentFloor = 1;
    }
  
    moveToFloor(targetFloor) {
      console.log(`Moving from floor ${this.currentFloor} to floor ${targetFloor}.`);
      this.currentFloor = targetFloor;
    }
  
    reportCurrentFloor() {
      console.log(`Currently on floor ${this.currentFloor}.`);
    }
  }
  
  // Example usage:
  const elevator = new Elevator();
  elevator.reportCurrentFloor(); // Output: Currently on floor 1
  elevator.moveToFloor(3); // Output: Moving from floor 1 to floor 3
  elevator.reportCurrentFloor(); // Output: Currently on floor 3