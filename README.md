# Website PT Ketiara Aliran Rezeki — Panduan Singkat

Website statis (HTML/CSS/JS), tanpa database, tanpa login/panel admin.

## Struktur Folder
```
/
├── index.html              (Beranda)
├── 404.html
├── robots.txt
├── sitemap.xml
├── pages/
│   ├── tentang.html
│   ├── ekosistem.html
│   ├── capaian.html
│   ├── mitra.html
│   ├── legalitas.html
│   ├── karier.html
│   ├── kontak.html
│   └── berita/
│       ├── index.html
│       └── (artikel-berita).html
└── assets/
    ├── css/style.css
    ├── js/script.js
    ├── icons/favicon.svg
    └── images/  (letakkan foto asli perusahaan di sini)
```

## Cara Edit Konten Dasar
1. **Ganti teks**: buka file `.html` terkait, edit teks di antara tag (mis. `<h1>...</h1>`), simpan.
2. **Ganti foto**: taruh file gambar di `assets/images/`, lalu ganti `background-image` di `.hero-visual` (CSS) atau tambahkan tag `<img src="../assets/images/nama-foto.jpg">`.
3. **Tambah brand baru**: salin satu blok `.card.brand-item` di `pages/ekosistem.html`, ubah isi dan `data-category`.
4. **Ubah statistik**: edit angka pada atribut `data-count` di `.stat-num` (index.html & capaian.html). Pastikan sudah disetujui pembimbing dan mencantumkan periode.
5. **Tambah artikel berita**: salin salah satu file di `pages/berita/`, ubah judul/isi, lalu tambahkan kartu baru di `pages/berita/index.html`.
6. **Hapus artikel**: hapus file `.html`-nya dan kartu terkait di `pages/berita/index.html`.
7. **Ganti nomor WhatsApp**: cari `6281234567890` di seluruh file HTML dan `assets/js/script.js`, ganti dengan nomor resmi (format 62xxxxxxxxxx tanpa tanda + atau spasi).
8. **Ganti email**: cari `info@ketiara.id` / `partnership@ketiara.id` / `karir@ketiara.id`, ganti sesuai email resmi.
9. **Tambah dokumen legalitas**: salin blok `.doc-card` di `pages/legalitas.html`, ubah nama dokumen dan link.
10. **Update ke hosting**: unggah seluruh folder ini ke hosting/domain via FTP atau panel hosting (folder ini bisa langsung dipindahkan tanpa instalasi tambahan).
11. **Backup**: salin seluruh folder proyek secara berkala, beri nama `Backup-Website-PT-KAR-YYYY-MM-DD`.
12. **Restore backup**: ganti seluruh isi folder hosting dengan isi folder backup.

## Catatan Penting
- Semua data statistik, brand, dan legalitas pada file ini adalah **contoh** dan wajib diganti dengan data resmi yang telah disetujui pembimbing sebelum publikasi.
- Foto placeholder (`.hero-visual`) wajib diganti dengan dokumentasi asli perusahaan.
- Jangan menyimpan password atau data rahasia di dalam file kode ini.
