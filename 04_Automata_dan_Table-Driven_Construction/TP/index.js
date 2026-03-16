const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const hkElement = document.getElementById("hk");
const hbElement = document.getElementById("hb");

function updateHitungan() {
    let teks = editorElement.value;
    charCountElement.textContent = teks.length;

    let jmlKecil = 0;
    let jmlBesar = 0;

    // Looping ngecek satu satu huruf nya
    for (let i = 0; i < teks.length; i++) {
        if (teks[i] >= 'a' && teks[i] <= 'z') {
            jmlKecil++;
        } else if (teks[i] >= 'A' && teks[i] <= 'Z') {
            jmlBesar++;
        }
    }

    hkElement.textContent = jmlKecil;
    hbElement.textContent = jmlBesar;
}

// Update pas lagi ngetik
editorElement.addEventListener("input", updateHitungan);

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

btnBesar.addEventListener("click", function() {
    editorElement.value = editorElement.value.toUpperCase();
    updateHitungan(); // Biar angkanya langsung nyesuaiin pas diklik
});

btnKecil.addEventListener("click", function() {
    editorElement.value = editorElement.value.toLowerCase();
    updateHitungan();
});

// mode gelap terang
const tombolTerang = document.getElementById("btn-terang");
const tombolGelap = document.getElementById("btn-gelap");

tombolGelap.addEventListener("click", function() {
    document.body.classList.add("tema-gelap");
});

tombolTerang.addEventListener("click", function() {
    document.body.classList.remove("tema-gelap");
});