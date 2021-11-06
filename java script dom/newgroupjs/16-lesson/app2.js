let form=document.getElementById('addForm');
let itemList=document.getElementById('items');

// filter event
let filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems);

function filterItems(e){
    let text=e.target.value.toLowerCase();
    // console.log(text);
    let items=itemList.getElementsByTagName('li');
        console.log(items);
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}


form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Siz xaqiqatdan o`chirmoqchimisz?')){
            let li=e.target.parentElement;
            console.log(li);
            itemList.removeChild(li);
        }
    }
}

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