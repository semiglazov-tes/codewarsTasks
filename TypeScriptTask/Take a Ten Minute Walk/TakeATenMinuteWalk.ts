"use strict"
export function isValidWalk(walk: string[]) {
    var sideOfTheWordQuantityMap= new Map<string, number>();
  
    walk.forEach(value=>{
    let sideOfTheWordArr: string [] = walk.filter(item=>item==value);
    let resultArrLength: number = sideOfTheWordArr.length;
    sideOfTheWordQuantityMap.set(value,resultArrLength);
      });
  
  if(sideOfTheWordQuantityMap.get("n")===sideOfTheWordQuantityMap.get("s") 
     && sideOfTheWordQuantityMap.get("e")===sideOfTheWordQuantityMap.get("w") &&
    walk.length==10){
    return true;
    }
  else{
    return false;
    } 
}

   



