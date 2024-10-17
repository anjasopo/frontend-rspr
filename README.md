
---

# **Sistem Manajemen Data Pasien Panti Rapih**

Ini adalah sistem manajemen data pasien sederhana yang dibangun menggunakan **React.js** dan **Tailwind CSS**. Aplikasi ini dirancang untuk mengelola data pasien, termasuk menambah dan menghapus data pasien. Aplikasi ini juga dilengkapi dengan sistem login dan proteksi rute untuk otentikasi.

## **Fitur**

- **Manajemen Pasien:** Menambah, menghapus, dan menampilkan informasi pasien dalam format tabel.
- **Autentikasi:** Fitur login dasar dengan proteksi rute menggunakan `PrivateRoute.js`.
- **Komponen Card:** Komponen card yang dapat digunakan kembali untuk menampilkan informasi.
- **Routing Dinamis:** Menggunakan **React Router** untuk navigasi sisi klien.

## **Daftar Isi**

1. [Instalasi](#instalasi)
2. [Penggunaan](#penggunaan)
3. [Komponen](#komponen)
4. [Autentikasi](#autentikasi)
5. [Manajemen Data Pasien](#manajemen-data-pasien)
6. [Kontribusi](#kontribusi)

## **Instalasi**

Ikuti langkah-langkah berikut untuk mengatur proyek ini secara lokal:

1. Clone repositori:
   ```bash
   git clone https://github.com/username/repo-anda.git
   ```

2. Masuk ke direktori proyek:
   ```bash
   cd repo-anda
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Jalankan server pengembangan:
   ```bash
   npm start
   ```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

## **Penggunaan**

### **Login**

Gunakan kredensial berikut untuk login:

- **Username:** `admin`
- **Password:** `password`

Setelah login, Anda akan diarahkan ke halaman **Home** di mana Anda dapat melihat data pasien.

### **Routing**

- `/` – Halaman login (publik)
- `/home` – Halaman utama dengan komponen kartu (terproteksi)
- `/data` – Tabel manajemen data pasien (terproteksi)

Rute yang terproteksi menggunakan **localStorage** untuk mekanisme otentikasi sederhana. Untuk mengakses halaman yang terproteksi, pengguna harus sudah login.

## **Komponen**

### **`Card.js`**

Komponen `Card` digunakan untuk menampilkan judul, deskripsi, dan gambar. Ini digunakan di halaman Home untuk menampilkan informasi.

```js
const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
      <p>{description}</p>
    </div>
  );
};
```

### **`Layout.js`**

Komponen `Layout` membungkus konten utama, menyediakan **Navbar** dan **Footer** yang konsisten di seluruh aplikasi.

### **`Navbar.js`**

`Navbar` berisi tautan navigasi dan tombol logout, memungkinkan pengguna berpindah halaman atau keluar dari aplikasi.

### **`Footer.js`**

`Footer` berisi informasi hak cipta dasar dan tautan ke halaman lain.

## **Autentikasi**

Komponen `PrivateRoute.js` digunakan untuk melindungi rute yang terproteksi. Jika pengguna belum terotentikasi (berdasarkan **localStorage**), mereka akan diarahkan ke halaman login.

```js
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user");

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
```

## **Manajemen Data Pasien**

Komponen `Data.js` memungkinkan pengguna untuk menambah dan menghapus data pasien. Ini mencakup input form untuk menambah pasien baru dan tabel untuk menampilkan daftar pasien yang ada.

```js
const [patients, setPatients] = useState([...]); // Contoh data pasien

const handleAddPatient = () => {
  if (newPatient.name && newPatient.address && newPatient.contact) {
    setPatients([...patients, newPatient]);
    setNewPatient({ name: "", address: "", contact: "" });
  } else {
    alert("Silakan isi semua data pasien.");
  }
};
```

### **Menambah dan Menghapus Pasien**

- **Menambah pasien:** Pengguna dapat mengisi detail pasien di kolom input dan klik "Add" untuk menambahkan pasien baru ke tabel.
- **Menghapus pasien:** Setiap baris pasien memiliki tombol "Delete" untuk menghapus pasien dari daftar.

## **Kontribusi**

Jika Anda ingin berkontribusi pada proyek ini, ikuti langkah-langkah berikut:

1. Fork repositori ini.
2. Buat branch baru untuk fitur atau perbaikan:
   ```bash
   git checkout -b nama-fitur
   ```

3. Commit perubahan Anda:
   ```bash
   git commit -m "Deskripsi fitur atau perbaikan"
   ```

4. Push branch ke fork Anda:
   ```bash
   git push origin nama-fitur
   ```

5. Buat pull request dan jelaskan perubahan yang Anda buat.

---