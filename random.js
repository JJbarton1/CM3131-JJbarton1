const imageDisplay = document.getElementById("img-display","img-display2");
const imageDisplay2 = document.getElementById("img-display2");
const imageDisplay3 = document.getElementById("img-display3");
const imageDisplay4 = document.getElementById("img-display4");
const imageDisplay5 = document.getElementById("img-display5");
const imageDisplay6 = document.getElementById("img-display6");


const drinkName = document.getElementById("drink-name");
const randomOutput = document.querySelector('#rand-button');

const outputList = document.getElementById("list-output");
const outputList2 = document.getElementById("list-output2");
const outputList3 = document.getElementById("list-output3");
const outputList4 = document.getElementById("list-output4");
const outputList5 = document.getElementById("list-output5");
const outputList6 = document.getElementById("list-output6");


const drinks = `https://api.punkapi.com/v2/beers/random`;



randomOutput.addEventListener('click', getDetails);
randomOutput.addEventListener('click', getDetails2);
randomOutput.addEventListener('click', getDetails3);
randomOutput.addEventListener('click', getDetails4);
randomOutput.addEventListener('click', getDetails5);
randomOutput.addEventListener('click', getDetails6);




function getDetails(){

    fetch(drinks)
    
    .then(getJson)
    
    .then(data => {
        //get info
        console.log(data);
        const image_url = data[0].image_url;

        //display name
        const name = data[0].name;

        //display tagline
        const tagline = data[0].tagline;

        //display abv
        const abv = data[0].abv;


        
        outputList.textContent = name + ', ' + 'abv: ' + abv;
        imageDisplay.src= image_url;
        
        if (imageDisplay.src == null) {

           imageDisplay.src = "Pictures/noIMG.png"
        }

        }
    ).catch(reportError);
}

//-------------------------------------------------------------------

function getDetails2(){

    fetch(drinks)
    
    .then(getJson)
    
    .then(data => {
        //get info
        console.log(data);
        const image_url = data[0].image_url;

        //display name
        const name = data[0].name;

        //display tagline
        const tagline = data[0].tagline;

        //display abv
        const abv = data[0].abv;


        
        outputList2.textContent = name + ', ' + 'abv: ' + abv;
        imageDisplay2.src= image_url;

        if (imageDisplay2.src == null) {


           imageDisplay2.src = "Pictures/noIMG.png"
        }

        }
    ).catch(reportError);
}

//-------------------------------------------------------------------

function getDetails3(){

    fetch(drinks)
    
    .then(getJson)
    
    .then(data => {
        //get info
        console.log(data);
        const image_url = data[0].image_url;

        //display name
        const name = data[0].name;

        //display tagline
        const tagline = data[0].tagline;

        //display abv
        const abv = data[0].abv;


        
        outputList3.textContent = name + ', ' + 'abv: ' + abv;
        imageDisplay3.src= image_url;

        if (imageDisplay3.src == null) {

           imageDisplay3.src = "Pictures/noIMG.png"
        }

        }
    ).catch(reportError);
}

//-------------------------------------------------------------------

function getDetails4(){

    fetch(drinks)
    
    .then(getJson)
    
    .then(data => {
        //get info
        console.log(data);
        const image_url = data[0].image_url;

        //display name
        const name = data[0].name;

        //display tagline
        const tagline = data[0].tagline;

        //display abv
        const abv = data[0].abv;


        
        outputList4.textContent = name + ', ' + 'abv: ' + abv;
        imageDisplay4.src= image_url;

        if (imageDisplay4.src == null) {

           imageDisplay4.src = "Pictures/noIMG.png"
        }

        }
    ).catch(reportError);
}

//-------------------------------------------------------------------

function getDetails5(){

    fetch(drinks)
    
    .then(getJson)
    
    .then(data => {
        //get info
        console.log(data);
        const image_url = data[0].image_url;

        //display name
        const name = data[0].name;

        //display tagline
        const tagline = data[0].tagline;

        //display abv
        const abv = data[0].abv;


        
        outputList5.textContent = name + ', ' + 'abv: ' + abv;
        imageDisplay5.src= image_url;

        if (imageDisplay5.src == null) {


           imageDisplay5.src = "Pictures/noIMG.png"
        }

        }
    ).catch(reportError);
}

//-------------------------------------------------------------------

function getDetails6(){

    fetch(drinks)
    
    .then(getJson)
    
    .then(data => {
        //get info
        console.log(data);
        const image_url = data[0].image_url;

        //display name
        const name = data[0].name;

        //display tagline
        const tagline = data[0].tagline;

        //display abv
        const abv = data[0].abv;


        
        outputList6.textContent = name + ', ' + 'abv: ' + abv;
        imageDisplay6.src= image_url;

        if (imageDisplay6.src == null) {


           imageDisplay6.src = "Pictures/noIMG.png"
        }

        }
    ).catch(reportError);
}

//-------------------------------------------------------------------





function getJson(aResponse){
    return aResponse.json();
}



function reportError(anError){
    //console.log(anError);
}