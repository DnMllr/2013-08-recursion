// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var newobj;
  switch (Object.prototype.toString.call(obj))
  {
  	case "[object Array]":
  		newobj = [];
  		for (var i = 0; i < obj.length; i++) {
  			newobj[i] = stringifyJSON(obj[i]);
  		}
  		newobj = "[" + newobj + "]";
  		break;
  	case "[object Object]":
  		newobj = "{";
  		for (var i in obj) {
  			newobj = newobj + stringifyJSON(i) + ":" + stringifyJSON(obj[i]) + ",";
  		}
  		if (newobj.slice(-1) === ",") {newobj = newobj.slice(0,-1)};
  		newobj = newobj + "}";
  		break;
  	case "[object String]":
  		newobj = "\"" + obj + "\"";
  		break;
  	default:
  		newobj = "" + obj;
  }
  return newobj;
};
