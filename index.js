function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var myArray = ['cat', 'dog', 'gerbil'];
  myArray.forEach(callback);
    return myArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
