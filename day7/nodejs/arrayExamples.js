function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

function isEven(element, index, array) {
  
  if(element % 2 === 0)
  {
      return element > 1
  }
  else
  {
      return false;
  }
}

var noPrime = [4, 6, 8, 12];
var prime = [4, 6, 8, 12, 13];
console.log("Start findIndex Example:  ");
console.log(noPrime.findIndex(isPrime)); // -1, not found
console.log(prime.findIndex(isPrime)); // 4

var evenAt2 = [3, 5, 8, 13];
var evenAt0 = [2, 6, 8, 12, 13]; 
var noEven = [19, 5, 7, 1, 13]; 
console.log(evenAt2.findIndex(isEven)); // 2
console.log(evenAt0.findIndex(isEven)); // 0
console.log(noEven.findIndex(isEven)); // -1
console.log("End findIndex Example:  ");


function logOddEven(element, index, array) {
  
  if(element % 2 === 0)
  {
      console.log("even");
  }
  else
  {
      console.log("odd");
  }
}

console.log("Start forEach Example:  ");
(evenAt2.forEach(logOddEven)); // odd, odd, even, odd
(evenAt0.forEach(logOddEven)); // even, even, even, even, odd
(noEven.forEach(logOddEven)); // odd, odd, odd, odd, odd 
console.log("End forEach Example:  ");
console.log(noPrime.includes(99));
console.log(noPrime.includes(12));
console.log("End includes Example:  ");


console.log("Start indexOf Example:  ");
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices); // [0, 2, 4]


function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach'); 
// New veggies collection is : potato,tomato,chillies,green-papper,spinach
updateVegetablesCollection(veggies, 'spinach'); 
// spinach already exists in the veggies collection.
console.log("End indexOf Example:  ");


console.log("Start join Example:  ");
console.log(veggies.join());
console.log(veggies.join(', '));
console.log(veggies.join(' + '));
console.log("End join Example:  ");
