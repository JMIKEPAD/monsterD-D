

fetch("https://www.dnd5eapi.co/api/monsters/")
    .then((response) => response.json())
    .then(onDataReady)
    .catch(onError);




function onDataReady(data) {
    console.log(data)
    const list = document.getElementById('monster-list');


    for (const monster of data.results) {

        const listElement = document.createElement('li');

        listElement.className += "monster-card" + " ";

        listElement.onclick = () => fetchNewData("https://www.dnd5eapi.co" + monster.url);

        addTextToHtmlElement(listElement, monster.index.toUpperCase(), true, 'bold large-font')


        addTextToHtmlElement(listElement, monster.name, true, 'large-font')


      //    openLink(listElement, "https://www.dnd5eapi.co" + monster.url)

        list.appendChild(listElement);

        
    }

}


function onDetails(data) {

    console.log("detail", data);
    const details = document.getElementById("detail-list")
    const detail = document.createElement("li")
    detail.className += "detail-style" + " ";
    
   addTextToHtmlElement(detail,"Name: " +data.name,true,)
   addTextToHtmlElement(detail,"Type: "+data.type,true)
   addTextToHtmlElement(detail,"Alignment: "+data.alignment,true)
   addTextToHtmlElement(detail,"Size: "+data.size,true)
   addTextToHtmlElement(detail,"Exp: "+data.xp,true)   
   addTextToHtmlElement(detail,"Difficulty: "+data.challenge_rating,true)  
   details.appendChild(detail);


}
function addTextToHtmlElement(htmlElement, text, isNewLine = false, className) {
    const span = document.createElement('span');
    span.className += className + " "
    const textNode = document.createTextNode(text);
    span.appendChild(textNode);
    htmlElement.appendChild(span);
    if (isNewLine) {
        const newLine = document.createElement('br');
        htmlElement.appendChild(newLine);
    }
}

function onError(error) {
    console.log(error);
}

// function openLink(htmlElement, text) {
//     const a = document.createElement("a");
//     const textNode = document.createTextNode(text);
//     a.appendChild(textNode);
//     a.href = text
//     htmlElement.appendChild(a);
// }

function fetchNewData(url){
    fetch(url)
    .then((response) => response.json())
    .then(onDetails)
    .then(removeDetails)
    .catch(onError);
}

function removeDetails() {
    
    let list =  document.getElementById("detail-list")
    list.removeChild(list.childNodes[0])
}