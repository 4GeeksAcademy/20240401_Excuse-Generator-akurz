window.onload = function() {
let who = ["My friend", "Monkey D. Luffy", "Frieza", "A random QTE"];
let act = ["stole", "gum-gum pistoled", "destroyed", "bugged out"];
let itm = ["my computer", "my dinner", "my home planet", "my items"];
let dyt = ["yesterday night", "during our trip to Marineford", "while I was on Namek", "during Y2K"];

function randomElementSelector (arrayName, arrayLength) {
    let random = Math.floor(Math.random() * arrayLength);
    let randomElement = arrayName[random];
    return randomElement;    
}

let whoRand = randomElementSelector(who,who.length);
let actRand = randomElementSelector(act,act.length);
let itmRand = randomElementSelector(itm,itm.length);
let dytRand = randomElementSelector(dyt,dyt.length);

let excuse = `${whoRand} ${actRand} ${itmRand} ${dytRand}!`;

const htmlRef = document.querySelector(".excuse");
htmlRef.innerHTML = excuse;


console.log("[Fortnite default dances]");
console.log(htmlRef);
};
