const express = require('express');
const { specs, swaggerUi } = require('./swagger.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// =============================================
// Fungsi generate angka dari nama (tanpa library)
// Menghasilkan angka tetap 1-100 berdasarkan nama
// Case-sensitive: "hamid" != "Hamid"
// =============================================
function getAngkaAcak(nama) {
  let hash = 0;
  for (let i = 0; i < nama.length; i++) {
    hash = (hash * 31 + nama.charCodeAt(i)) % 100;
  }
  return (hash % 100) + 1;
}

// =============================================
// TUGAS MANDIRI: Tebak Angka Acak
// =============================================

/**
 * @swagger
 * /:
 *   post:
 *     summary: Tebak angka acak
 *     description: Menebak angka acak yang dihasilkan berdasarkan nama pengguna
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *                 example: Hamid
 *               tebakan:
 *                 type: integer
 *                 example: 24
 *     responses:
 *       200:
 *         description: Hasil tebakan
 */
app.post('/', (req, res) => {
  const { nama, tebakan } = req.body;

  if (!nama || tebakan === undefined) {
    return res.status(400).json({ jawaban: 'Nama dan tebakan harus diisi!' });
  }

  const angkaRahasia = getAngkaAcak(nama);

  if (tebakan === angkaRahasia) {
    return res.status(200).json({ jawaban: `Benar sekali! Tebakannya adalah ${angkaRahasia}.` });
  } else if (tebakan > angkaRahasia) {
    return res.status(200).json({ jawaban: 'Tebakanmu terlalu tinggi!' });
  } else {
    return res.status(200).json({ jawaban: 'Tebakanmu terlalu rendah!' });
  }
});

// =============================================
// JALANKAN SERVER
// =============================================

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
