let bigdiv=document.getElementById('bigdiv');
let biginput=document.getElementById('biginput');
let button=document.getElementById('button');
button.addEventListener('click', convert);

function convert(e){
    console.log('click');
    let smallinput=Number(e.target.value);
        if(smallinput>0){
            bigdiv.style.visibility='visible';
            let dollar=document.getElementById('dollar');
            dollar.innerHTML=Math.floor((smallinput/10973)*10)/10;
            let euro=document.getElementById('euro');
            euro.innerHTML=Math.floor((smallinput/11454)*10)/10;
    }
    }
// biginput.addEventListener('input',function(e){
  
// let smallinput=Number(e.target.value);
//     if(smallinput>0){
//         bigdiv.style.visibility='visible';
//         let dollar=document.getElementById('dollar');
//         dollar.innerHTML=Math.floor((smallinput/10973)*10)/10;
//         let euro=document.getElementById('euro');
//         euro.innerHTML=Math.floor((smallinput/11454)*10)/10;
//     }

// })