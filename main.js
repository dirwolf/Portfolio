const dynamicContent = document.getElementById("dynamic-text")
console.log(dynamicContent)

const phrases = ["Software Engineer..","Mentor..","Human Being"]
let letterIndex=0;
function printletters(phrase){
    for(let index =0;index <phrase.length;index++){
        console.log(phrase.charAt(index));
        // we want to add one at a time

    }
    if(letterIndex <phrase.length){
        dynamicContent.textContent+=phrase.charAt(letterIndex);
        letterIndex+=1;
        dynamicContent.textContent= phrase;
        setTimeout(() => {
            printletters(phrase)
        }, 300);
    }
   
}

printletters(phrases[0]) 