var theBeatlesPlay = function (musicians, instruments){
  var beatles = [];
  for (let i = 0; i < 4; i++){
    beatles = `${musicians[i]} plays the ${instruments[i]}`;
  }
  return beatles;
}
