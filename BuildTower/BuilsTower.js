

function towerBuilder(nFloors) {
    if (nFloors == 1)
      return ['*']
    
    let countStars = 1;
    let countBlanks = nFloors - 1
    
    let result = [];
   
     const getCountSymbols = (symbol ,number) => {
      let starsString = '';
      for(let i = 0; i < number; i++) {
        starsString += symbol;
      }
      return starsString;
    }
    
    for(let i =0; i < nFloors; i++) {
      let starsLine = getCountSymbols("*", countStars)
      let blankLine = getCountSymbols(" ", countBlanks)
      
      result.push(blankLine + starsLine + blankLine)
      
      countStars +=2;
      countBlanks -=1;
        
    }
    return result
    
  }

let res =  towerBuilder(3)
console.log(res);