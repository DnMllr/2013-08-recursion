// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, node, results) {
  // your code here
  results = results || [];
  node = node || document.body;
  if(node.nodeName !== '#text' && node.classList.contains(className)){
    results.push(node);
  }
  for(var i = 0; i <node.childNodes.length; i++) {
    getElementsByClassName(className, node.childNodes[i], results);
  }
  return results;
};
