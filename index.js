const btnTransalate=document.querySelector("#btn-translate");
const inputText=document.querySelector("#input");
const output=document.querySelector("#output");

btnTransalate.addEventListener("click",()=>
{
    var empty=checkIfEmpty();
    if(empty==false)
    {
        translate();
        alert("translated")
    }
    else
    {
        inputText.focus();
        translate();
    }
    
})



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