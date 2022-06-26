var isValid = function (aa) {
  let charArr = aa.split('');
  let openSymbolArr = [];
  for (let i = 0; i < charArr.length; i++) {
    // Opening symbols
    if (charArr[i] === '(' || charArr[i] === '{' || charArr[i] === '[') {
      openSymbolArr.push(charArr[i]);
    }
    // Closing symbols 
    else if (charArr[i] === ')' || charArr[i] === '}' || charArr[i] === ']') {
      let closeSymbol = charArr[i];
      let openSymbolFromLast = openSymbolArr[openSymbolArr.length - 1];
      if (closeSymbol === ')' && openSymbolFromLast === '(' ) {
        openSymbolArr.pop();
      } else if (closeSymbol === '}' && openSymbolFromLast === '{') {
        openSymbolArr.pop();
      } else if (closeSymbol === ']' && openSymbolFromLast === '[') {
        openSymbolArr.pop();
      }else{
        return false
      }
    }
  }
  return openSymbolArr.length == 0;
};
console.log(isValid('()'));
console.log(isValid('([{}])'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
console.log(isValid("]"));

