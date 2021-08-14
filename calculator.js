/** 
  * This function can calculate a string !
  * @params { String } str - The calcul 
  *
  * @returns { Number | String } the result 
  * 
  * /!\ WARNINGS
  * This function use the eval method ! 
  * DON'T USE THIS FUNCTION if someone can modify the code with any method !!
  */

function calculate(str){
  const calc = (str.split("").filter(e => e.match(/[0-9]|\+|\-|\%|\÷|\×|\x|\/|\*|\(|\)|\[|\]/g)).join("")).replace(/\x|\×/g, "*").replace(/\÷/g, "/");
  let res = false; try { res = eval(calc) || "ERROR" } catch (err) { res = "ERROR" };
  return res;
};
