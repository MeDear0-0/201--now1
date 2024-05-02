/*5.
Instruction:
- Create class Elevator with the following specifications:
Class Elevator:
Constructor
• Constructor(maxFloor, minFloor): This initializes the properties
'maxFloor', 'minFloor' and set 'currentFloor' to 0
Properties
• currentFloor: The floor where the elevator currently is. , type number
• maxFloor: The highest floor the elevator can go to. , type number
• minFloor: The lowest floor the elevator can go to , type number
Methods
• goUp(): Increases currentFloor by 1, but not above maxFloor.
• goDown(): Decreases currentFloor by 1, but not below minFloor.
• goToFloor(floor): Takes a floor number and sets currentFloor to that
floor if it's within range.
• displayFloor(): Prints the current floor to the console.*/
// Creating class Elevator
class Elevator {
    // Constructor(maxFloor, minFloor): This initializes the properties 'maxFloor', 'minFloor' and set 'currentFloor' to 0
    constructor(maxFloor, minFloor) {
      this.maxFloor = maxFloor;
      this.minFloor = minFloor;
      this.currentFloor = 0;
    }
  
    // goUp(): Increases currentFloor by 1, but not above maxFloor.
    goUp() {
      // Check if the current floor is below the maximum floor
      if (this.currentFloor < this.maxFloor) {
        // If yes, increment the current floor by 1
        this.currentFloor++;
      } else {
        // If no, print a message that the elevator cannot go higher
        console.log('The elevator cannot go higher than the maximum floor.');
      }
    }
  
    // goDown(): Decreases currentFloor by 1, but not below minFloor.
    goDown() {
      // Check if the current floor is above the minimum floor
      if (this.currentFloor > this.minFloor) {
        // If yes, decrement the current floor by 1
        this.currentFloor--;
      } else {
        // If no, print a message that the elevator cannot go lower
        console.log('The elevator cannot go lower than the minimum floor.');
      }
    }
  
    // goToFloor(floor): Takes a floor number and sets currentFloor to that floor if it's within range.
    goToFloor(floor) {
      // Check if the floor number is within the range of minFloor and maxFloor
      if (floor >= this.minFloor && floor <= this.maxFloor) {
        // If yes, set the current floor to the floor number
        this.currentFloor = floor;
      } else {
        // If no, print a message that the floor number is invalid
        console.log('The floor number is invalid. Please enter a floor number between the minimum and maximum floors.');
      }
    }
  
    // displayFloor(): Prints the current floor to the console.
    displayFloor() {
      // Print the current floor to the console
      console.log(`The elevator is on floor ${this.currentFloor}.`);
    }
  }
