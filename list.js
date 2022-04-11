const imageDisplay = document.getElementById("img-display");
const drinkName = document.getElementById("drink-name");
const outputSelect = document.querySelector('#select-output');

const searchTerm = document.querySelector('#input-drink-name');
const outputList = document.getElementById("list-output");

const drinks = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;

let beerName = "";


initData();


outputSelect.addEventListener('ionChange', getDetails);



function getDetails(){

    fetch(drinks).then(getJson).then(updateDisplay).catch(reportError);
}


function getJson(aResponse){
    return aResponse.json();
}
  

function updateDisplay(jsonObj){ 

  

    let beerObjArray = jsonObj; 

    for (let aBeerObj of beerObjArray){   
      if (aBeerObj.name === outputSelect.value){
        beerObj = aBeerObj;
      }  
    }

    let beerName = beerObj.name;
    drinkName.textContent = beerObj.name;
    let beerImageURL = beerObj.image_url; 
    imageDisplay.src=beerImageURL; 

    if (imageDisplay.src == null) {


     imageDisplay.src = "Pictures/noIMG.png"
  }

    
    removeAllListItems();
    makeDetailsList(beerObj)
}
  
function reportError(anError){
    //console.log(anError);
}

function getBeerNameInput(){
    return searchTerm.value;
}


function makeDetailsList(aBeerObj){
    let beerPropertyList = ["name", "tagline", "abv", "description"];
  
    for (let beerProperty of beerPropertyList){
      const newItem = document.createElement('ion-item');
      let outputText = beerProperty.toUpperCase() + ":   " + aBeerObj[beerProperty];
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
    fetch(drinks).then(getJson).then(initSelect).then(reportError);  
}


function initSelect(jsonObj){

    let beerObjectArray = jsonObj;
    let beerNamesArray = [];
  
    for (let beerObject of beerObjectArray){
      beerNamesArray.push(beerObject.name);
    }
    buildSelectOptions(beerNamesArray);
}



function buildSelectOptions(anArrayOfBeerNames){
  
    for (let beerName of anArrayOfBeerNames){
      createSelectOption(beerName)
    }
}


function createSelectOption(aName){
    const newItem = document.createElement('ion-select-option');
    newItem.value = aName;
    newItem.textContent = aName.toUpperCase();
  
    outputSelect.appendChild(newItem);  
}




//function getInputFromTextBox() {
//  var input = document.getElementById("userInput").value;
//  alert(input);
//}