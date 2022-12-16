"use strict";

function merge(arr1, arr2) {
  let result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  if (arr1[pointer1] === undefined && arr2[pointer2] === undefined) return [];

  while (arr1[pointer1] !== undefined || arr2[pointer2] !== undefined) {
    // If one array is empty while other array still has numbers
    // Want to run loop until both arrays are empty (undefined)
    if (arr1[pointer1] === undefined) {
      result.push(arr2[pointer2]);
      pointer2++;
      continue;
    }

    if (arr2[pointer2] === undefined) {
      result.push(arr1[pointer1]);
      pointer1++;
      continue;
    }

    const isArr1 = arr1[pointer1] <= arr2[pointer2];
    if (isArr1) {
      result.push(arr1[pointer1]);
      pointer1++;
    } else {
      result.push(arr2[pointer2]);
      pointer2++;
    }
  }
  return result;
}

function mergeSort(arr) {
  // Three base cases: input can be empty array, one item or two items

  /** Helper function which accepts array and splits in half returning two arrays */
  function arraySplitter(arr) {
    const half = Math.floor(arr.length / 2);
    return [arr.slice(0, half), arr.slice(half)];
  }

  function _mergeRecursively(arr) {
    const splitTuple = arraySplitter(arr);
    if (splitTuple[0].length > 1) {
      splitTuple[0] = _mergeRecursively(splitTuple[0]);
    }
    if (splitTuple[1].length > 1) {
      splitTuple[1] = _mergeRecursively(splitTuple[1]);
    }

    return merge(splitTuple[0], splitTuple[1]);
  }

  return _mergeRecursively(arr);
}

module.exports = { merge, mergeSort };
