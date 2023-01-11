const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let char = 0;

const updateCounter = () => {

    // following code will give you the count of the characters entered
    userChar = charVal.value.length;
    
    // here the count will be added as we add the text
    totalCount.innerText = userChar;
    
    // this will give you a remaining count i.e we have set the limit to 150 means (150 - Entered count of charcters)
    remainingCount.innerText = 150 - userChar;
};

charVal.addEventListener("keyup", () => updateCounter());


// Copy the text
 const copyText = () => {
    charVal.select();                      // for laptop
    charVal.setSelectionRange(0, 9999);    // for mobile

    // very important- Copy to Clipboard opton- you will get from this code
    navigator.clipboard.writeText(charVal.value);
 };