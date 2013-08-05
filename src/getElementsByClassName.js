// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var arr = [];
  var node = document.body;
  var recurse = function(hello){
  	for (var i = 0 ; i < hello.childNodes.length ; i++) {
  		if (hello.childNodes[i].nodeName !== "#text") {
	  		var hello2 = hello.childNodes[i];
	  		if (hello2.classList.contains(className)) {
	  			arr.push(hello2);
	  		}
	  		if (hello2.childNodes.length > 0) {
	  			recurse(hello2);
	  		}
  		}
  	}
  }
  recurse(node);
  return arr;
};
