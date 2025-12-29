largestAltitude = gain => {
  let alt = 0, maxAlt = 0
  for (let g of gain) {
    alt += g
    if (alt > maxAlt) maxAlt = alt
  }
  return maxAlt
}
