function isNumber(s){
  return /^[+-]?((\d+\.\d*)|(\.\d+)|(\d+))(?:[eE][+-]?\d+)?$/.test(s);
}