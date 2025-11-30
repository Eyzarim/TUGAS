
// ============= INTERFACE DEFINITIONS =============
// Catatan: JavaScript tidak memiliki interface bawaan, 
// tetapi kita dapat mensimulasikannya menggunakan class abstrak atau objek

// Interface untuk Pelanggan (sebagai template)
const InterfacePelanggan = {
    lihatMenu: function() {
        throw new Error("Method 'lihatMenu()' harus diimplementasikan");
    },
    memesanMakanan: function(namaMakanan) {
        throw new Error("Method 'memesanMakanan()' harus diimplementasikan");
    },
    makanMakanan: function() {
        throw new Error("Method 'makanMakanan()' harus diimplementasikan");
    },
    membayar: function(harga) {
        throw new Error("Method 'membayar()' harus diimplementasikan");
    }
};

// Interface untuk Server/Pelayan
const InterfaceServer = {
    menerimaPesanan: function(namaMakanan, namaPelanggan) {
        throw new Error("Method 'menerimaPesanan()' harus diimplementasikan");
    },
    mengirimPesananKeDapur: function(pesanan) {
        throw new Error("Method 'mengirimPesananKeDapur()' harus diimplementasikan");
    },
    mengantarMakanan: function(namaMakanan) {
        throw new Error("Method 'mengantarMakanan()' harus diimplementasikan");
    },
    menghitungTagihan: function() {
        throw new Error("Method 'menghitungTagihan()' harus diimplementasikan");
    }
};

// Interface untuk Juru Masak
const InterfaceJuruMasak = {
    menerimaPesanan: function(pesanan) {
        throw new Error("Method 'menerimaPesanan()' harus diimplementasikan");
    },
    memasakMakanan: function(namaMakanan) {
        throw new Error("Method 'memasakMakanan()' harus diimplementasikan");
    },
    memberitahuSelesai: function(namaMakanan) {
        throw new Error("Method 'memberitahuSelesai()' harus diimplementasikan");
    }
};

// ============= IMPLEMENTASI CLASS =============

// Class implementasi Pelanggan
class PelangganRestoran {
    constructor(nama) {
        this.nama = nama;
        this.pesanan = null;
        // Implementasi interface
        Object.assign(this, InterfacePelanggan);
    }
    
    lihatMenu() {
        console.log(`[${this.nama}] Melihat menu...`);
        return "Menu: Nasi Goreng (Rp25000), Mie Goreng (Rp20000), Ayam Bakar (Rp30000)";
    }
    
    memesanMakanan(namaMakanan) {
        this.pesanan = namaMakanan;
        console.log(`[${this.nama}] Memesan: ${namaMakanan}`);
    }
    
    makanMakanan() {
        console.log(`[${this.nama}] Sedang makan ${this.pesanan}...`);
        console.log(`[${this.nama}] Makanan enak!`);
    }
    
    membayar(harga) {
        console.log(`[${this.nama}] Membayar Rp${harga}`);
        console.log(`[${this.nama}] Terima kasih!`);
    }
    
    getNama() {
        return this.nama;
    }
}

// Class implementasi Server/Pelayan
class Pelayan {
    constructor() {
        this.pesananSaatIni = null;
        this.namaPelangganSaatIni = null;
        this.hargaPesanan = 0;
        // Implementasi interface
        Object.assign(this, InterfaceServer);
    }
    
    menerimaPesanan(namaMakanan, namaPelanggan) {
        this.pesananSaatIni = namaMakanan;
        this.namaPelangganSaatIni = namaPelanggan;
        console.log(`[PELAYAN] Menerima pesanan '${namaMakanan}' dari ${namaPelanggan}`);
    }
    
    mengirimPesananKeDapur(pesanan) {
        console.log(`[PELAYAN] Mengirim pesanan ke dapur: ${pesanan}`);
    }
    
    mengantarMakanan(namaMakanan) {
        console.log(`[PELAYAN] Mengantarkan ${namaMakanan} ke meja pelanggan`);
    }
    
    menghitungTagihan() {
        // Simulasi harga berdasarkan menu
        if (this.pesananSaatIni.includes("Nasi Goreng")) {
            this.hargaPesanan = 25000;
        } else if (this.pesananSaatIni.includes("Mie Goreng")) {
            this.hargaPesanan = 20000;
        } else if (this.pesananSaatIni.includes("Ayam Bakar")) {
            this.hargaPesanan = 30000;
        }
        
        console.log(`[PELAYAN] Menghitung tagihan untuk ${this.namaPelangganSaatIni}`);
        console.log(`[PELAYAN] Total: Rp${this.hargaPesanan}`);
        return this.hargaPesanan;
    }
    
    getPesananSaatIni() {
        return this.pesananSaatIni;
    }
}

// Class implementasi Juru Masak
class Koki {
    constructor() {
        this.pesananYangDimasak = null;
        // Implementasi interface
        Object.assign(this, InterfaceJuruMasak);
    }
    
    menerimaPesanan(pesanan) {
        this.pesananYangDimasak = pesanan;
        console.log(`[KOKI] Menerima pesanan dari pelayan: ${pesanan}`);
    }
    
    memasakMakanan(namaMakanan) {
        console.log(`[KOKI] Mulai memasak ${namaMakanan}...`);
        console.log(`[KOKI] Memasak... (simulasi waktu memasak)`);
    }
    
    memberitahuSelesai(namaMakanan) {
        console.log(`[KOKI] ${namaMakanan} sudah siap!`);
        console.log(`[KOKI] Memanggil pelayan untuk mengambil pesanan`);
    }
}

// ============= SIMULASI RESTORAN =============

// Function untuk menjalankan simulasi lengkap
function simulasiProses(pelanggan, server, koki) {
    console.log("========================================");
    console.log("  SIMULASI OPERASI RESTORAN");
    console.log("========================================\n");
    
    // Langkah 1: Pelanggan melihat menu
    const menu = pelanggan.lihatMenu();
    console.log(menu + "\n");
    
    // Langkah 2: Pelanggan memesan
    const pesanan = "Nasi Goreng Spesial";
    pelanggan.memesanMakanan(pesanan);
    console.log();
    
    // Langkah 3: Server menerima pesanan
    server.menerimaPesanan(pesanan, pelanggan.getNama());
    console.log();
    
    // Langkah 4: Server kirim ke dapur
    server.mengirimPesananKeDapur(pesanan);
    console.log();
    
    // Langkah 5: Koki terima dan masak
    koki.menerimaPesanan(pesanan);
    console.log();
    
    koki.memasakMakanan(pesanan);
    console.log();
    
    // Langkah 6: Koki selesai memasak
    koki.memberitahuSelesai(pesanan);
    console.log();
    
    // Langkah 7: Server antar makanan
    server.mengantarMakanan(pesanan);
    console.log();
    
    // Langkah 8: Pelanggan makan
    pelanggan.makanMakanan();
    console.log();
    
    // Langkah 9: Hitung tagihan dan bayar
    const tagihan = server.menghitungTagihan();
    console.log();
    
    pelanggan.membayar(tagihan);
    
    console.log("\n========================================");
    console.log("  TRANSAKSI SELESAI");
    console.log("========================================");
}

// ============= JALANKAN SIMULASI =============

// Membuat instance dari setiap aktor
const pelanggan1 = new PelangganRestoran("Budi");
const pelayan1 = new Pelayan();
const koki1 = new Koki();

// Jalankan simulasi
simulasiProses(pelanggan1, pelayan1, koki1)
