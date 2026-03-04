const kotaDikunjungi = ["Wonosobo", "Bandung", "Yogyakarta", "Malang"];

kotaDikunjungi.unshift("Semarang");
kotaDikunjungi.push("Bogor");
kotaDikunjungi.pop() // Hapus array dari belakang
//kotaDikunjungi.reverse();
//kotaDikunjungi.splice(1,2); // Hapus array by iindex, -- splice(indexAwal, jumlahArrayYangDihapus) --
kotaDikunjungi[3] = "KING"; // Ngubah Nama by index tertentu
console.log(kotaDikunjungi);