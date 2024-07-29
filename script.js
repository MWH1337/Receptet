console.log('uppgift 1');

//console.log(document.querySelector('#recipe-name').textContent);
//let receptName = document.getElementById('recipe-name');
//console.log(receptName.textContent);
// KLar ( Båda varianter OK)


console.log('uppgift 2');

//console.log(receptName.tagName);
// Klar

console.log('uppgift 3');
//tips
//const element = document.getElementById("test");
//const cssObj = window.getComputedStyle(element, null);
//let bgColor = cssObj.getPropertyValue("background-color");
// min kod
//let myDescription = document.querySelector('.description');
//let myCssObject = window.getComputedStyle(myDescription,null);
//console.log(myCssObject.getPropertyValue("font-size"));
// Klar
console.log('uppgift 4');
//let myClassContainer = document.querySelector("img");
//console.log(myClassContainer.alt);
//KLar
console.log('uppgift 5');
/*let myClassContainer = document.querySelector("img");

let myImage = {
    myImageUrl : myClassContainer.src,
    height : myClassContainer.height,
    width : myClassContainer.width
};
console.log(myImage);
Klar
*/
console.log('uppgift 6');
/*
let myPaste = document.querySelector(".ingredients-list-paste");
console.log(`Antal ingredienser i pastan: ${myPaste.children.length}`);
Klar
*/
console.log('uppgift 7');
/*
let myPaste = document.querySelector(".ingredients-list-paste");
let elementNumberFour = myPaste.children[3];
console.log(`Fjärde element i listan: ${elementNumberFour.textContent}`);
Klar
*/
console.log('uppgift 8');

let myList = document.querySelector(".instructions-list");
let myArray = myList.children;
console.log(myArray);
let newArray = [];


for (let i=0;i<myArray.length;i++) {
    let newObject = {};
    newObject.order = i;
    newObject.text = myArray[i].innerText;
    newArray.push(newObject);

    }
    
console.log(newArray);
    


    

    
