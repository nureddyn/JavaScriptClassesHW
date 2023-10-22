// === Part One ===

// Class definition
class Cat {
    constructor(name, furColor, paws) {
      this.name = name;
      this.furColor = furColor;
      this.paws = paws;
    };
  
    walk() {
      console.log(`I'm walking with my ${this.paws} paws`);
    }
    eat() {
      console.log("I'm eating with my snout");
    }
    sound() {
      console.log("Meow");
    }
  }
  // Instances
  const myCat = new Cat('Carlos', 'Orange', 4);
  const yourCat = new Cat('Felix', 'Grey', 4);
  // Logging each instance and invoking its methods
  let cats = [myCat, yourCat];
  cats.forEach((cat) => {
   console.log(cat);
   cat.walk();
    cat.eat();
    cat.sound();
   console.log("\n");
  })
  
  
  // === Part Two ===
  
  class Pirate {
    constructor(name, title, shipName) {
      this.name = name;
      this.title = title;
      this.shipName = shipName;
    }
    sail(){
      console.log("We are seailing the Caribean");
    }
    steal(){
      console.log("Give us the treasure!");
    }
    drink(){
      console.log("Delicious wine I'm drinking right now!");
    }
  }
  
  pirate1 = new Pirate("Jack Sparrow", "Captain", "Black Pearl")
  pirate2 = new Pirate("William Turner Jr", "Blacksmith", "Black Pearl");
  pirate3 = new Pirate("Jack the Monkey", "Pet", "Black Pearl");
  const blackPearl = [pirate1, pirate2, pirate3];
  
  pirate4 = new Pirate("Monkey D. Luffy", "Captain", "Going Merry");
  pirate5 = new Pirate("Cat Burglar Nami", "Navigator", "Going Merry");
  pirate6 = new Pirate("Roronoa Zoro", "Swordsman", "Going Merry");
  const  GoingMerry = [pirate4, pirate5, pirate6];
  
  blackPearl.forEach((pirate) => {
    console.log(pirate.name);
    console.log(pirate.title);
    console.log(pirate.shipName);
    console.log("\n");
  })
  
  GoingMerry.forEach((pirate) => {
    console.log(pirate.name);
    console.log(pirate.title);
    console.log(pirate.shipName);
    console.log("\n");
  })