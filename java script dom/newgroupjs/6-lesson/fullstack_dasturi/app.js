const a='hello';
if(typeof a!=='number'){
    console.log('sdadasd');
}
else if(a%3==0 && a%5==0){
    console.log('FullStack');
}
else if(a%3==0){
    console.log('Full');
}
else if(a%5==0){
    console.log('Stack');
}
else{
    console.log(a);
}