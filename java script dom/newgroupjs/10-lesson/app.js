// const konfet=2000
// let sum;
// for(let i=1;i<=10;i++){
//     sum=i*konfet
//     console.log(`${i} kg konfetning narxi ${sum} so'mni tashkil qiladi`)
// }
// const konfet=2000
// let sum;
// for(let i=12;i<=20;i+=2){
//     sum=(i*konfet)/10
//     console.log(`${i/10} kg konfetning narxi ${sum} so'mni tashkil qiladi`)
// }
// let a=5;
// let b=10;
// let sum=0;
// for(let i=a;i<b;i++){
//     sum+=(Math.pow(i,2));
//     // console.log(i);
// }
// console.log(sum);

// a=prompt('a sonini kiriting');
// b=prompt('b sonini kiriting');

// if(a>b){
//     console.log('a katta b')
// }
// else if(a<b){
//     console.log('a kichik b')
// }
// else{
//     console.log('a va b ozaro teng')
// }
// 24 soat =86400
// 1 minut = 60
// 1 soat =60*60 = 3600
// 1 kun =24*3600=86400
// 125000
sekundSoni=Number(prompt('sekundlar sonini kiriting'));

let kunlar=Math.floor(sekundSoni/86400)
let soatlar=Math.floor((sekundSoni%86400)/3600)
let minutlar=Math.floor(((sekundSoni%86400)%3600)/60)
let sekundlar=Math.floor(((sekundSoni%86400)%3600)%60)
console.log(`kun = ${kunlar} : soatlar = ${soatlar} : minutlar = ${minutlar} : sekundlar = ${sekundlar}`);