let arrs=[1,3,800,0,12,45,2,77,4,-1,100,-8,5];
let max=0;
for(let i=0;i<arrs.length-1;i++){
    for(let j=i+1;j<arrs.length;j++){
      if(arrs[i]<arrs[j]){
        max=arrs[i];
        arrs[i]=arrs[j];
        arrs[j]=max;
      }
    }
  }
console.log(arrs);
// i      j
// 1   <  3
// 3   <  800
// 800 <  0
// 0   <  12
// 12  <  45
// 45  <  2
// 2   <  77
// 77  <  4
// 4   <  -1
// -1  <  100
// 100 <  -8
// -8  <  5






























// let seconds=prompt('Sekund kiriting');

// days=Math.floor(seconds/8600);
// hours=Math.floor((seconds%86400)/3600);
// minutes=Math.floor(((seconds%86400)%3600)/60);
// seconds=(((seconds%86400)%3600)%60);

// console.log('Timer Calculator');
// console.log(`${days} day(s) ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s).`);