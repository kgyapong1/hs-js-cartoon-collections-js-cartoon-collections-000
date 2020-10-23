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



function findTheCheese(foo) {

  var i;
  var foundCheese;
  
  for (i = 0; i < foo.length; i++) {
  	if(foo[i] === "cheddar") {
    	foundCheese = foo[i];
      break;
    } else if (foo[i] === "gouda") {
    	foundCheese = foo[i];
      break;
    } else if (foo[i] === "camembert") {
    	foundCheese = foo[i];
      break;
    }
  }
  
  return foundCheese
  
}



