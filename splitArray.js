/**
  * This prototype can split a array in equal parts
  *
  * @param { Number } n - the length for a parts
  *
  * if the array is lower than n
  * @returns { Array } Array - the array of the beginning
  *
  * else
  * @returns { Array } Array - the splited array
  */
function chunk(arr, n) {
  return (arr.length ? [arr.slice(0, n), ...chunk(arr.slice(n), n)] : []);
};

Array.prototype.splitArray = function(n) {
  if (typeof this !== "object" || typeof n !== "number") throw new Error(typeof this !== "object" ? "This prototype is only for Array" : "The arguments for separation must be a number"); 
  return (this.length <= n ? this : chunk(this, n)); 
}; 
