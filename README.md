# Landing Page HTML

### Deskripsi Program
Program ini merupakan halaman web sederhana yang dibuat menggunakan HTML. Halaman ini dirancang sebagai halaman "Landing Page" yang menyajikan beberapa elemen seperti header, navigasi, formulir, gambar, kutipan dan footer dengan styling yang diatur dari file (`style.css`) dan beberapa fungsi yang diatur dari file (`script.js`).

### Struktur Program
1. **Header (`<header>`):**
    -   Menampilkan logo (`logo-zaga.png') yang jika ditekan dapat berputar 360 derajat.
    -   Menampilkan judul halaman utama "Welcome".
    -   Berisi tautan navigasi (`<nav>`) ke halaman utama (`index.html`) dan halaman "About" (`about.html`).
2. **Isi Utama (`<main>`):**
    -   Menampilkan pesan selamat datang.
    -   Bagian "Login" (`<section>`):
        -   Menampilkan pesan untuk login.
        -   Formulir login dengan dua input (Username dan Password) yang dilengkapi dengan validator dan peringatan Capslock jika menyala.
        -   Tombol "Login" (tombol submit).
    -   Gambar (`<figure>`):
        -   Menampilkan logo (`logo-zaga.png').
    -   Kutipan (`<article>`):
        -   Menampilkan quotes.
3.  **Footer (`<footer>`):**
    -   Menampilkan informasi hak cipta tahun 2023 untuk BTJ Academy.


# About Me Page HTML
### Deskripsi Program
Program ini merupakan halaman web sederhana yang dibuat menggunakan HTML. Halaman ini bertindak sebagai halaman "About Me" yang menampilkan informasi tentang profil pribadi, latar belakan pendidikan, pengalaman kerja dan moto hidup dari pengembang dengan styling yang diatur dari file (`style.css`) dan beberapa fungsi yang diatur dari file (`script.js`).

### Struktur Program
1.  **Header (`<header>`):**
    -   Menampilkan logo (`logo-zaga.png') yang jika ditekan dapat berputar 360 derajat.
    -   Menampilkan judul halaman utama "Welcome".
    -   Berisi tautan navigasi (`<nav>`) ke halaman utama (`index.html`) dan halaman "About" (`about.html`).
2.  **Isi Utama (`<main>`):**
    -   Bagian "Profile" (`<section>`):
    -   Menampilkan nama dan moto hidup pengembang.
    -   Berisi tautan navigasi (`<nav>`) ke bagian "About Me" (`#aboutme`), bagian "Education" (`#experience`), dan ke bagian "Work Experience" (`#experience`).
    -   Bagian "About Me" (`<article>`).
    -   Menampilkan foto profil.
    -   Menampilkan informasi tentang pengembang.
    -   List Pendidikan (`<section>`):
    -   Menampilkan pendidikan yang pernah dijalani dengan detail berupa list (`<ul>`).
    -   Tabel Pengalaman Kerja (`<section>`):
    -   Menampilkan tabel (`<table>`) pengalaman kerja yang pernah dijalani.
3.  **Footer (`<footer>`):**
    -   Menampilkan informasi hak cipta tahun 2023 untuk BTJ Academy.

# Penggunaan

1.  **Menjalankan Program:**
    -   Buka file `index.html` menggunakan web browser untuk melihat hasilnya.
2.  **Navigasi:**
    -   Klik tautan "Home" untuk menuju ke halaman utama "Landing Page".
    -   Klik tautan "About" untuk menuju ke halaman "About".
3.  **Login Form**
    -   Masukkan Username serta Password untuk menuju ke halaman "About".
    -   Masukkan Username (minimal 6 karakter).
    -   Masukkan Password (minimal memiliki 1 karakter huruf besar, 1 karakter huruf kecil, 1 karakter simbol dan 1 karakter angka).
    -   Klik tombol "Login" untuk melanjutkan ke halaman "About".
4.  **Navigasi About:**
    -   Klik tautan "About Me" untuk menuju ke bagian "About Me".
    -   Klik tautan "Education" untuk menuju ke bagian "Education".
    -   Klik tautan "Work Experience" untuk menuju ke bagian "Work Experience".

# Styling CSS yang Digunakan
### Gaya Umum:

-   Variabel CSS root (`--color-main`, `--color-highlight`, `--color-secondary`) menentukan skema warna.
-   Warna latar belakang untuk area konten utama ditetapkan menggunakan variabel tersebut.

### Gaya Tubuh:

-   Tubuh memiliki margin sebesar 2vh, warna teks putih, dan gaya huruf tertentu.
-   Border-radius diterapkan, memberikan tampilan bulat.

### Header:

-   Kontainer Flex dengan ruang di antara elemen-elemen.
-   Logo (`h1` dan `img`) diatur untuk ditampilkan dalam bentuk inline-block dengan warna sorot.
-   Tautan navigasi dengan transisi hover.

### Halaman Utama:

-   Konten yang terpusat dengan flexbox, diatur ruang di antara elemen-elemen.
-   Formulir login dengan animasi masuk yang halus.

### Gaya Formulir:

-   Elemen formulir dihias dengan latar belakang putih dan batas berbentuk bulat.
-   Warna label diatur sesuai dengan warna sorot.
-   Tombol dengan transisi hover.

### Bagian Konten:

-   Teks terpusat dengan margin kiri.
-   Animasi muncul diterapkan.

### Footer:

-   Teks terpusat dengan padding.

### Halaman Tentang:

-   Arah fleks diubah untuk halaman tentang.
-   Tautan navigasi memiliki efek hover.

### Bagian Profil:

-   Gambar latar belakang dengan penataan cover.
-   Animasi masuk dari kiri.
-   Efek hover pada gambar profil.

### Bagian Tentang Saya:

-   Gambar dengan efek hover untuk mengubah lebar.
-   Artikel dengan teks rata kanan.

### Bagian Pendidikan:

-   Diatur dengan latar belakang warna dan padding.
-   Gaya heading dan paragraf yang berbeda.

### Bagian Pengalaman:

-   Tata letak tabel dengan padding kolom tertentu.
-   Gaya baris tabel yang berbeda untuk informasi yang berbeda.

### Media Queries:

-   Penyesuaian untuk layar yang lebih kecil, termasuk perubahan arah fleks, lebar, dan ukuran huruf.
-   Animasi Keyframe untuk efek masuk dan muncul.

### Catatan:

-   CSS menggunakan praktik modern seperti flexbox, grid, transisi, dan animasi untuk tata letak yang dinamis dan menarik secara visual. Penyesuaian dilakukan untuk desain responsif, memastikan pengalaman pengguna yang baik di berbagai ukuran layar.

# Fungsi Script yang Digunakan
### Rotate Logo (`rotateImage()`):

-   Fungsi ini dipanggil ketika gambar logo diklik.
-   Secara bertahap memutar gambar logo 360 derajat setiap kali dipanggil.

### Login (`login(event)`):

-   Fungsi ini dipanggil saat formulir login disubmit.
-   Mencegah pengiriman formulir dengan menggunakan `event.preventDefault()`.
-   Memvalidasi username dan password dengan memanggil fungsi `validateUsername()` dan `validatePass()`.
-   Menampilkan pesan kesalahan (jika ada) di elemen HTML yang sesuai.
-   Jika tidak ada kesalahan, pengguna diarahkan ke halaman "about.html".

### Validate Username (`validateUsername()`):

-   Memvalidasi input username.
-   Memeriksa apakah username tidak boleh kosong dan harus memiliki setidaknya 6 karakter.
-   Menampilkan pesan kesalahan di elemen HTML yang sesuai.

### Validate Password (`validatePass()`):

-   Memvalidasi input password.
-   Memeriksa apakah password tidak boleh kosong dan harus memenuhi kriteria: setidaknya 1 huruf kecil, 1 huruf besar, 1 angka, dan 1 simbol.
-   Menampilkan pesan kesalahan di elemen HTML yang sesuai.

### CapsLock Alert:

-   Menampilkan peringatan jika tombol Caps Lock aktif ketika pengguna memasukkan kata sandi.

### Show & Hide Password (`togglePasswordVisibility()`):

-   Fungsi ini dipanggil saat checkbox "Show Password" diubah.
-   Mengubah tipe input kata sandi antara "text" (untuk ditampilkan) dan "password" (untuk disembunyikan).
