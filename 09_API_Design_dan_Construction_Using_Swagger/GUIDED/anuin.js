import express from 'express';

const app = express();

const PORT = 8000;
const HOSTNAME = 'localhost';

app.use(express.json());

const daftarFilm = [];

//ambil semua film
app.get('/films', (req, res) => {
    return res.status(200).json(daftarFilm);
});

//tambah film baru
app.post('/film', (req, res) => {
    const film = {
        id: daftarFilm.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    };

    daftarFilm.push(film);
    return res.status(201).json(film);
})

//hapus film
app.delete('/film/:id', (req, res) => {
    const indeksFilm = daftarFilm.findIndex(f => f.id === Number(req.params.id));
    if (indeksFilm == -1) {
        return res.status(404)
    }

    const filmDihapus = daftarFilm.splice(indeksFilm, 1);

    return res.json(filmDihapus);
})

app.listen(8000, "localhost", () => console.log(`Peladen berjalan di ${HOSTNAME}:${PORT}`));