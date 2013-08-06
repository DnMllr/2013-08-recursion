// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var newobj;
  var type = Object.prototype.toString.call(obj);
  switch (type){
    case "[object String]":
      newobj = '"' + obj + '"';
      break;
    case "[object Array]":
      newobj = '[' + _.map(obj, stringifyJSON).join(',') + ']';
      break;
    case "[object Object]":
      newobj = [];
      for (var i in obj) {
        if (obj[i] !== undefined && typeof obj[i] !== "function") {
          newobj.push(stringifyJSON(i) + ":" + stringifyJSON(obj[i]));
        }
      }
      newobj = "{" + newobj + "}";
      break;
    default:
      newobj = '' + obj;
  }
  return newobj;
};