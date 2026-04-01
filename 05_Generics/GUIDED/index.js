/**
 * @param {String} deret - deret angka yang ingin dihitung jumlahnya
 * @returns {String} 
 * 
 **/
function fizzBuzz(deret) {
  let hasil = "";

  let deretLarik = deret.split(' ');

  for (const elemen of deretLarik) {
    const n = +elemen;
    let fz = "";

    // Fizz
    if (n % 3 === 0) {
      fz += "Fizz";
    }

    // Buzz
    if (n % 5 === 0) {
      fz += "Buzz";
    }

    if (fz != '') {
      hasil += `${fz} `;
      continue;
    }

    hasil += `${n} `;
  }

  return hasil;
}