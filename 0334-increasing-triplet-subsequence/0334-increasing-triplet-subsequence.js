increasingTriplet = nums => {
  let a = Infinity, b = Infinity
  for (let x of nums) {
    if (x <= a) a = x
    else if (x <= b) b = x
    else return true
  }
  return false
}
