function theBeatlesPlay(musicians, instruments){
  var i
  var result = []
  for (i = 0; i < 4; i++){
    result[i]  =  musicians[i] + " plays " + instruments[i]
    
  }
  return result
}

function johnLennonFacts(facts){
  var i
  var result = []
 while (i<facts.length){
   result[i] = facts [i] + "!!!"
 } 
 return result
}