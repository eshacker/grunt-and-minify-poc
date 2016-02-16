'use strict';

var sum = function(x, y){
  return x+y;
};

var add2ToIt = sum.bind(null, 2);


var getQuoteOfTheDay = function(){
  alert('Things are what they are. Keep moving. And 2 + 4 is ' + add2ToIt(4));
};
