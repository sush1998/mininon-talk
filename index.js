const btnTransalate=document.querySelector("#btn-translate");
const inputText=document.querySelector("#input");
const output=document.querySelector("#output");

var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var data="sushant";


function clickHandler()
{
    checkIfEmpty();
    var url2=url+"?text="+inputText.value;
    fetch(url2)
    .then(response=>response.json())
    .then(json=>console.log(json))
    .catch(errorHandler);
}

function errorHandler(error)
{
    console.log("error occured");
    alert("something went wrong")
}

btnTransalate.addEventListener("click",clickHandler());



function checkIfEmpty()
{
    if(inputText.value=="")
    {
        alert("Enter some text");
        return true;
    }
}

function translate()
{
    output.innerHTML=inputText.value;
}