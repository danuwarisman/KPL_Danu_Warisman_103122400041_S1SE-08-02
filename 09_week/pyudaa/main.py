from abc import ABC, abstractmethod

class Pegawai(ABC):
    def __init__(self, id_pegawai: str, nama: str, gaji_pokok: float):
        self._idPegawai = id_pegawai 
        self._nama = nama
        self._gajiPokok = gaji_pokok

    @abstractmethod
    def hitungGaji(self) -> float:
        pass 

    @abstractmethod
    def tampilkanPeran(self) -> None:
        pass

    @abstractmethod
    def validasiTugas(self) -> bool:
        pass

class TenagaKependidikan(Pegawai):
    def __init__(self, id_pegawai: str, nama: str, gaji_pokok: float,
                 unit_kerja: str, tunjangan_operasional: float):
        super().__init__(id_pegawai, nama, gaji_pokok)
        self._unitKerja = unit_kerja
        self._tunjanganOperasional = tunjangan_operasional

class Dosen(Pegawai):
    def __init__(self, id_pegawai: str, nama: str, gaji_pokok: float,
                 nidn: str, bidang_keahlian: str, jumlah_sks: int, honor_per_sks: float):
        super().__init__(id_pegawai, nama, gaji_pokok)
        self._nidn = nidn
        self._bidangKeahlian = bidang_keahlian
        self._jumlahSKS = jumlah_sks
        self._honorPerSKS = honor_per_sks

    def hitungGaji(self) -> float:
        return self._gajiPokok + (self._jumlahSKS * self._honorPerSKS)

    def tampilkanPeran(self) -> None:
        print(f"[Dosen] {self._nama} | NIDN: {self._nidn} | Bidang: {self._bidangKeahlian}")

    def validasiTugas(self) -> bool:
        return self._jumlahSKS > 0

    def mengajar(self, mata_kuliah: str) -> None:
        print(f"{self._nama} mengajar mata kuliah: {mata_kuliah}")

    def membimbingMahasiswa(self, nama_mahasiswa: str) -> None:
        print(f"{self._nama} membimbing mahasiswa: {nama_mahasiswa}")


class StaffAdministrasi(Pegawai):
    def __init__(self, id_pegawai: str, nama: str, gaji_pokok: float,
                 bagian: str, jumlah_dokumen_diproses: int, insentif_dokumen: float):
        super().__init__(id_pegawai, nama, gaji_pokok)
        self._bagian = bagian
        self._jumlahDokumenDiproses = jumlah_dokumen_diproses
        self._insentifDokumen = insentif_dokumen

    def hitungGaji(self) -> float:
        return self._gajiPokok + (self._jumlahDokumenDiproses * self._insentifDokumen)

    def tampilkanPeran(self) -> None:
        print(f"[Staff Administrasi] {self._nama} | Bagian: {self._bagian}")

    def validasiTugas(self) -> bool:
        return self._jumlahDokumenDiproses > 0

    def kelolaSurat(self) -> None:
        print(f"{self._nama} mengelola surat.")

    def inputDataAkademik(self) -> None:
        print(f"{self._nama} menginput data akademik.")


class Laporan(TenagaKependidikan):
    def __init__(self, id_pegawai: str, nama: str, gaji_pokok: float,
                 unit_kerja: str, tunjangan_operasional: float,
                 nama_laboratorium: str, jumlah_praktikum: int, insentif_praktikum: float):
        super().__init__(id_pegawai, nama, gaji_pokok, unit_kerja, tunjangan_operasional)
        self._namaLaboratorium = nama_laboratorium
        self._jumlahPraktikum = jumlah_praktikum
        self._insentifPraktikum = insentif_praktikum

    def hitungGaji(self) -> float:
        return self._gajiPokok + self._tunjanganOperasional + (self._jumlahPraktikum * self._insentifPraktikum)

    def tampilkanPeran(self) -> None:
        print(f"[Laporan] {self._nama} | Lab: {self._namaLaboratorium} | Unit: {self._unitKerja}")

    def validasiTugas(self) -> bool:
        return self._jumlahPraktikum > 0

    def menyiapkanPraktikum(self) -> None:
        print(f"{self._nama} menyiapkan praktikum di {self._namaLaboratorium}.")

    def mengecekAlatLab(self) -> None:
        print(f"{self._nama} mengecek alat laboratorium.")


class Pustakawan(TenagaKependidikan):
    def __init__(self, id_pegawai: str, nama: str, gaji_pokok: float,
                 unit_kerja: str, tunjangan_operasional: float,
                 kode_perpustakaan: str, jumlah_layanan: int, insentif_layanan: float):
        super().__init__(id_pegawai, nama, gaji_pokok, unit_kerja, tunjangan_operasional)
        self._kodePerpustakaan = kode_perpustakaan
        self._jumlahLayanan = jumlah_layanan
        self._insentifLayanan = insentif_layanan

    def hitungGaji(self) -> float:
        return self._gajiPokok + self._tunjanganOperasional + (self._jumlahLayanan * self._insentifLayanan)

    def tampilkanPeran(self) -> None:
        print(f"[Pustakawan] {self._nama} | Kode: {self._kodePerpustakaan} | Unit: {self._unitKerja}")

    def validasiTugas(self) -> bool:
        return self._jumlahLayanan > 0

    def mengelolaPeminjamanBuku(self) -> None:
        print(f"{self._nama} mengelola peminjaman buku.")

    def mengaturKatalogBuku(self) -> None:
        print(f"{self._nama} mengatur katalog buku.")


if __name__ == "__main__":
    dosen = Dosen("D001", "Dr. Budi", 5_000_000, "1234567890", "Informatika", 12, 200_000)
    dosen.tampilkanPeran()
    dosen.mengajar("Pemrograman OOP")
    dosen.membimbingMahasiswa("Andi")
    print(f"  Gaji: Rp {dosen.hitungGaji():,.0f}")
    print(f"  Validasi Tugas: {dosen.validasiTugas()}\n")

    staff = StaffAdministrasi("S001", "Siti", 3_500_000, "Akademik", 80, 5_000)
    staff.tampilkanPeran()
    staff.kelolaSurat()
    staff.inputDataAkademik()
    print(f"  Gaji: Rp {staff.hitungGaji():,.0f}")
    print(f"  Validasi Tugas: {staff.validasiTugas()}\n")

    Laporan = Laporan("L001", "Rudi", 3_000_000, "FMIPA", 500_000, "Lab Kimia", 10, 50_000)
    Laporan.tampilkanPeran()
    Laporan.menyiapkanPraktikum()
    Laporan.mengecekAlatLab()
    print(f"  Gaji: Rp {Laporan.hitungGaji():,.0f}")
    print(f"  Validasi Tugas: {Laporan.validasiTugas()}\n")

    pustakawan = Pustakawan("P001", "Dewi", 3_000_000, "Perpustakaan", 500_000, "PERP-01", 50, 10_000)
    pustakawan.tampilkanPeran()
    pustakawan.mengelolaPeminjamanBuku()
    pustakawan.mengaturKatalogBuku()
    print(f"  Gaji: Rp {pustakawan.hitungGaji():,.0f}")
    print(f"  Validasi Tugas: {pustakawan.validasiTugas()}")