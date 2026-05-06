const express = require('express');
const { specs, swaggerUi } = require('./swagger.js');

const app = express();
const PORT = 3000;

// Data menu makanan
const menuData = {
  bakmi: {
    "bakmi rice-rice": 25000,
    "bakmi komplet (bakso panggang)": 35000,
  },
  rames: {
    "nasi rames biasa": 15000,
    "nasi rames rendang": 20000,
    "nasi telor balado": 18000,
  },
};

// Setup Swagger UI di endpoint /docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Landing page
 *     description: Halaman utama API
 *     responses:
 *       200:
 *         description: Pesan sambutan
 */
app.get('/', (req, res) => {
  const landing = null;
  if (landing) {
    res.json(landing);
  } else {
    res.status(404).json({ error: 'Menu tidak ditemukan' });
  }
});

/**
 * @swagger
 * /menu/{category}:
 *   get:
 *     summary: Ambil menu berdasarkan kategori
 *     description: Menampilkan daftar menu berdasarkan kategori yang dipilih
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         description: "Nama kategori menu (contoh: bakmi, rames)"
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Menu berhasil ditemukan
 *       404:
 *         description: Menu tidak ditemukan
 */
app.get('/menu/:category', (req, res) => {
  const category = req.params.category;
  const menu = menuData[category];

  if (menu) {
    res.status(200).json(menu);
  } else {
    res.status(404).json({ error: 'Menu tidak ditemukan' });
  }
});

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 *     description: Menampilkan daftar semua nama kategori menu yang ada
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 */
app.get('/menu', (req, res) => {
  const kategori_tersedia = Object.keys(menuData);
  res.status(200).json({ kategori_tersedia });
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
