// Fungsi 1: Menghitung jumlah huruf (hanya A-Z, besar dan kecil)
// Spasi dan karakter selain alfabet tidak dihitung
export function hitungHuruf(str) {
  let jumlah = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      jumlah++;
    }
  }
  return jumlah;
}

// Fungsi 2: Menghitung jumlah kata
// Kata didefinisikan sebagai kelompok huruf alfabet yang berurutan
// Spasi dan karakter non-alfabet dianggap sebagai pemisah kata
export function hitungKata(str) {
  const kata = str.match(/[a-zA-Z]+/g);
  return kata ? kata.length : 0;
}
