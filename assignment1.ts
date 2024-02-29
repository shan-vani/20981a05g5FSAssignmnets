// Basic Types
let myNumber: number = 10;
let myString: string = "Hello, world";
let isBoolean: boolean = true;
let numberArray: number[] = [1, 2, 3, 4, 5];
let myTuple: [string,boolean,boolean,number] = ["hello",true,false, 2024];

enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// Functions
function add(x: number, y: number): number {
    return x + y;
}

function capitalize(str1: string): string {
    return str1.charAt(0).toUpperCase() + str1.slice(1);
}

// Interfaces
interface Person {
    name: string;
    age: number;
    email: string;
}

let user: Person = {
    name: "Chris Evens",
    age: 30,
    email: "chrisevens@example.com"
};

// Classes
class Car {
    constructor(public make: string, public model: string, public year: number) {}

    displayInfo(): void {
        console.log(`Car Info: ${this.year} ${this.make} ${this.model}`);
    }
}

// Generics
function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

// Test Cases
console.log(myNumber);
console.log(myString);
console.log(isBoolean);
console.log(numberArray);
console.log(myTuple);
console.log(DaysOfWeek.Monday);

console.log(add(5, 3));
console.log(capitalize("hello world"));

console.log(user);

let myCar = new Car("maruti suzuki", "swift", 2003);
myCar.displayInfo();

let myArray = [1,3,5,7,9];
console.log(reverseArray<number>(myArray));
