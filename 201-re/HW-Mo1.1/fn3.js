function sameNumbers(numArray1,numArray2){
    const Numbers = []
      
    for (let i = 0; i < numArray1.length; i++) {
      if (!Numbers.includes(numArray1[i])) {
        Numbers.push(numArray1[i])
      }
    }
  
    for (let i = 0; i < numArray2.length; i++) {
      if (!Numbers.includes(numArray2[i])) {
        Numbers.push(numArray2[i])
      }
    }
    return Numbers
      
}

console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8],[1,2,5,8,4,1,5,1,47,2,3,56,5,8]))
