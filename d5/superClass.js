// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
} 

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

const Billy = new Student("Billy", "6 toes", "hello@gmail.com")
Billy.enroll("August, 19th");

const Jimbo = new Mentor("Jimbo", "7 toes", "world@gmail.com")
Jimbo.goOnShift(); 
Jimbo.goOffShift();



console.log(Billy.bio());
console.log(Jimbo);