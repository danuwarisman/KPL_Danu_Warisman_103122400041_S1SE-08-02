export function pangkat(x, y) {
  let hasil = 1;
  for (let i = 0; i < Math.abs(y); i++) {
    hasil *= x;
  }
  return y < 0 ? 1 / hasil : hasil;
}