const clockE1=document.querySelector('.clock');
const hour=document.getElementById('hour');
const min=document.getElementById('min');
const secund=document.getElementById('secund');
const timeStatus=document.getElementById('timestatus')
const buttons=document.querySelectorAll('data-format')

function generateTime(){
    const date=new Date();
  
    let h=date.getHours();
    const m=date.getMinutes();
    const s=date.getSeconds();
  
    hour.innerHTML=h<10 ? '0'+h:h;
    min.innerHTML=m<10 ? '0'+m:m;
    secund.innerHTML=s<10 ? '0'+s:s;
    timeStatus.innerHTML=(h>12)?'PM':'AM';
    if(format===12){
        h=(h>12)?12:h;
        console.log(h);
    }
    

    

}
setInterval(generateTime,1000);