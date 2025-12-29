asteroidCollision = asteroids => {
  let stack = []
  for (let a of asteroids) {
    let destroyed = false
    while (stack.length && a < 0 && stack[stack.length - 1] > 0) {
      let top = stack[stack.length - 1]
      if (top < -a) stack.pop()
      else if (top === -a) { stack.pop(); destroyed = true; break }
      else { destroyed = true; break }
    }
    if (!destroyed) stack.push(a)
  }
  return stack
}
