let form=document.getElementById('addForm');
let itemList=document.getElementById('items');

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    // console.log('clicked');

    // get input value
    let newItem=document.getElementById('item').value;
    // console.log(newItem);


    // create li element

    let li=document.createElement('li');
    li.className="list-group-item";
    // console.log(li);

    // create deleteBtn
    let delteBtn=document.createElement('button');

    // add class
    delteBtn.className="btn-danger btn-sm float-end delete";

    delteBtn.appendChild(document.createTextNode('X'));

    // add deleteBtn to li element
    li.appendChild(delteBtn);
    // add value form input to li
    li.appendChild(document.createTextNode(newItem));
    console.log(li);

    // add li to itemList
    itemList.appendChild(li);
}