export const random = () => ( {r: _randomColor(), g: _randomColor(), b: _randomColor()});

function _randomColor() {
    const MIN = 0;
    const MAX = 255;
    return _random(MIN,MAX);
}

function _random(min,max) {
    return Math.floor(Math.random() * max) + min;
}

export const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export const distance = (c1, c2) => {
  const d=Math.sqrt(Math.pow(c2.r-c1.r,2)+Math.pow(c2.g-c1.g,2)+Math.pow(c2.b-c1.b,2));
  const p = (d/Math.sqrt(Math.pow(255,2)+Math.pow(255,2)+Math.pow(255,2)))*100;
  return p;
}