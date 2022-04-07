const imageDisplay = document.getElementById("img-display");
const drinkTitle = document.getElementById("title-name");
const outputSelect = document.querySelector('#select-output');

const searchTerm = document.querySelector('#input-drink-name');
const outputList = document.getElementById("list-output");



const drinks = `https://api.punkapi.com/v2/beers`;

// const maps = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters';
//

let drinkName = "";

initData();

outputSelect.addEventListener('ionChange', getDetails);


function getDetails(){

    fetch(beers).then(getJson).then(updateDisplay).catch(reportError);
}


function getJson(aResponse){
    return aResponse.json();
}


function updateDisplay(jsonObj){

    let drinkObjArray = jsonObj;

    for (let aDrinkObj of drinkObjArray){
        if (aDrinkObj.name === outputSelect.value){
            drinkObj = aDrinkObj;
        }
    }
 //console.log(drinkObj)   

let drinkName = drinkObj.name;
drinkTitle.textContent = drinkObj.name;
let drinkImageURL = drinkObj.img;
imageDisplay.src = drinkImageURL;

removeAllListItems();
makeDetailsList(drinkObj)
}


function reportError(anError){
  //  console.log(anError);
}


function getDrinkNameInput(){
  //  console.log(searchTerm.value);
    return searchTerm.value;

}


function makeDetailsList(aDrinkObj){
    let drinkPropertyList = ["tagline", "abv", "description"];

    for (let drinkProperty of drinkPropertyList){
        const newItem = document.createElement('ion-item');
        let outputText = drinkProperty.toUpperCase() + ":   " + aDrinkObj[drinkProperty];
        newItem.textContent = outputText;

        outputList.appendChild(newItem);
    }
}


function removeAllListItems(){
    while (outputList.lastElementChild) {
        outputList.removeChild(outputList.lastElementChild);
    }
}



function initData(){
    fetch(beers).then(getJson).then(initSelect).then(reportError);
}



function initSelect(jsonObj){

    let drinkObjectArray = jsonObj;
    
    let drinkNamesArray = [];

    for (let drinkObject of drinkObjectArray){
        drinkNamesArray.push(drinkObject.name);
    }
    buildSelectOptions(drinkNamesArray);
}

function buildSelectOptions(anArrayOfDrinkNames){

    for (let drinkName of anArrayOfDrinkNames){
        createSelectOption(drinkName)
    }
}

function createSelectOption(aName){
    const newItem = document.createElement('ion-select-option');
    newItem.value = aName;
    newItem.textContent = aName.toUpperCase();

    outputSelect.appendChild(newItem);
}