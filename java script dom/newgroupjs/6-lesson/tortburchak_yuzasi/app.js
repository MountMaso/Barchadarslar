const width1=prompt('width1');
const height1=prompt('height1');
const width2=prompt('width2');
const height2=prompt('height2');

// Tortburchakni yuzasini hisoblash formulasi R=width*height
let R1=width1*height1;
let R2=width2*height2;

console.log(`R1 = ${R1} va R2 = ${R2}`);

if(R1>R2){
    console.log('R1 katta R2');
}
else if(R1<R2){
    console.log('R2 katta R1');
}
else{
    console.log('R1 va R2 o`zaro teng...');
}