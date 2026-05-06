import { hitungHuruf, hitungKata } from './index.js';

const contoh = "Hello World! 12345 @#$%"; // Contoh input dengan berbagai karakter

console.log("Input:", contoh);
console.log("Jumlah huruf:", hitungHuruf(contoh)); // H,e,l,l,o,W,o,r,l,d = 10
console.log("Jumlah kata:", hitungKata(contoh));   // Hello, World = 2
