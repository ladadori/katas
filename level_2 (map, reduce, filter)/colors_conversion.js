import chunk from 'lodash/chunk.js';

// BEGIN (write your solution here)
export const rgbToHex = (...rgb) => {
  const hex = rgb.map((number) => number.toString(16).padStart(2, 0)).join('');
  return `#${hex}`;
};

export const hexToRgb = (hex) => {
  const hexNoHash = hex.slice(1);
  const chunks = chunk(hexNoHash, 2);
  const [r, g, b] = chunks;
  const result = {
    r: parseInt(r.join(''), 16),
    g: parseInt(g.join(''), 16),
    b: parseInt(b.join(''), 16)
  };
  return result;
};


// END