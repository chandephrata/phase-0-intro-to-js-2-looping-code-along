const gifts = ["teddy bear", "drone", "doll"]; // the initialization moves OUTSIDE the body of the loop!

function wrapGifts(gifts) {  
  for (let i = 0; i < gifts.length; i++) {       // the iteration moves INSIDE the body of the loop!
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]

const names=[]

function writeCards(names,birthday){
  let newArray =[...names];
  for (let i = 0; i < names.length; i++){
   newArray.push(`Thank you , ${names[i]}, for the wonderful ${birthday} gifts!`);
  }
  return newArray;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "suprise");

 function countDown(num){
     let number = num;
     while (number >= 0){
         console.log(number);
         number --;
     }
 }



 
