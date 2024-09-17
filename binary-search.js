
function linearSearch (arr, target) {
// Can you solve this in one line?
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    return i
  }
}
return -1
};

function binarySearch(arr, target) {


let low = 0;
let high = arr.length - 1;

while (low <= high) {
    let mid = Math.floor((high + low) / 2); 

if (arr[mid] === target) {
 
  return mid;

  } else if (arr[mid] < target) {
  low = mid +1

} else {
  high = mid -1
}
}

return -1
}
 


module.exports = [linearSearch, binarySearch]