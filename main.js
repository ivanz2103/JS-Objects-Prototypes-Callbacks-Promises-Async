function displayFavorites(person)
{
    console.log("Pizza:")
    person.pizza.forEach(pizza => console.log(pizza))
    console.log("Tacos:", person.tacos)
    console.log("Burgers:", person.burgers)
    console.log("Ice Cream:")
    person.ice_cream.forEach(ice_cream => console.log(ice_cream))
    console.log("Shakes:")
    Object.values(person.shakes[0]).forEach(shake => console.log(shake))
}
let person3 = {
  pizza:["Deep Dish","South Side Thin Crust"],
  tacos:"Anything not from Taco bell",
  burgers:"Portillos Burgers",
  ice_cream:["Chocolate","Vanilla","Oreo"],
  shakes:[{
      oberwise:"Chocolate",
      dunkin:"Vanilla",
      culvers:"All of them",
      mcDonalds:"Sham-rock-shake",
      cupids_candies:"Chocolate Malt"
  }]
}
  displayFavorites(person3)

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    printInfo = () => {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
    }
  
    addAge = (years) => {
      this.age += years;
    }
  }
  
  // Create two people using the 'new' keyword
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
  
  // Print both of their infos
  person1.printInfo();
  person2.printInfo();
  
  // Increment one person's age by 3 years
  person2.addAge(3);
  
  // Print both of their infos again to see the updated age
  person1.printInfo();
  person2.printInfo();

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        console.log("Big word");
        resolve();
      } else {
        console.log("Small number");
        resolve();
      }
    });
  }
  
checkStringLength("sg").then(() => { 
});


// Codewars problems in JavaScript

// Is it even? 

function testEven(n) {
    return n % 2 === 0;
  }
  

// You Can't Code Under Pressure #1

function doubleInteger(i) {
    return i * 2;
  }
