module.exports = function check(str, bracketsConfig) {
  const OPEN_BRS = []
  const PAIR_BRS = {}
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    let key = bracketsConfig[i][1]
    let value = bracketsConfig[i][0]
    OPEN_BRS.push(value)
    PAIR_BRS[key] = value
  }

  let stack = []

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i]
    let topEl = stack[stack.length - 1]

    if (OPEN_BRS.includes(currentSymbol)) {
      (topEl === currentSymbol) && (PAIR_BRS[currentSymbol] === currentSymbol) ? stack.pop() : stack.push(currentSymbol)
    }
    else {
      if (stack.length === 0) {
        return false
      }
      if (PAIR_BRS[currentSymbol] === topEl) {
        stack.pop()
      }
      else {
        return false
      }
    }
  }
  return stack.length == 0
}
