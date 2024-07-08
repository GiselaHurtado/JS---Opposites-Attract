export function isLove(petalsFlower1, petalsFlower2) {
   
    return (petalsFlower1 % 2 === 0 && petalsFlower2 % 2 !== 0) || 
           (petalsFlower1 % 2 !== 0 && petalsFlower2 % 2 === 0);
  }
  
console.log(isLove(1, 4)); 
console.log(isLove(2, 2)); 
console.log(isLove(0, 1));
console.log(isLove(0, 0));