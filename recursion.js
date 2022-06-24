/** product: calculate the product of an array of numbers. */

function product(nums) {
  let total = 1;
    for(let i = 0; i < nums.length; i++) {
      if(Array.isArray(nums[i])) {
        product(nums[i])
      }
      else {
       total = nums[i] * total
       if(nums.length -1 === i) {
         return total
       }
      }
    }

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  
  if(words.length === 1) {
    return words[0].length;
  }

  if(words[0].length === words[1].length) {
    return longest(words.slice(1));
  }
  else if(words[0].length < words[1].length) {
    return longest(words.slice(1));
  }
  else if(words[0].length > words[1].length) {
    let frontArr = words.slice(0,1);
    let lastArr = words.slice(2);
    let slicedArr = frontArr.concat(lastArr);
    return longest(slicedArr);
  }
  
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, other="") {

  if(idx === str.length) {
    return other;
  }

  if(idx % 2 === 0) {
    other = other + str[idx]
    idx += 1;
    return everyOther(str, idx, other);
  }
  else {
    idx += 1;
    return everyOther(str, idx, other)
  }
}
/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=str.length - 1, reversed="") {

  if(idx === -1) {
    if(str === reversed) {
      return true;
    }
    else {
      return false;
    }
  }
  reversed = reversed + str[idx];
  idx -= 1;

  return isPalindrome(str, idx, reversed)


}
/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {

  if(arr[idx] === val) return idx;

  if(arr.length - 1 === idx) return -1;

  idx += 1;
  return findIndex(arr, val, idx);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str,  idx=str.length - 1, reversed="") {

  if(idx === -1) return reversed;

  reversed = reversed + str[idx];
  idx -= 1;

  return revString(str, idx, reversed)
  


}
//!-------------------------------------------------------------------------------

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let strArr = [];

  for(let item in obj) {
    if(typeof obj[item] === 'string') {
      strArr.push(obj[item]);
    }
  }
  // console.log(strArr)
  return strArr;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
