const btnTransalate=document.querySelector("#btn-translate");
const inputText=document.querySelector("#input");
const output=document.querySelector("#output");

//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL="https://api.funtranslations.com/translate/minion.json";


console.log(btnTransalate)

function urlConstruct(text)
{
    var request=serverURL+"?"+"text="+text;
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
    .then(json=>
        {
            var translatedText=json.contents.translated;
            output.innerHTML=translatedText;
        })
    .catch(errorHandler)

}




btnTransalate.addEventListener("click",clickHandler)