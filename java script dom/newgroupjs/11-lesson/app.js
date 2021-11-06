// let a=Number(prompt('a = '));

// if(a>0){
//     a++;
//     console.log(a);
// }
// else{
//     console.log(a);
// }
// let musbat=0;
// let manfiy=0;
// let numbers=[-3,0,22,66,-35,0,0,42,-2,-7];
// for(number of numbers){
//     if(number>0) musbat++; 
//     if(number<0) manfiy++; 
// }
// console.log(`musbat elementlar soni = ${musbat}`);
// console.log(`manfiy elementlar soni = ${manfiy}`);

// for(let i=0; i<numbers.length;i++){
//     console.log(numbers[i])
// }
// let a=prompt('a = ');
// let b=prompt('a = ');

// (a>b)?console.log('a katta'):(a<b)?console.log('b katta'):console.log('ikki son teng');

// if(a>b){
//     console.log('a katta')
// }
// else if(a<b){
//     console.log('b katta')
// }
// else{
//     console.log('ikki son ozaro teng');
// }
// let a=prompt('a = ');
// let b=prompt('b = ');
// (a>b)?console.log(`b kichik - ${b} ikkinchi`):console.log(`a kichik -${a} birinchi`);


// let a=Number(prompt('a = '));
// let b=Number(prompt('b = ')); 
// let c;
// if(a>b){
//     c=a; 
//     a=b; 
//     b=c;
//     console.log(`a = ${a} b = ${b}`);  
// }
// else{
//     console.log(`b katta - ${b}`);
// }
let a=Number(prompt('a = '));
let b=Number(prompt('b = ')); 
let c=0;
if(a > b || a < b){
    c=a+b;
    // a=c;
    // b=c;
    console.log(`a = ${c} b = ${c}`);
}
else{
    a=0;
    b=0;
    console.log(`a = ${a} b = ${b}`);
}