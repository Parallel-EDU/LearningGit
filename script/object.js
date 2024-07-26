const data = {
  name: "Ahmed",
  age: 35,
  greet: function () {
    console.log("Hello!");
  },
};
console.log(data.name);
console.log(data["age"]);
data.greet();

const person = new Object();
console.log(person);

person.name = "Raju";
console.log(person);

person.age = 13;
console.log(person);

person.greet = function () {
  console.log("Hi Raju");
};

person.greet();
console.log(person);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, ${name}`);
    // console.log('Hi, ' + name)
  };
}

const personInfo = new Person("Alice", 44);

console.log(personInfo);
personInfo.greet();

const studentData = {
  name: "Manish",
  age: 24,
};
console.log(studentData["name"]);
console.log(studentData.age);

studentData.city = "Bangalore";

console.log(studentData);

delete studentData.age;
console.log(studentData);

console.log(studentData.hasOwnProperty("age"));

const arrayKeys = Object.keys(studentData);
console.log(arrayKeys);

const arrayValues = Object.values(studentData);
console.log(arrayValues);

const entries = Object.entries(studentData);
console.log(entries);

const updateStudentData = Object.assign({}, person, studentData);
console.log(updateStudentData);

const studentDataFreeze = {
  name: "Manish",
  age: 24,
};

const frozenData = Object.freeze(studentDataFreeze);
frozenData.age = 25;
frozenData.city = 'Bangalore';
console.log(frozenData)

const studentDataSeal = {
    name: "Manish",
    age: 24,
  };

const sealData = Object.seal(studentDataSeal);
sealData.age = 25;
sealData.city = 'Bangalore';
console.log(sealData)
