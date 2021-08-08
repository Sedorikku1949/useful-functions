
function(n) {
  if (typeof this !== "object" || typeof n !== "number") throw new Error(typeof this !== "object" ? "This prototype is only for Array" : "The arguments for separation must be a number"); 
  return (this.length <= n ? this : chunk(this, n)); 
}; 
