const hariIni = new Date();

const formatTanggal = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    year: 'numeric',  
    month: 'long',    
    day: 'numeric' 
});

console.log(formatTanggal.format(hariIni));