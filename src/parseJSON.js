// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here
  var openTriggersBroad = ["[", "{", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '"'];
  var openTriggers = ["[", "{", '"'];
  var closetriggers = ["}", "]"];

  var closer = function(input){
    var result = '';
    switch (input) {
      case "[":
        result = "]";
        break;
      case "{":
        result = "}";
        break;
      case "'":
        result = "'";
        break;
      case '"':
        result = '"';
        break;
    }
    return result;
  };

  var listener = function(index, target) {
    letter = json.charAt(index);
    target = target || openTriggers;
    if (letter === target){
      runner()
    } else {
      
    }
  }

  var runner = function(json, target){

  }
/*  var letter = '';
  var index = 0;
  var source = json;
  var newstring = '';
  var opencharacters = ["[", "{"];
  var closecharacters = ["]", "{"];

  var next = function(c){
    index += 1;
    letter = source[index];
  };

  while (index < json.length){
    letter = json.charAt(i);
    if (isNaN(letter)) {
      switch (letter) {
        case "[":
        break;
        case "{":
        break;
        case '"':
        break;
        default:
          if ((letter >= '0' && letter <= '9') || (letter === '-')) {

          } else {

          }
      }
    }
  } */
};
