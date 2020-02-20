var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element);
  return array
}

function addElementToEndOfArray (array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray  (array, element) {
   array.push(element);
   return array
}

accessElementInArray = (array, index) => {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
 array.shift(0)
  return array
}
  
function removeElementFromBeginningOfArray (array) {
<<<<<<< HEAD
  return array.slice(1)
=======
  array.slice(0)
  return array
>>>>>>> 9f0372d0ad23a31d1b8a46c992a8e5074aa668b7
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array
}

function removeElementFromEndOfArray  (array) {
  return array.slice(0, array.length - 1)
}