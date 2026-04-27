// Memanggil dotenvx dan mengatur opsi quiet untuk menyembunyikan pesan promosi (Tantangan 3)
require('@dotenvx/dotenvx').config({ quiet: true });

async function tampilkanKurs() {
    try {
        // Mengambil URL API dari file .env (Tantangan 1)
        const apiUrl = process.env.BASE_API;
        
        // Memanggil API menggunakan fetch
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Mengambil tanggal hari ini dan memformatnya menjadi bahasa Indonesia
        const tanggal = new Intl.DateTimeFormat('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(new Date());

        // Menggunakan variabel params untuk menyimpan nilai yang diuji
        const params = [25000, 50000, 100000];

        // Looping untuk setiap nilai di dalam params
        params.forEach(nilai => {
            // Mengkonversi nilai IDR ke CNH dan EUR berdasarkan rate dari API
            const cnhValue = nilai * data.idr.cnh; 
            const eurValue = nilai * data.idr.eur; 

            // Memformat nilai Rupiah (Tantangan 2)
            const formatIDR = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0
            }).format(nilai);

            // Memformat nilai CNH agar menampilkan kode "CNH"
            const formatCNH = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'CNH',
                currencyDisplay: 'code'
            }).format(cnhValue);

            // Memformat nilai EUR agar menampilkan simbol "€"
            const formatEUR = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'EUR',
                currencyDisplay: 'symbol'
            }).format(eurValue);

            // Menampilkan output ke console
            console.log(`Kurs ${formatIDR} pada ${tanggal} adalah ${formatCNH} dan ${formatEUR}`);
        });

    } catch (error) {
        console.error("Gagal mengambil data dari API:", error);
    }
}

tampilkanKurs();