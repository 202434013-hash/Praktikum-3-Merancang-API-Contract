# Praktikum Minggu 3 - API Contract

## 1. Tujuan
Tujuan dari pengerjaan ini adalah untuk menerapkan desain API contract dan resource modelling pada project Library API. Hal ini dilakukan untuk mendefinisikan standar komunikasi antara client dan server, menentukan endpoint, metode HTTP, format request dan response, serta skenario penanganan error (error cases) sebelum tahap implementasi (coding) dilakukan.

## 2. Perubahan
- Menambahkan dokumentasi mengenai API contract di `docs/api-contract.md` yang mendefinisikan main resource `books`.
- Memperbarui file `docs/api-contract.md` dengan menyertakan endpoint matrix, rincian request dan response (200 OK, 201 Created, 404 Not Found, 422 Unprocessable Entity), serta penjelasan mengenai design decisions.
- Memperbarui Postman collection untuk mencakup rancangan request dan examples dari API yang akan dibuat.
- Mengubah struktur direktori dan menata file Postman agar lebih rapi dengan menyimpannya di `docs/postman/week-03-api-contract.postman_collection.json`.

## 3. Endpoint atau Contract
Main resource yang digunakan adalah `books`.
Berikut adalah daftar contract/endpoint yang telah disepakati:

| No  | Method | Endpoint          | Fungsi                  | Success Response | Error Response           |
| --- | ------ | ----------------- | ----------------------- | ---------------- | ------------------------ |
| 1   | GET    | `/api/books`      | Menampilkan daftar buku | 200 OK           | -                        |
| 2   | POST   | `/api/books`      | Membuat buku baru       | 201 Created      | 422 Unprocessable Entity |
| 3   | GET    | `/api/books/{id}` | Menampilkan detail buku | 200 OK           | 404 Not Found            |
| 4   | PUT    | `/api/books/{id}` | Memperbarui data buku   | 200 OK           | 404 / 422                |
| 5   | DELETE | `/api/books/{id}` | Menghapus data buku     | 204 No Content   | 404 Not Found            |

**Keputusan Utama (Design Decisions) & Hubungannya dengan API Contract:**
1. **Menggunakan `books` sebagai main resource:** Memfokuskan API contract pada satu entitas utama sehingga contract lebih sederhana, konsisten, dan mudah diimplementasikan pada skenario perpustakaan.
2. **Menggunakan pola REST:** Penentuan metode HTTP (`GET`, `POST`, `PUT`, `DELETE`) sesuai operasi CRUD pada resource membuat API contract menjadi intuitif dan standar.
3. **Standarisasi HTTP Status Code:** Memastikan respons yang diterima oleh client bersifat seragam, sehingga client tahu persis cara mengelola success (200, 201) dan error (404, 422).

## 4. Bukti Pengujian
Karena saat ini API Contract masih dalam tahap perancangan di Postman (mock/examples), berikut adalah hasil representasi dari Postman Examples yang dibuat:

**Success Response (201 Created - Create Book):**
```json
{
  "message": "Book created successfully",
  "data": {
    "id": 1,
    "title": "Pemrograman Web",
    "author": "Budi Santoso",
    "isbn": "978-1234567890",
    "published_year": 2025,
    "description": "Buku pembelajaran pemrograman web",
    "category": "Teknologi"
  }
}
```

## 5. Error Case

**Error Response (422 Unprocessable Entity - Validation Failed on POST):**
Jika client tidak mengirimkan field yang diwajibkan (misalnya `title` atau `author`):
```json
{
  "message": "The given data was invalid.",
  "errors": {
    "title": ["The title field is required."],
    "author": ["The author field is required."],
    "isbn": ["The isbn field is required."]
  }
}
```

**Error Response (404 Not Found - Get Detail):**
Jika client meminta buku dengan ID yang tidak terdapat dalam sistem:
```json
{
  "message": "Book not found"
}
```

## 6. Kesimpulan
Pembuatan API Contract dan resource modelling ini merupakan langkah krusial sebelum melakukan implementasi API. Contract ini akan menjamin bahwa client dan server memiliki pemahaman yang sama terhadap struktur endpoint, parameter, format request, format response, dan penanganan status error. Hal ini akan meminimalisir risiko terjadinya kendala komunikasi data.

## 7. Referensi
- Materi Praktikum Minggu 3 — API Contract
- Dokumentasi HTTP Status Codes
- Dokumentasi Postman mengenai Collections dan Examples

## 8. Deklarasi Penggunaan AI
Dalam pengerjaan praktikum ini, AI digunakan untuk menyusun, merapikan, dan merangkum hasil perancangan API contract menjadi format dokumentasi Markdown yang lebih terstruktur. AI juga memberikan referensi terkait format JSON untuk success dan error response sesuai dengan panduan standar REST API.
