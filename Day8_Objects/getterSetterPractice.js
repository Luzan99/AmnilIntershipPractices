/* Getter and Setter method is used to allow control access
these methods help in encapsulation 
*/

//creating object
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  //Getter method
  get name() {
    return `Name is ${this._name}`;
  }

  //Getter method
  set name(newName) {
    console.log("Checking length of name");
    if (newName.length < 3) {
      console.log("Name must have more than 3 character");
    } else {
      this._name = newName;
    }
  }

  //Getter for age
  get age() {
    return `Age is ${this._age}`;
  }

  //Setter for age
  set age(newAge) {
    console.log("Checking condtion for age");
    if (newAge < 18) {
      console.log("Age must be grater than 18");
    } else {
      this._age = newAge;
    }
  }
}

const person1 = new Person("Luzan", 20);
console.log(person1.name);
console.log(person1.age);

person1.name = "bi";
person1.age = 22;
console.log(person1.name);
console.log(person1.age);
