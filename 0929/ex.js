let price = new Array (5);
//let price = [];
let i;


for(i = 0; i < 5; i++ ){
    price[i] = parseInt(prompt("가격을 입력하세요. : ", ""));
}


let minBurger = 0;
let mindrink = 0;

 minBurger= price[0];
 mindrink = price[3];


for(i = 0; i< 5; i++){
    if((i < 3) && (minBurger > price[i])) minBurger = price[i];
    if((i > 2) && (mindrink > price[i])) mindrink = price[i];
}


    let sum = Number(minBurger +mindrink - 50);
    document.write("<div id= sum>"+sum+"</div>");

