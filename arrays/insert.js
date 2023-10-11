
function insertElementAtIndex(array, index, element) {
    // Check if the index is valid
    if (index < 0 || index > array.length) {
      console.error("Invalid index");
      return array;
    }
    // [1, 2, 3, 4, 5];
    // Move elements to make space for the new element

    //loop starting from 5 in every step i-- is decreasing its value until it reaches 0
    //5  i-- = 4 . 4 i-- = 3 , it should run until its value reaches 0 .
    for (let i = array.length-1; i >= index; i--) {
      array[i+1] = array[i];
      console.log(array)
    }
  
    // Insert the new element at the specified index
    array[index] = element;
  
    return array;
  }
  
  // Example usage
  let myArray = [1, 2, 3, 4, 5];
  let newIndex = 2;
  let newElement = 99;
  
  insertElementAtIndex(myArray, newIndex, newElement);
  console.log(myArray); // Output: [1, 2, 99, 3, 4, 5]

/*
 Certainly! Let's break down the code step by step with a simple diagram.


// Move elements to make space for the new element

for (let i = array.length; i > index; i--) {
  array[i] = array[i - 1];
}

// Insert the new element at the specified index

array[index] = element;

Assume we have an array arr = [1, 2, 3, 4, 5] and we want to insert the element 99 at index 2.

Before the insertion:


arr = [1, 2, 3, 4, 5]

Move elements to make space:

The loop starts from the last index of the array (array.length). It iterates backward (i--) until it reaches the specified index (index).
In our case, it starts at index 5 and goes backward until it reaches index 2.
At each step, it shifts the element at the current index to the right by copying it to the next index.

arr = [1, 2, 3, 4, 5, 5]  // After the first iteration
arr = [1, 2, 3, 4, 4, 5]  // After the second iteration
arr = [1, 2, 3, 3, 4, 5]  // After the third iteration
Insert the new element:

Now that we've made space for the new element, we insert it at the specified index (index).


arr = [1, 2, 99, 3, 4, 5]

After the insertion:

arr = [1, 2, 99, 3, 4, 5]

So, in summary, the loop is responsible for shifting elements to the right to make space for the new element
, and once that space is created, we insert the new element at the specified index. The result is an array with
 the new element inserted at the desired position.
*/