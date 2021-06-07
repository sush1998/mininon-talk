const btnTransalate=document.querySelector("#btn-translate");
const inputText=document.querySelector("#input");
const output=document.querySelector("#output");

var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var text="sushant";

console.log(btnTransalate)

function urlConstruct(text)
{
    var request=url+"?"+"text="+text;
    return request;
}

function errorHandler(error)
{
    console.log("error occured")
    alert("Something went wrong")
}

function clickHandler()
{
    var translationURL=urlConstruct(inputText.value)
    fetch(translationURL)
    .then(response => response.json())
    .then(json=>console.log(json))
    .catch(errorHandler)

}




btnTransalate.addEventListener("click",clickHandler)