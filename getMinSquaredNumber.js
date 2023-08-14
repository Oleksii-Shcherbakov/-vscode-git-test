// getMinSquaredNumber.js

export default function getMinSquaredNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null;
    }
  
    const minAbsValue = Math.min(...arr.map(num => Math.abs(num)));
    return minAbsValue ** 2;
  }
  