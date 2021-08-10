/**
  * Return a list of balise with the content
  *
  * @param { String } str - the string where we need to found balise
  * @param { Array } balise - The list of all needed balise
  * @param { String } prefix - optional / the prefix of the balise
  *
  * @returns { Array }
  */

function getBalise(str, balise, prefix = "-"){
  if (typeof str !== "string" || !Array.isArray(balise) || typeof prefix !== "string") return null;
  return str.split(prefix).filter(e => balise.some(b => e.startsWith(b))).map(e => ({ balise: e.split(/\s+/g)[0], content: e.slice(e.split(/\s+/g)[0].length).trim()}))
};
