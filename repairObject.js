  /**
   * This function can repair a object from a model
   * 
   * @param {Object} data - The old object you ant to repair
   * @param {Object} model - the model for the reparation
   * 
   * WARNING
   * 
   * if you give a key in the old data that is not in the model, the key is not set in the new data !
   *
   * SECOND WARNING
   * 
   * If you have a big object, the operation may be longer, you can update the function to a async function with a promise !
   * 
   */

// this function is to simplify the code below, we can check if the data is an objet easily with that.
function isObject(data) { return typeof data == "object" && !Array.isArray(data) };

// for have a good type, the array and Object type is the same with typeof !
function getType(data) {
  if (typeof data == "object") return Array.isArray(data) ? "array":"object";
  else return typeof data;
}

module.exports = function repairObject(data, model, first = true) {
  if ((!isObject(data) || !isObject(model)) && first) throw new Error("Invalid values was provided !");
  const newData = {};
  const entries = Object.entries(model);
  Object.entries(data).forEach((e) => {
    const modelData = entries.find(m => m[0] == e[0]);
    if (entries.some((m) => m[0] == e[0])) { newData[e[0]] = (modelData && getType(e[1]) !== getType(modelData[1]) ? modelData[1] : e[1]) }; 
    if (getType(e[0]) == "object" && Object.keys(model).includes(e[0])) newData[e] = repairObject(e[1], model[e[0]], false);
  });
  entries.forEach((etr) => {
    if (Object.keys(newData).some(a => a == etr[0])) return;
    else { newData[etr[0]] = etr[1]; }
  })

  return newData;
}
