function theBeatlesPlay(musicians, instruments) {
var resultArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var musicianStr = musicians[i];
    var instrumentStr = instruments[i];
    resultArray.push (musicianStr + ' plays ' + instrumentStr);
  }
  
 return resultArray;  
}
theBeatlesPlay('John Lennon', 'guitar');


function johnLennonFacts(facts) {
 var factsArray = [];
  
 var i = 0;

  while (i < facts.length) {
  factsArray.push(facts[i] + '!!!');

  i++;
  }
  
 return factsArray;
}
