
/*
  Fundamentals Section:

  You may use any ES6+ features you like (or none at all).
*/



/*
  1: Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
    - Not all values in the array are known to be numbers.

    Examples
    minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

    minMax([2334454, 5]) ➞ [5, 2334454]

    minMax([1]) ➞ [1, 1]
*/

function minMax (values) {
  // create empty result array
  let result = []

  // check if values array is empty
  if (values.length === 0) return values

  // check if values array have one element
  if (values.length === 1 && typeof(values[0]) === 'number') {
    result.push(values[0], values[0])
    console.log(result)
    return result
  }

  // keep track of min and max values at each iteration
  let minNum = 0
  let maxNum = 0

  if (typeof(values[0]) === 'number') {
    minNum = values[0] 
    maxNum = values[0] 
  }

  // select the minimum from both numbers
  for (let element of values) {
    if (typeof(element) === 'number') {
      minNum = Math.min(minNum, element)
      maxNum = Math.max(maxNum, element)
    }
  }

  result.push(minNum, maxNum) 
  return result


}

console.log(minMax([1, 2, 3, 4, 5]))



/*
  2. Sorting Objects
  Create a function that takes an array of objects and a string field name, and returns the array of objects sorted in ascending order by the field name.

  Example:
  sortObjects[{ text: 'Kim', value: '1'}, { text: 'John', value: 3}, { text: 'Sally', value: 2}], 'value') 
    ➞ [{ text: 'Kim', value: '1'}, { text: 'Sally', value: 2}, { text: 'John', value: 3}]
*/

function sortObjects (values, sortBy) {
  // sorts from low to high
  const sorted = function(a, b)  {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  }
  return values.sort(sorted)
}

let input = [{ text: 'Kim', value: '1'}, { text: 'John', value: 3}, { text: 'Sally', value: 2}]
console.log(sortObjects(input, 'value'))

// I referenced sort() section on MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort







