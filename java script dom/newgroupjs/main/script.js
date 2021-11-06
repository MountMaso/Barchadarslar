//Document

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.title);
// document.title='123';
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[12]);
// document.all[10].textContent='Basket';
// console.log(document.images);

// GETELEMENTBYID

// console.log(document.getElementById('header-title'));
// let headerTitle=document.getElementById('header-title');
// let header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='header title';
// headerTitle.innerText='header';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// console.log(headerTitle.innerHTML);
// headerTitle.innerHTML='<h6>FullStack Developer</h6>';
// header.style.borderBottom='2px solid red';


// GETELEMENTSBYCLASSNAME

// let items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='New Item';
// items[1].style.fontSize='20px';
// items[1].style.fontWeight='bold';
// items[1].style.color='red';
// items[1].style.backgroundColor='pink';
// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor='pink';
// }

// GETELEMENTSBYTAGNAME

// let li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='New Item';
// li[1].style.fontSize='20px';
// li[1].style.fontWeight='bold';
// li[1].style.color='red';
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='pink';
// }


// QUERYSELECTOR 

// let header=document.querySelector('#main-header');
// header.style.borderBottom='3px dashed red';
// let input=document.querySelector('input');
// input.value='Enter an username';
// let submit=document.querySelector('input[type="submit"]');
// submit.value='send';

// let item=document.querySelector('.list-group-item');
// item.style.fontSize='30px';

// let item=document.querySelector('.list-group-item:first-child');
// item.style.fontSize='30px';
// let item=document.querySelector('.list-group-item:last-child');
// item.style.fontSize='30px';
// let item=document.querySelector('.list-group-item:nth-child(2)');
// item.style.fontSize='30px';


// QUERYSELECTORALL


// let titles=document.querySelectorAll('.title');
// // titles[0].textContent='something'
// let odd=document.querySelectorAll('li:nth-child(odd)');
// let even=document.querySelectorAll('li:nth-child(even)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="green";
//     even[i].style.backgroundColor="grey";
// }


//TRAVERSING THE DOM
// let itemList=document.querySelector('#items');

//parentNode - tanlangan elementni ona elementidagi boshqa 
// elementlarni xam tanlaydi

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='grey';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);//ona elementni onasini tanlaydi

//parentElement - 

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='grey';
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);//ona elementni onasini tanlaydi

// The difference paretNode and parentElement
// https://stackoverflow.com/questions/8685739/difference-between-dom-parentnode-and-parentelement

// childNodes
// console.log(itemList.childNodes); 

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='orange';

//FirstElementChild
// console.log(itemList.firstElementChild);
//LastElementChild
// console.log(itemList.lastElementChild);


//Create a div
// let createDiv=document.createElement('div');
// // Add class
// createDiv.className='hello';
// // Add id
// createDiv.id='hello';
// // Add attr
// createDiv.setAttribute('title','hello div title')
// createDiv.style.backgroundColor='indigo';
// console.log(createDiv);