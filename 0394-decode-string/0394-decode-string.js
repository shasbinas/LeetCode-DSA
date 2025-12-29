decodeString = s => {
  let stack = [], num = 0, str = ""
  for (let ch of s) {
    if (!isNaN(ch)) num = num * 10 + (+ch)
    else if (ch === "[") {
      stack.push([str, num])
      str = ""; num = 0
    }
    else if (ch === "]") {
      let [prev, count] = stack.pop()
      str = prev + str.repeat(count)
    }
    else str += ch
  }
  return str
}
