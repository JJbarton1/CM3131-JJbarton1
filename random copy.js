//image updaters
const imageDisplay = document.getElementById("img-display");
const imageDisplay2 = document.getElementById("img-display2");
const imageDisplay3 = document.getElementById("img-display3");
const imageDisplay4 = document.getElementById("img-display4");
const imageDisplay5 = document.getElementById("img-display5");
const imageDisplay6 = document.getElementById("img-display6");

//make random button
const randomOutput = document.querySelector('#rand-button');

//output for api data
const outputList = document.getElementById("list-output");
const outputList2 = document.getElementById("list-output2");
const outputList3 = document.getElementById("list-output3");
const outputList4 = document.getElementById("list-output4");
const outputList5 = document.getElementById("list-output5");
const outputList6 = document.getElementById("list-output6");

//get api
const drinks = `https://api.punkapi.com/v2/beers/random`;

//update data on button click
randomOutput.addEventListener('click', getDetails);
randomOutput.addEventListener('click', getDetails2);
randomOutput.addEventListener('click', getDetails3);
randomOutput.addEventListener('click', getDetails4);
randomOutput.addEventListener('click', getDetails5);
randomOutput.addEventListener('click', getDetails6);


//local storage --------------------------------------------------

//saves
const save1 = document.getElementById('btn-save1');
const save2 = document.getElementById('btn-save2');
const save3 = document.getElementById('btn-save3');
const save4 = document.getElementById('btn-save4');
const save5 = document.getElementById('btn-save5');
const save6 = document.getElementById('btn-save6');

//gets
const get1 = document.getElementById('btn-get1');
const get2 = document.getElementById('btn-get2');
const get3 = document.getElementById('btn-get3');
const get4 = document.getElementById('btn-get4');
const get5 = document.getElementById('btn-get5');
const get6 = document.getElementById('btn-get6');

//stored
const stored1 = localStorage.getItem('store1');
const stored2 = localStorage.getItem('store2');
const stored3 = localStorage.getItem('store3');
const stored4 = localStorage.getItem('store4');
const stored5 = localStorage.getItem('store5');
const stored6 = localStorage.getItem('store6');

//----------------------------------------------------------------------


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

//-------------------------------------------------------------------


//Local Storage



const saveToLocalStorage1 = () => {
    localStorage.setItem('img-display', imageDisplay.src);
    localStorage.setItem('list-output', outputList.textContent);
    console.log("Saved to Local Storage");
}

const getLocalStorage1 = () => {
    const localData = localStorage.getItem('list-output');
    const imageData = localStorage.getItem('img-display');
    

    console.log("Local data is", localData + imageData);

    imageDisplay.src = imageData;
    outputList.textContent = localData;
    

}

//-----------------------------------------------------------------------

const saveToLocalStorage2 = () => {
    localStorage.setItem('img-display2', imageDisplay2.src);
    localStorage.setItem('list-output2', outputList2.textContent);
    console.log("Saved to Local Storage");
}

const getLocalStorage2 = () => {
    const localData = localStorage.getItem('list-output2');
    const imageData = localStorage.getItem('img-display2');

    console.log("Local data is", localData + imageData);

    imageDisplay2.src = imageData;
    outputList2.textContent = localData;
    
}

//-----------------------------------------------------------------------

const saveToLocalStorage3 = () => {
    localStorage.setItem('img-display3', imageDisplay3.src);
    localStorage.setItem('list-output3', outputList3.textContent);
    console.log("Saved to Local Storage");
}

const getLocalStorage3 = () => {
    const localData = localStorage.getItem('list-output3');
    const imageData = localStorage.getItem('img-display3');

    console.log("Local data is", localData + imageData);

    imageDisplay3.src = imageData;
    outputList3.textContent = localData;
    
}

//-----------------------------------------------------------------------

const saveToLocalStorage4 = () => {
    localStorage.setItem('img-display4', imageDisplay4.src);
    localStorage.setItem('list-output4', outputList4.textContent);
    console.log("Saved to Local Storage");
}

const getLocalStorage4 = () => {
    const localData = localStorage.getItem('list-output4');
    const imageData = localStorage.getItem('img-display4');

    console.log("Local data is", localData + imageData);

    imageDisplay4.src = imageData;
    outputList4.textContent = localData;
    
}

//-----------------------------------------------------------------------

const saveToLocalStorage5 = () => {
    localStorage.setItem('img-display5', imageDisplay5.src);
    localStorage.setItem('list-output5', outputList5.textContent);
    console.log("Saved to Local Storage");
}

const getLocalStorage5 = () => {
    const localData = localStorage.getItem('list-output5');
    const imageData = localStorage.getItem('img-display5');

    console.log("Local data is", localData + imageData);

    imageDisplay5.src = imageData;
    outputList5.textContent = localData;
    
}

//-----------------------------------------------------------------------

const saveToLocalStorage6 = () => {
    localStorage.setItem('img-display6', imageDisplay6.src);
    localStorage.setItem('list-output6', outputList6.textContent);
    console.log("Saved to Local Storage");
}

const getLocalStorage6 = () => {
    const localData = localStorage.getItem('list-output6');
    const imageData = localStorage.getItem('img-display6');

    console.log("Local data is", localData + imageData);

    imageDisplay6.src = imageData;
    outputList6.textContent = localData;
    
}

//-----------------------------------------------------------------------

save1.addEventListener('click', saveToLocalStorage1);
save2.addEventListener('click', saveToLocalStorage2);
save3.addEventListener('click', saveToLocalStorage3);
save4.addEventListener('click', saveToLocalStorage4);
save5.addEventListener('click', saveToLocalStorage5);
save6.addEventListener('click', saveToLocalStorage6);


get1.addEventListener('click', getLocalStorage1);
get2.addEventListener('click', getLocalStorage2);
get3.addEventListener('click', getLocalStorage3);
get4.addEventListener('click', getLocalStorage4);
get5.addEventListener('click', getLocalStorage5);
get6.addEventListener('click', getLocalStorage6);