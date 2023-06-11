//Parent Node
var itemList=document.querySelector('#items');
console.log(itemList.parentNode.parentNode.parentNode);
itemList.parentNode.style.backgroundColor="Yellow";

//Parent Element
console.log(itemList.parentElement.parentElement);
itemList.parentElement.style.color="Blue";

//Child Nodes - with white spaces
console.log(itemList.childNodes);

//Chidren - without white spaces
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.fontWeight="Bold";

//First Child - With white space
console.log(itemList.firstChild);

//First Element Child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="Hi";

//Last Child - With white spaces
console.log(itemList.lastChild);

//Last Element Child - Without white spaces
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Hello";

//Next Sibling
console.log(itemList.nextSibling);

//Next Element Sibling - No elements after items so null
console.log(itemList.nextElementSibling);

//Previous Sibling
console.log(itemList.previousSibling);

//Previous Element Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="Red";

//Create Element
var newDiv=document.createElement('div');
newDiv.className="Class";
newDiv.id="id";
newDiv.setAttribute('title',"Hi")
console.log(newDiv);

//Create Text Node
var newDivText=document.createTextNode('Haai');
console.log(newDivText);

//Add Text to Div
newDiv.appendChild(newDivText);
console.log(newDiv);

//To insert these into the DOM
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';
console.log(newDiv);

//Adding 'Hello World' before Item Listener
var ItemListener=document.querySelector('#header-title');
console.log(ItemListener);
console.log(ItemListener.previousElementSibling);
ItemListener.previousElementSibling.textContent="Hello World";
console.log(ItemListener.previousElementSibling);

//Adding 'Hello World' before Item 1
var newitem=document.querySelector('#items');
console.log(newitem.children);
newitem.children[0].previousSibling.textContent="Hello World";
console.log(newitem.children[0].previousSibling);

