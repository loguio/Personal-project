//initialising a variable name gold 
var gold = 0;
var goldClick = 1;
var priceBag = 10;
var priceAutoClick = 10;
var boolAutoClick = false;
var goldAutoClick = 1;
var nbClickbaguette = 0;
var modulo10 = 1;
//creation of increment function
function increment() {
    gold = gold + goldClick;
    document.getElementById("counting").innerText = "💲 : " + gold;
    console.log("BOUTON APPUYÉ");
}

function buyBaguette() {
    if (gold >= priceBag) {
        if (nbClickbaguette % 10 == 0) {
            goldClick = goldClick * 2;
            modulo10++
        } else {
            goldClick += modulo10;
        }
        gold = gold - priceBag;
        priceBag = Math.round(priceBag + 55 / 100 * priceBag);
        document.getElementById("price").innerText = "Price : " + priceBag;
        document.getElementById("counting").innerText = "💲 : " + gold;
        nbClickbaguette++

    }
}
var intervalId = null;

function autoClicker() {
    if (gold >= priceAutoClick && boolAutoClick == false) {
        gold = gold - priceAutoClick;
        priceAutoClick = Math.round(priceAutoClick + 70 / 100 * priceAutoClick);
        document.getElementById("priceAutoClick").innerText = "Price : " + priceAutoClick;
        document.getElementById("counting").innerText = "💲 : " + gold;
        boolAutoClick = true;
        intervalId = setInterval(autoClick, 1000);
    } else if (gold >= priceAutoClick && boolAutoClick == true) {
        gold = gold - priceAutoClick;
        priceAutoClick = Math.round(priceAutoClick + 70 / 100 * priceAutoClick);
        document.getElementById("priceAutoClick").innerText = "Price : " + priceAutoClick;
        document.getElementById("counting").innerText = "💲 : " + gold;
        goldAutoClick++
        clearInterval(intervalId);
        intervalId = setInterval(autoClick, 1000);
    }
}

function autoClick() {
    gold = gold + goldAutoClick;
    document.getElementById("counting").innerText = "💲 : " + gold;
    console.log(" AUTOCLICK ACTIVÉ");

}