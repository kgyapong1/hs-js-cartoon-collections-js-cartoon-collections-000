function dwarfName(foo) {

	// Defining variable
	var finalString;
  
  // Loop through the array, assigning/adding each name to finalString
	for(var i=0;i<foo.length;i++){
  	finalString =+ (i+1) + '. ' + foo[i] + ' ';
  }
  
  // Return final string with all names
  return finalString;
  
}

var calls = ["earth", "wind", "fire", "water"];

function planetCalls(foo) {

	// Create storage variables
 	var capsCall;
  var capsArray = [];
  
  // Begin loop
	for(var i=0;i<foo.length;i++) {
    capsCall = foo[i].toUpperCase() + '!';
    capsArray.push(capsCall);
  }
  
  return capsArray;
}

planetCalls(calls);





function longPlaneteerCalls(foo) {

var i;
var result;
  
	for (i = 0; i < foo.length; i++) {
    if(foo[i].length > 4) {
    	result = true
    } else {
    	result = false
    }
  }
  
  return result
}


