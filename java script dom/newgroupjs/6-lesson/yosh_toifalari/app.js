const age=Number(prompt('Yoshingizni kiriting'));

if(age<=0){
    console.log('Siz xali planda yoqsiz');
}
else if(age<=1){
    console.log('Siz chaqaloqsiz');
}
else if(age<13){
    console.log('Siz bolasiz');
}
else if(age<20){
    console.log('Siz o`spirinsiz');
}
else{
    console.log('Siz voyaga yetgansiz');
}