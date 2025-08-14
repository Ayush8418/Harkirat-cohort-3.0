
class Animal {
    // Static properties and functions
    static planet = "Earth";
    static eat(){
        console.log("Animal Eating")
    };

    constructor(name, legCount) {
        this.name = name
        this.legCount = legCount
    }
    describe() {
        return `My ${this.name} has ${this.legCount} legs`
    }
}

// making objects
let dog = new Animal("dog", 4);
console.log(dog.describe());

let kangaroo = new Animal("Kangroo", 2);
console.log(kangaroo.describe());

// accessing Static properties and functions using class name.
console.log(Animal.planet);
console.log()


//Inheritance
class Shape{
    constructor(color){
        this.color = color;
    }
    paint(){
        console.log("painting with color: ", this.color);
    }
}

class Rectangle extends Shape{
    constructor(height, width, color){
        super(color);
        this.height = height;
        this.width = width;
    }
    area(){
        console.log("Area of the rectangle is: ",this.height*this.width);
    }
}

const s1 = new Shape('red');
s1.paint();

const r1 = new Rectangle(5,3,'blue');
r1.paint();
r1.area();