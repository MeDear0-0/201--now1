//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500111      Name: Pimpajee Seththirungplop
class EmployeeManager {
    constructor(){
        this.employees = []

    }

    addEmployee(name, position){
        const uniqID = []
        for(let i = 0; i < uniqID.length; i++){
            if(uniqID === this.employees.id){
                return null
            }else{
                return this.employees.push( {
                    id:uniqID,
                    'name':name,
                    'position':position
                })
            }
        }
    }

    removeEmployee(id){
        if(this.employees.filter(this.employees.id !== id)){
            return false
        }else{
            return this.employees--
        }
    }

    findEmployeeByName(name){
         this.employees.findIndex((employeename) => {
            return (employeename.name.toLowerCase() === name.toLowerCase())
        })
    }

    sortEmployeeByName(){
        const sortEm = []
        sortEm.sort(this.employees.name)
    }

    updateEmployee (employee){
       if( this.employees.employee.filter((newId) => newId === id)){
          return  this.employees.push(employee)
       }
       
    }

    promoteEmployee(id, newPosition){
        this.employees.find((emID) => emID.id === id)

        if(this.employees.id === id && this.employees.position === newPosition){
            return true
        }else{
            return false
        }
    }

}
 
// Example usage:
const manager = new EmployeeManager();
console.log(manager.addEmployee("John Doe", "Developer")); // Adds and logs new employee
console.log(manager.addEmployee("Jane Doe", "Designer")); // Adds and logs new employee
console.log(manager.findEmployeeByName("John Doe")); // Finds and logs John Doe
manager.sortEmployeeByName(); // Sorts employees by name
console.log(manager.employees); // Logs sorted employees
manager.promoteEmployee(1, "Senior Developer"); // Promotes John Doe to Senior Developer
console.log(manager.employees); // Logs employees to see the updated position of John Doe
