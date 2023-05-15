// Your code here
class Cat {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	speak() {
		return `${this.name} says meow!`;
	}
}
class Dog {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	speak() {
		return `${this.name} says woof!`;
	}
}
class Bird {
	constructor(name, sex) {
		this.name = name;
		this.sex = sex;
	}
	speak() {
		if (this.sex === 'male') {
			return `It's me! ${this.name}, the parrot!`;
		} else {
			return `${this.name} says squawk!`;
		}
	}
}

const bird = new Bird('Pablo', 'male');
const dog = new Dog('Scooby');
const cat = new Cat('Garfield');
const bird2 = new Bird('Mable', 'female');
console.log(bird.speak());
