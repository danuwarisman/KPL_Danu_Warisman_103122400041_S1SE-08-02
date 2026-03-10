const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");

editorElement.addEventListener("input", (event) => {
    const textLength = event.target.value.length;
    charCountElement.textContent = textLength;
});

//Ambil tombol-tombol
const btnBesar= document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");
const btnParagraf = document.getElementById("huruf-paragraf");

btnBesar.addEventListener("click", function() {
   editorElement.value = editorElement.value.toUpperCase();
});

btnKecil.addEventListener("click", function() {
    editorElement.value = editorElement.value.toLowerCase();
});

btnParagraf.addEventListener("click", function() {
    let teksSkrg = editorElement.value;
    
    if(teksSkrg.length > 0){
        //ambil huruf pertama digedein, sisanya dikecilin
        let awal = teksSkrg[0].toUpperCase();
        let sisa = teksSkrg.substring(1).toLowerCase();
        
        editorElement.value = awal + sisa;
    }
});