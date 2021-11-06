// while,do while loop
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let i = 11;
// while (i < 10) {
//   if (i % 2 !== 0)
//     console.log(i);
//     i++;
// }

// do while

let i=99;
do{
    if(i%2!==0)
        console.log(i);
        i++;
}while(i<10);

// for(let i=0; i<10;i++){
//     console.log(i);
// }

// let arrays=[1,8,12,7,-688,99,-23,412,0];
// for(let array in arrays){
//     console.log(arrays[array]);
// }

// for(let array of arrays){
//     console.log(array);
// }
// for(let i=0; i<arrays.length;i++){
//     console.log(arrays[i]);
// }
// for(let array in arrays){
//     console.log(array);
// }

// let arrays=[1,8,12,7,-688,99,-23,412,0];
// let max=0;
// for(let i=0;i<arrays.length-1;i++){
//     for(let j=i+1;j<arrays.length;j++){
//         if(arrays[i]>arrays[j]){
//             max=arrays[i];
//             arrays[i]=arrays[j];
//             arrays[j]=max;
//         }
//     }
// }
// console.log(arrays);

// let arrays=['Black','White','Orange','Red','Green'];
// let arrays=[1,8,12,7,99,-23,4,0];
// let array=[];
// for(let i=0;i<arrays.length;i++){
//     if(arrays[i]%2!==0){
//         array.push(arrays[i]);
//         // console.log(arrays[i]);
//     }
// }
// console.log(array);
// let arrays=[1,8,12,7,-688,99,-23,412,0];
// let max=0;
// for(let i=0;i<arrays.length;i++){
//     if(arrays[i]>max){
//         max=arrays[i];
//     }
// }
// console.log(max);

// 0 1 >max(0)
// 1 8  >  1
// 2 12 > 8
// 3 7  > 12
// 4 99 > 12
// 5 -23 >99
