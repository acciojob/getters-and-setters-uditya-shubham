class Person {
  constructor(name, age) {
    _name = name;
    _age = age;
  }

  // Getter for name
  get name() {
    return _name;
  }

  // Setter for age
  set age(newAge) {
    _age = newAge;
  }

  // Getter for age (optional if you want to log age)
  get age() {
    return _age;
  }
}

class Student extends Person {
  study() {
    console.log(`${_name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${_name} is teaching`);
  }
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
