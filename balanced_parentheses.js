function balanceParenthesis(str) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    var l = stack.length;
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    }
    else if (l >= 1 && str[i] === ')' && stack[l - 1] === '(') {
      stack.pop();
    }
    else if (l >= 1 && str[i] === ']' && stack[l - 1] === '[') {
      stack.pop();
    }
    else if (l >= 1 && str[i] === '}' && stack[l - 1] === '{') {
      stack.pop();
    }
    else {
      return false;
    }
  }
  if (stack.length === 0) {
    return true
  }
  else {
    return false
  }
}

console.log(balanceParenthesis('[()]{}{[()()]'))