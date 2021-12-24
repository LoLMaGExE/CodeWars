function isValidWalk(walk) {
    let we = 0;
    let ns = 0;
    let count = 0;
    
    for(let i = 0; i < walk.length; i++) {
      let direction = walk[i];
      
      we += (direction === 'w') ? 1 : (direction === 'e') ? -1 : 0;
      ns += (direction === 'n') ? 1 : (direction === 's') ? -1 : 0;
      
      count++;
    }
    
    return (we == 0 && ns == 0 && count <= 10 && count > 3);
  }