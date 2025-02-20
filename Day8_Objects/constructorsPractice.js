/*  constructor function is a special type of function used 
to create multiple objects with the same properties and methods.
 It follows the OOP (Object-Oriented Programming) approach
 it follows PascalCase  naming convention
*/

//constructor function
function Student(name, college, rollno) {
  this.name = name;
  this.college = college;
  this.rollno = rollno;
}

//adding method using prototype

Student.prototype.getInformation = function () {
  return `${this.name} studies in ${this.college} with rollno as ${this.rollno}`;
};

//creating instance
const student1 = new Student("Luzan", "SS College", 7);
const student2 = new Student("Bibek", "Himalayan College", 10);
const student3 = new Student("Ram", "SAgarmatha College", 1);

console.log("Details of student 1:");
console.log(student1.getInformation());

console.log("Details of student 2:");
console.log(student2.getInformation());

console.log("Details of student 3:");
console.log(student3.getInformation());

// Checking Instance
console.log(student1 instanceof Student);
console.log(student2 instanceof Student);
console.log(student3 instanceof Student);
