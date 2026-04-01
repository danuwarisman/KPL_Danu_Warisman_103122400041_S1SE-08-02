
/**
 * @param {string} str - Teks input
 * @param {string} mode - "semua" atau "huruf"
 */

function hitung(str, mode) {
  let total = 0;
  
  for (const c of str) {
    if (mode === "huruf" && c === ' ') {
      continue;
    }
        total++;
  }
  
  return total;
}
module.exports = hitung;