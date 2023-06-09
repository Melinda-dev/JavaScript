// //step 1: Build an array with the following numbers.
function init_array(){
  const original_points = [11,  5,  8,  3,  25,  16,  31,  45,  14,  20];
  document.getElementById("demo").innerHTML = original_points;
  console.log("The original array is ")
  console.log(original_points)

}


// // step 2: Sort the array in ascending order
function compareNumbers(a, b) {
  return a - b;
}


function sort_ascending(){
  const original_points = [11,  5,  8,  3,  25,  16,  31,  45,  14,  20];
  console.log("The original array is ")
  console.log(original_points)
  original_points.sort(compareNumbers);
  document.getElementById("demo").innerHTML = original_points;
  console.log("The ascending array is ")
  console.log(original_points)


}
// step 3: Insert three numbers 19, 23, 30 into the sorted array in step 2, and keep the new array sorted in ascending order. You could decide where to insert.


function insert_ascending_array(){

  const appending_points = [19, 23, 30];
  const original_points = [11,  5,  8,  3,  25,  16,  31,  45,  14,  20];
  const new_points = original_points.concat(appending_points);

  new_points.sort(compareNumbers);
  document.getElementById("demo").innerHTML = new_points;
  console.log("insert arrary is : " , appending_points)
  console.log("original_points is : " , original_points)
  console.log("new array sorted in ascending order is : " , new_points)
  return new_points

}


// step 4: Remove two numbers 8, 31 from the array generated in step 3, and keep the new array sorted in ascending order


function remove_ascending_array(){
  const delete_value = [8,31];
  // const original_points = [11,  5,  8,  3,  25,  16,  31,  45,  14,  20];
  const appending_points = [19, 23, 30];
  const original_points = [11,  5,  8,  3,  25,  16,  31,  45,  14,  20];
  const new_points = original_points.concat(appending_points);

  new_points.sort(compareNumbers);
  removed_points = new_points.filter((item) => !delete_value.includes(item));
  document.getElementById("demo").innerHTML = removed_points
  removed_points.sort(compareNumbers)
  document.getElementById("demo").innerHTML = removed_points;
  console.log("remove arrary is : " , delete_value)
  console.log("original_points is : " , new_points)
  console.log("new array sorted in ascending order is : " , removed_points)

}



// step 5: Create a JavaScript function called “sequentialSearch”
function sequentialSearch(original_points, value){

  for (var i = 0; i < original_points.length; i++) {  // loop until last index or until item is found
      if (original_points[i] == value) {
          return 'target element is found';
      }
  }
      return 'target element is not found';
}
// run the algorithm

function test_sequentialSearch(){
  //console.log(sequentialSearch([11,  5,  8,  3,  25,  16,  31,  45,  14,  20], 5))//element present in array
  console.log(sequentialSearch([11,  5,  8,  3,  25,  16,  31,  45,  14,  20], 50))//element not present in array

}




//step 6: Create a JavaScript function called “binarySearch”
//note that list must be sorted for this function to work


function binarySearch(arr, val) {
  let start = 0;//left endpoint
  let end = arr.length - 1;//right endpoint

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {//if in lower half
      end = mid - 1;
    } else {//if in higher half
      start = mid + 1;
    }
  }
  //console.log("the target value is not in the array");
  return -1;
}

//run the algorithm

function test_binarySearch(){
  const array = [3, 5, 8, 11, 14, 16, 20, 25, 31, 45];
  // console.log(binarySearch(array, 14))//element present in the middle poistion of array
  // console.log(binarySearch(array, 3))
  // console.log(binarySearch(array, 31))
  console.log(binarySearch(array, 18))//element not present in array

}

 // console.log(binarySearch([1,2,3,4,5,6,7,8,9], 5))
 // console.log(binarySearch([1,2,3,4,5,6,7,8,9], 1))
 // console.log(binarySearch([1,2,3,4,5,6,7,8,9], 8))
 // console.log(binarySearch([1,2,3,4,5,6,7,8,9], 10))
