/**
 * 
 * 1. BUATLAH SEBUAH ARRAY BERISI 3 MINUMAN FAVORIT KALIAN, DAN SIMPAN DALAM VARIABLE BERNAMA listMiuman.
 * 2. SETELAH ITU, UBAH 2 ELEMNT PERTAMA MENGGUNAKAN NOTASI KURUNG DAN PENUGASAN.
 * 3. TERAKHIR, TAMBAHHKAN MINUMAN BARU DI DEPAN ARRAY.
 * 
 */

const listMinuman = ["Kopi", "Teh", "Jus Jeruk"]; // Step 1
listMinuman[0] = "Susu"; // Step 2
listMinuman[1] = "Air Putih"; // Step 2
listMinuman.unshift("Es Teh"); // Step 3, -- unshift() untuk menambahkan elemen baru di depan array --
console.log(listMinuman);
