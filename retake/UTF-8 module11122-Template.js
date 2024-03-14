//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:65130500111       Name:Pimpajee Seththirungplop

class Student {
// Insert your code here
constructor(name,age){
    this.name = name
    this.age = age
    this.courses = []
}

addCourse(course){
    
    if(course === null || course === undefined){
        return null
    }
    const addCourse = this.courses(course)
    if(addCourse){
        this.courses.push({courseName :name,grade:grade})
    }
    return course
}

removeCourse(courseName){
    // const courseName = ''
    // const coName = this.courses
    const nameCourse = this.courses.find((course) => course.name.toLowerCase() === courseName.name.toLowerCase())
    if (nameCourse) {
        return this.courses.splice(nameCourse, 1)
      }
    return -1
}

getStudentInfo(){
    return {
        name: this.name,
        age: this.age,
        courses: this.courses,
        grade: this.getAverageGrade()
    }
}

isEnrolled(courseName){
    const student = this.getStudentInfo().find((enroll) => enroll.name.toLowerCase() === courseName.name.toLowerCase())
    if(student === courseName){
        return true
    }
    else{
        return false
    }
}

listAllCourses(){
    return this.courses
}

getHonorClass(){
    const stuGrade = this.getAverageGrade().find(grade)
    if(stuGrade > 3.90){
        return "Summa Cum Laude"
    }
    if(3.79 <= stuGrade <= 3.89 ){
        return "Magna Cum Laude"
    }
    if(3.50 <= stuGrade <= 3.69 ){
        return "Cum Laude"
    }
    if(3.00 <= stuGrade <= 3.49 ){
        return "Honorable Mention"
    }
    if(stuGrade < 3.00 ){
        return "No honors"
    }
}

getAverageGrade(){
    const Avergrade = {grade: ["A", "B+", "B", "C+", "C", "D+", "D", "F"]}
    if(Avergrade ){
        if(this.courses.grade === Avergrade){
            return undefined
        }
        return Avergrade 
    }
 
}

}

// Creating a new Student object for stu
let stu = new Student("Scott", 17);

// Adding courses to stu's record
stu.addCourse({"name": "Math", "grade": "A"});
stu.addCourse({"name": "Programming", "grade": "B+"});
stu.addCourse({"name": "Network", "grade": "B+"});
stu.addCourse({"name": "GenEd", "grade": "D"});

//Average Grade
console.log(stu.getAverageGrade());

// Listing all courses
console.log(stu.listAllCourses());

// Removing "GenEd" course
console.log(stu.removeCourse("GenEd"));

// Attempting to remove a non-existent course "History"
console.log(stu.removeCourse("History"));

// Checking enrollment in "Programming" and "History"
console.log(stu.isEnrolled("Programming"));
console.log(stu.isEnrolled("History"));

// Getting student info after updates
console.log(stu.getStudentInfo());

// Determining honor class after updates
console.log(stu.getHonorClass());
