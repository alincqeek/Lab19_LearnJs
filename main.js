// for(let i=0; i<5;i++){ console.log(i);}
// for(let i=1; i<11;i++){ console.log(i);}
// for(let i=1; i<11;i++){ if (i%2==0){console.log(i);}}
// let s=0;
// for(let i=0; i<11;i++){ s+=i;}
// console.log(s);

// let count=0;
// while(count<3){
//     console.log("Count ",count);
//     count++;
// }

// let number = 5;
// while(number>0){
//     console.log(number);
//     number--;
// }

// let doValue=0;
// do{
//     console.log("Value: ",doValue);
//     doValue++;
// } while(doValue<3);

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }
// for (let i = 1; i < 11; i++) {
//     if (i != 5) {
//         console.log(i);
//     }
//     if (i==8){break}
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// for (let i = 1; i <= 4; i++) {
//     let s = '';
//     for (let j = 1; j <= i; j++) {
//         s += '*';
//     }
//     console.log(s);
// }

// function sum(a,b){return a+b;}
// console.log(sum(3,5))

// function multiply(a,b){return a*b;}
// console.log(multiply(3,5))

// function sayHello(name) {
//     console.log(`Hello, ${name}`);
// }

// sayHello("Тимофей");

// function printInfo(name, old) {
//     console.log(`${name} - ${old} лет`);
// }

// printInfo("Alina","17")

// function greet(name = "Гость") {
//     console.log("Привет, " + name);
// }

// greet();
// greet("Анастасия");

// function calculateDiscount(a,b=10){
//     return a-((a*b)/100)
// }
// console.log(calculateDiscount(50,50))

// const add = function (a, b) {
//     return a + b;
// };

// console.log(add(2, 3));

// function makeCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function sumFunc(a, b) {
//     return a + b;
// }

// const sumFunc2 = (a, b) => a + b;

// const double = x => x * 2;

// const sumFunc3 = (a, b) => a + b;

// const sayGreeting = () => console.log("Hello");

// const square = x => x * x;

// const calculate = (a, b) => {
//     let result = a + b;
//     return result * 2;
// };

// let numbersArr = [1, 2, 3, 4, 5];
// console.log(numbersArr);

// console.log(numbersArr[0]);
// console.log(numbersArr[1]);

// let colors=["red","yellow","blue"];
// console.log(colors[0]);
// console.log(colors[2]);
// colors[2]="grean"
// console.log(colors)

// let colors = ["red", "green", "blue"];
// console.log(colors[0]);
// console.log(colors[colors.length - 1]);
// colors[1] = "yellow";
// console.log(colors);

// console.log(numbersArr.length);

// numbersArr.push(10);
// console.log(numbersArr);

// numbersArr.pop();
// console.log(numbersArr);

// let students=[];
// students.push("Alina");
// students.push("Artur");
// students.push("Denis");
// students.pop();
// console.log(students)

// let students = [];
// students.push("Анна");
// students.push("Иван");
// students.push("Мария");
// students.pop();
// console.log(students);

// let numbers2 = [10, 20, 30];
// for (let i = 0; i < numbers2.length; i++) {
//     console.log(numbers2[i]);
// }
// let numbers2 = [10, 20, 30];

// for (let value of numbers2) {
//     console.log(value);
// }

// let mixedArray = [1, "text", true, 3.14];
// console.log(mixedArray);

// let numbersArr = [1, 2, 3, 4, 5];
// console.log(numbersArr.includes(1));
// console.log(numbersArr.indexOf(2));

// let fruits = ["яблоко", "банан", "апельсин"];
// console.log(fruits.includes("яблоко"));
// console.log(fruits.includes("манго"));

let citi = ["London", "Paris", "New York", "Tokyo", "Berlin"];
if (citi.includes("Paris")){console.log(citi.indexOf("Paris"))}