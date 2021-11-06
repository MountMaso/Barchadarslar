Islomjon Makhamadjanov (NC), [20.09.21 21:21]
const navbar=document.getElementById('nav');

window.addEventListener('scroll',function(){
    const scrollHeight=window.pageYOffset;
    // console.log(scrollHeight);
    const navHeight=navbar.getBoundingClientRect().height;
    // console.log(scrollHeight,navHeight);
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
        // navbar.style.backgroundColor='red';
        console.log('success');
    }else{
        navbar.classList.remove('fixed-nav');
        // navbar.style.backgroundColor='black';
        console.log('failed');
    }
})

Islomjon Makhamadjanov (NC), [20.09.21 21:31]
// getBoundingClientRect() - elementlarimizni xususiyatlarini olib beradi
// PageYOffset
// PageXOffset

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle('show-links');
  const linksHeight = links.getBoundingClientRect().height;
  console.log(linksHeight);
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = ${linksHeight}px;
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav");
const topLink=document.querySelector('.top-link');
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight>500){
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');
    }
    console.log(scrollHeight);
});

const scrollLinks=document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link)=>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        const id=e.currentTarget.getAttribute('href').slice(1);
        // console.log(id);
        const element=document.getElementById(id);
        console.log(element.offsetTop);
        const navHeight=navbar.getBoundingClientRect().height;
        const containerHeight=linksContainer.getBoundingClientRect().height;
        const fixedNav=navbar.classList.contains('fixed-nav');
        let position=element.offsetTop-navHeight;

        if(!fixedNav){
            position=position-navHeight;
        }
        if(navHeight>84){
            position=position+containerHeight;
        }
        window.scrollTo({
            left:0,
            top:position,
        })
        linksContainer.style.height=0;
    });
})