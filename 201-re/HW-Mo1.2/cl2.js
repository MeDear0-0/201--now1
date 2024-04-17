class Elevator{
    constructor(maxFloor,minFloor){
        this.maxFloor = maxFloor
        this.minFloor = minFloor
        this.currentFloor = 0
    }

    goUp(){
        if (this.currentFloor < this.maxFloor) {
            this.currentFloor++
        }
    }

    goDown(){
        if(this.currentFloor > this.minFloor){
            this.currentFloor--
        }
    }

    goToFloor(floor){
        if (floor >= this.minFloor && floor <= this.maxFloor) {
            this.currentFloor = floor
        }
    }

    displayFloor(){
        console.log("Current floor:", this.currentFloor)
    }
}

// Create Elevator object
const myElevator = new Elevator(10, 1); // Example: Elevator can go from floor 0 to floor 10

// Testing methods
myElevator.displayFloor() // Output: Current floor: 0
myElevator.goUp()
myElevator.displayFloor() // Output: Current floor: 1
myElevator.goToFloor(9)
myElevator.displayFloor() // Output: Current floor: 5
myElevator.goDown()
myElevator.displayFloor() // Output: Current floor: 4