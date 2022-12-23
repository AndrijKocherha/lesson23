"use-strict"

let stringOne = '<    вчУсЯ    >';
console.log(stringOne.length);
console.log(stringOne);
let stringTwo = 123;
console.log(stringTwo);
console.log(stringTwo.length);
console.log('просто провіряв в 8 рядку');
let stringOneAndTwoRsut = `${stringOne} ${stringTwo}`;
console.log(stringOneAndTwoRsut);
console.log(stringOneAndTwoRsut.length);

console.log('========================================');

console.log(stringOne[0]);
console.log(stringOne[5]);
console.log(stringOne.toUpperCase());
console.log(stringOne.toLowerCase());

console.log('========================================');

let stringForSearching = "% компю'тер" + "   " + 1;
console.log(stringForSearching);
console.log(stringForSearching.includes("комп"));
console.log(stringForSearching.includes("   "));
console.log(stringForSearching.startsWith("%  к"));
console.log(stringForSearching.endsWith("1"));

console.log('========================================');

let pieceOfSting = "Кусок рядк@";
console.log(pieceOfSting.slice(3, 5));
console.log(pieceOfSting.slice(9, 11));

let cleaning = "#tex#####t mu*****st* be cle#an"
console.log(cleaning);
console.log(cleaning.replace(/[\*\#]/g, ''));
console.log('===================================================');
let numOne = 1.9999999999999;
console.log(numOne);
numOne = Math.floor(numOne);
console.log(numOne);
numOne = 1.0000001;
console.log(numOne);
console.log(Math.ceil(numOne));
numOne = -2.5;
console.log(Math.round(numOne));
console.log(Math.abs(numOne));
console.log("=====================================")
console.log(Math.round(Math.random() * 11));
let rundomNum = Math.round(Math.random() * 5) + 5;
console.log(rundomNum);
let rundomNumtwo = Math.round(Math.random() * 90) + 10;
console.log(rundomNumtwo);
console.log('=========================');
let minMax = Math.min(1, 10, 0.999);
console.log(minMax);

let fontSize = "18.8px";
console.log(parseFloat(fontSize));

let varOne = 30;
let varTwo = "4";
let varThree = "lol";

let varSum = varOne - varTwo;
console.log(varSum);
console.log(typeof varSum);
varSum = varOne + varTwo;
console.log(varSum);
console.log(typeof varSum);
varSum = varOne % varTwo;
console.log(varSum);
let varString = "35";
console.log(+varString);
let number = varOne / 10 + Number(varString) + +"10";
console.log(number);
console.log('=================================');
console.log(varTwo++);
console.log(varTwo);
let varFive = "30";
let sumTwo = varOne >= varTwo;
console.log(sumTwo);
sumTwo = varOne === varFive;
console.log(sumTwo);
sumTwo = varOne !== varFive;
console.log(sumTwo);

varFive = !0;
console.log(Boolean(varFive));
console.log('==================================');
let either = 0 || "L" || "або";
console.log(either);
either = 1 && NaN && "dd";
console.log(either);





let condition = 0 && "" && NaN || varOne > varTwo && "8" === 8 || 10 == "10" && 3 >= 3;
if (condition) {
   console.log("Все дообре");
} else if (6 === "6") {
   console.log('чотири');
} else {
   console.log('Щось пішло не так');
}

let jj = 0 && "" && NaN || varOne > varTwo && "8" == 8;
console.log(jj);


for (let e = 1; e < 11; ++e) {
   if (e == 3) {
      continue
   }
   if (e == 7) {
      break
   }
   console.log(e)
}
console.log('=================================');
FirstFor: for (let e = 1; e < 6; ++e) {
   for (let y = 0; y < 4; y++) {
      if (y == 3) {
         continue FirstFor
      }
      console.log(y);
   }
}
console.log('===================================');
let text = "Привіт друже";
for (let i = 0; i < text.length; i++) {
   console.log(text[i]);
}
console.log('=====================================');
let text2 = "Все добре";
let text3 = "gg"
Something: for (a = 0; a < text3.length; a++) {
   for (u = 0; u < text2.length; u++) {
      //if (u == 4) {
      //   continue Something;
      //}
      console.log(text2[u].toUpperCase());
   }
}

console.log('=====================================');
let y = 0;
while (y < 5) {
   y++
   console.log(y);
}
console.log('============');
for (j = 1; j < 6; j++) {
   console.log(j);
}
console.log('==============');
let f = 1;
do {
   console.log(f);
   f++;
} while (f < 6);
console.log('=====================');


CycleOne: for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++) {
      if (size == 1) {
         break CycleOne;
      }
      console.log(size);
   }
}



