console.log('uppgift 1');

let logoRef = document.querySelector('.logo-text');

logoRef.style.color = "#384241";
//console.log(logoRef.textContent);
// Klar


console.log('uppgift 2');

let headerRef = document.querySelector('header');
headerRef.style.justifyContent = "left";
// klar

console.log('uppgift 3');
headerRef.style.borderBottomColor = "lightgray";
// Klar

console.log('uppgift 4');
let ReceptNameRef = document.getElementById("recipe-name");
ReceptNameRef.innerHTML = "Frozen Cheesecake";
// Klar
console.log('uppgift 5')
let timeContainerRef = document.querySelector(".time-container");

let timerClassList = timeContainerRef.firstChild.classList;
timerClassList.add("material-icons");
// Klar

console.log('uppgift 6');
let timerText = timeContainerRef.lastChild;
timerText.innerHTML = '60+ min';

// Klar

console.log('uppgift 7');
let pictureRef = document.getElementsByTagName('img');
pictureRef[0].src="assets/frozen-cheesecake-slice.jpg";
// Klar

console.log('uppgift 8');


let ingredientsContainerRef = document.querySelector(".ingredients-container");
ingredientsContainerRef.style.backgroundColor = '#f9f9f9';
// Klar

console.log('uppgift 9');

// ingredients-list-bottom
let ingredientsListBottomRef = document.querySelector('.ingredients-list-bottom');
//console.log(ingredientsListBottomRef);
ingredientsListBottomRef.removeChild(ingredientsListBottomRef.firstElementChild);
let newListItemNrOne = document.createElement("li");
let newTextNodeNrOne = document.createTextNode("15st digestivetex");
newListItemNrOne.appendChild(newTextNodeNrOne);
ingredientsListBottomRef.appendChild(newListItemNrOne);
let newListItemNrTwo = document.createElement("li");
let newTextNodeNrTwo = document.createTextNode("Lite smör");
newListItemNrTwo.appendChild(newTextNodeNrTwo);
ingredientsListBottomRef.appendChild(newListItemNrTwo);
// Klar

console.log('uppgift 10');
// ingredients-list-paste

let ingredientsListPasteRef = document.querySelector(".ingredients-list-paste");
let newListPasteTextNode = document.createTextNode("3tsk vaniljsocker");

ingredientsListPasteRef.children[2].replaceChild(newListPasteTextNode,ingredientsListPasteRef.children[2].childNodes[0] );




// Klar

console.log('uppgift 11');
// 400g naturell philadelphiaost

let newListPasteTextNodeNr2 = document.createTextNode("400g naturell philadelphiaost");
let newPasteListItemNrFive = document.createElement("li");
newPasteListItemNrFive.appendChild(newListPasteTextNodeNr2);
ingredientsListPasteRef.appendChild(newPasteListItemNrFive);

// Klar

console.log('uppgift 12');
// instructions shadow
let instructionsContainerRef = document.querySelector('.instructions-container');
let shadowBoxRef = instructionsContainerRef.children[0];
shadowBoxRef.style.boxShadow = "none";
shadowBoxRef.style.padding = 0;


// Klar

console.log('uppgift 13');
// instructions-list

//let newListPasteTextNode = document.createTextNode("3tsk vaniljsocker");

// ingredientsListPasteRef.children[2].replaceChild(newListPasteTextNode,ingredientsListPasteRef.children[2].childNodes[0] );
let instructionsListRef = document.querySelector('.instructions-list');
console.log(instructionsListRef);
let newInstructionsListTextNodeNr1 = document.createTextNode("Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.");
instructionsListRef.children[1].replaceChild(newInstructionsListTextNodeNr1,instructionsListRef.children[1].childNodes[0]);
// Ställ in i frysen över natten.
let newInstructionsListTextNodeNr2 = document.createTextNode("Ställ in i frysen över natten.");
instructionsListRef.children[8].replaceChild(newInstructionsListTextNodeNr2,instructionsListRef.children[8].childNodes[0]);
// Klar


