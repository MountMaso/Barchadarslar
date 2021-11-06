// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.title);
// document.title="I love  DOM";
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);                   
// console.log(document.all[11]);
// gives error
// document.all[11]='yangi element';

// correct way
// document.all[11].textContent='yangi element';
// console.log(document.images);
// console.log(document.forms);
// console.log(document.links);

// GETELEMENTBYID

// console.log(document.getElementById('header-title').textContent);
// let headerTitle=document.getElementById('header-title');
// let header=document.getElementById('main-header');
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.textContent='Yangi Content Text';
// headerTitle.innerText='Yangi Content Text';
// headerTitle.innerHTML="<h2>This is HTML</h2>"
// headerTitle.style.borderBottom="2px solid red";
// headerTitle.style.color="black";
// headerTitle.style.fontSize="3rem";
// headerTitle.style.fontFamily="Chilanka";
// headerTitle.style.fontWeight="bold";

// GETELEMENTSBYCLASSNAME

// let items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="New Item";
// items[1].style.fontSize="30px";
// items[1].style.color="red";
// items[1].style.fontWeight="bold";
// items[1].style.backgroundColor="pink";

// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor="pink";
// }
// GETELEMENTSBYTAGNAME

// let items=document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="New Item";
// items[1].style.fontSize="30px";
// items[1].style.color="red";
// items[1].style.fontWeight="bold";
// items[1].style.backgroundColor="pink";

// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor="pink";
// }

// QUERYSELECTOR

// let header=document.querySelector('#main-header');
// header.style.borderBottom="3px solid red";
// // header.style.background="orange";
// let input=document.querySelector('input');
// input.value="Enter a username";
// let submit=document.querySelector('input[type="submit"]');
// submit.value="Jo`natish";

// let item=document.querySelector('.list-group-item');
// item.style.fontSize="30px";

// let item=document.querySelector('.list-group-item:first-child');
// // let item=document.querySelector('.list-group-item:last-child');
// let item=document.querySelector('.list-group-item:nth-child(4)');
// item.style.fontSize="30px";

// QUERYSELECTORALL

// let title=document.querySelectorAll('.title');
// console.log(title);

// let odd=document.querySelectorAll('li:nth-child(odd)');
// let even=document.querySelectorAll('li:nth-child(even)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="green";
//     even[i].style.backgroundColor="grey";
// }


