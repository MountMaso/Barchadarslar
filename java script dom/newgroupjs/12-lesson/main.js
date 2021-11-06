// let musbatSonlarYigindisi=0;
// let son=Number(prompt('sonni kiriting: '));

// while(son>-1){
//     musbatSonlarYigindisi+=son;
//     son=Number(prompt('sonni kiriting: '));
// }
// console.log(` Musbat sonlar yigindisi: ${musbatSonlarYigindisi}`);

// for(let i=0;i<colors.length;i++){
//     console.log(` index = ${i} value = ${colors[i]}`);
// }
// for(let index in colors){
//     console.log(index,colors[index]);
// }
// for(let color of colors){
//     console.log(color);
// }

let colors = ["black", "white", "red", "blue", "green"];
// console.log(colors);
// colors.forEach((color,index,a)=>{
//     console.log(`color : ${color} index = ${index} ${a}`);
// })

// Map
let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// const kvadratNum=numbers.map(number=>{
//     return number**2;
// })
// console.log(kvadratNum);

// const kvadratNum=numbers.map(number=>number=number**2);
// console.log(kvadratNum);
const fruits = [
  { name: "apples", color: "red", price: 2 },
  { name: "pears", color: "orange", price: 4 },
  { name: "bean", color: "red", price: 4 },
];

const fruit=fruits.filter(item=>item.price==4);
console.log(fruit);
// Function Declaration
// ----------------------------
// myFunc('Bobur',23);
// myFunc('Ilhom',27);
// function myFunc(name,age){
//     // console.log('my name is function');
//     console.log(`My name is ${name} and I am ${age} years old`)
// }

// Function Expression
// ---------------------------------
// const myFunc=function calc(a,b){
//     return a+b;
//     // console.log(`${a+b}`);
// }
// // myFunc(5,7);
// console.log(myFunc(5,7));

// const myFunc=(a,b)=>{
//     return a+b;
// }
// console.log(myFunc(5,7));
