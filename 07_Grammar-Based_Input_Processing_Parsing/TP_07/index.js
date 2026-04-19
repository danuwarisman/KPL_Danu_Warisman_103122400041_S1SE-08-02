function toNumberArray(number) {
  let arr;

  if (typeof number === "string") {
    arr = number.split(",");
  } else {
    arr = number;
  }

  let hasil = [];

  for (let i = 0; i < arr.length; i++) {
    let bersih = String(arr[i]).trim();
    let angka = parseFloat(bersih);

    if (!isNaN(angka)) {
      hasil.push(angka);
    }
  }

  return hasil;
}

console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]