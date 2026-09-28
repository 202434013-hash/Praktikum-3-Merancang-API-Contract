# Minggu 3 — API Contract

## 1. Tujuan Praktikum

Praktikum Minggu 3 bertujuan untuk membuat API contract sebagai rancangan komunikasi antara client dan server sebelum API Laravel dibangun.

API contract menentukan endpoint, HTTP method, request, response, field data, status code, dan bentuk error yang digunakan oleh client dan server.

Pada praktikum ini digunakan Library API dengan satu main resource, yaitu `books`.

---

## 2. User Stories

### User Story 1

Sebagai pengguna perpustakaan, saya ingin melihat daftar buku agar saya dapat mengetahui buku yang tersedia.

### User Story 2

Sebagai pengguna perpustakaan, saya ingin melihat detail buku berdasarkan ID agar saya dapat mengetahui informasi lengkap dari buku tersebut.

---

## 3. Main Resource

Main resource yang digunakan adalah:

`books`

Resource `books` digunakan untuk merepresentasikan data buku pada Library API.

---

## 4. Resource Dictionary

Resource dictionary menjelaskan field yang digunakan oleh resource `books`.

| Field | Tipe Data | Wajib | Keterangan |
|---|---|---|---|
| `id` | integer | Ya | ID unik buku |
| `title` | string | Ya | Judul buku |
| `author` | string | Ya | Nama penulis buku |
| `isbn` | string | Ya | Nomor ISBN buku |
| `published_year` | integer | Ya | Tahun terbit buku |
| `description` | string | Tidak | Deskripsi singkat buku |
| `category` | string | Tidak | Kategori buku |

Resource dictionary memiliki tujuh field sebagai acuan untuk request, response, dan validasi.

---

## 5. Endpoint Matrix

API contract menggunakan lima endpoint berikut:

| No | Method | Endpoint | Fungsi | Success Response | Error Response |
|---|---|---|---|---|---|
| 1 | GET | `/api/books` | Menampilkan daftar buku | 200 OK | - |
| 2 | POST | `/api/books` | Membuat buku baru | 201 Created | 422 Unprocessable Entity |
| 3 | GET | `/api/books/{id}` | Menampilkan detail buku | 200 OK | 404 Not Found |
| 4 | PUT | `/api/books/{id}` | Memperbarui data buku | 200 OK | 404 / 422 |
| 5 | DELETE | `/api/books/{id}` | Menghapus data buku | 204 No Content | 404 Not Found |

Endpoint menggunakan pola REST dengan HTTP method yang disesuaikan dengan operasi terhadap resource `books`.

---

## 6. Create Request

### Endpoint

```http
POST /api/books
```

### Request Body

```json
{
  "title": "Pemrograman Web",
  "author": "Budi Santoso",
  "isbn": "978-1234567890",
  "published_year": 2025,
  "description": "Buku pembelajaran pemrograman web",
  "category": "Teknologi"
}
```

Request tersebut digunakan sebagai contoh data untuk membuat buku baru.

---

## 7. Response Examples

### 7.1 Response 200 OK

Status `200 OK` digunakan ketika request berhasil mengambil data.

#### Endpoint

```http
GET /api/books
```

#### Response

```json
{
  "data": [
    {
      "id": 1,
      "title": "Pemrograman Web",
      "author": "Budi Santoso",
      "isbn": "978-1234567890",
      "published_year": 2025,
      "description": "Buku pembelajaran pemrograman web",
      "category": "Teknologi"
    }
  ]
}
```

---

### 7.2 Response 201 Created

Status `201 Created` digunakan ketika data buku berhasil dibuat.

#### Endpoint

```http
POST /api/books
```

#### Response

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

---

### 7.3 Response 404 Not Found

Status `404 Not Found` digunakan ketika buku dengan ID yang diminta tidak ditemukan.

#### Endpoint

```http
GET /api/books/999
```

#### Response

```json
{
  "message": "Book not found"
}
```

---

### 7.4 Response 422 Unprocessable Entity

Status `422 Unprocessable Entity` digunakan ketika data yang dikirim tidak memenuhi aturan validasi.

#### Endpoint

```http
POST /api/books
```

#### Request yang tidak valid

```json
{
  "title": "",
  "author": "",
  "isbn": "",
  "published_year": 0
}
```

#### Response

```json
{
  "message": "The given data was invalid.",
  "errors": {
    "title": [
      "The title field is required."
    ],
    "author": [
      "The author field is required."
    ],
    "isbn": [
      "The isbn field is required."
    ]
  }
}
```

---

## 8. Error Case

### 8.1 404 Not Found

Error `404 Not Found` digunakan ketika client meminta resource berdasarkan ID yang tidak tersedia.

Contoh:

```http
GET /api/books/999
```

Response:

```json
{
  "message": "Book not found"
}
```

### 8.2 422 Unprocessable Entity

Error `422 Unprocessable Entity` digunakan ketika data request tidak memenuhi aturan validasi.

Contohnya adalah ketika field wajib seperti `title`, `author`, atau `isbn` tidak diisi.

---

## 9. Design Decisions

### Design Decision 1 — Menggunakan `books` sebagai main resource

Resource `books` dipilih sebagai resource utama karena skenario praktikum menggunakan Library API.

Penggunaan satu main resource membuat API contract lebih sederhana, konsisten, dan mudah digunakan sebagai acuan implementasi.

### Design Decision 2 — Menggunakan REST-style endpoint

Endpoint menggunakan HTTP method sesuai dengan operasi terhadap resource.

- `GET` digunakan untuk mengambil data.
- `POST` digunakan untuk membuat data.
- `PUT` digunakan untuk memperbarui data.
- `DELETE` digunakan untuk menghapus data.

Dengan demikian fungsi setiap endpoint dapat dibedakan melalui HTTP method.

### Design Decision 3 — Menggunakan HTTP status code

Status code digunakan untuk menunjukkan hasil request secara konsisten.

- `200 OK` untuk request berhasil.
- `201 Created` untuk resource yang berhasil dibuat.
- `404 Not Found` ketika resource tidak ditemukan.
- `422 Unprocessable Entity` ketika data request tidak memenuhi validasi.
- `204 No Content` untuk operasi delete yang berhasil tanpa response body.

---

## 10. Postman Collection

Postman digunakan untuk menyimpan API contract dalam bentuk collection.

Nama collection:

`Minggu 3 — API Contract`

Struktur collection:

```text
Minggu 3 — API Contract
└── books
    ├── Create Book
    │   ├── Create Book - 201 Created
    │   └── Create Book - 422 Unprocessable Entity
    │
    ├── Get Books
    │   └── Get Books - 200 OK
    │
    └── Get Book Detail
        └── Get Book Detail - 404 Not Found
```

Collection digunakan untuk menyimpan request dan response examples sebagai acuan API contract.

Pada tahap Minggu 3, request tidak harus dijalankan ke Laravel karena Laravel belum diperlukan. Response examples merupakan rancangan response yang akan menjadi acuan implementasi pada tahap berikutnya.

---

## 11. File Export Postman

Postman Collection diekspor menggunakan format Collection v2.1.

File hasil export:

```text
docs/postman/week-03-api-contract.postman_collection.json
```

File tersebut menyimpan struktur collection, request, dan response examples.

---

## 12. Kesimpulan

Praktikum Minggu 3 menghasilkan API contract untuk Library API dengan main resource `books`.

Contract mencakup dua user stories, resource dictionary dengan tujuh field, endpoint matrix dengan lima endpoint, create request, response examples `200`, `201`, `404`, dan `422`, error cases, serta design decisions.

API contract ini digunakan sebagai acuan antara client dan server agar struktur endpoint, request, response, field, dan status code dapat digunakan secara konsisten.

Contract yang telah dibuat selanjutnya dapat digunakan sebagai dasar implementasi API menggunakan Laravel pada tahap berikutnya.

---

## 13. Referensi

1. Materi Praktikum Minggu 3 — API Contract.
2. Dokumentasi Postman mengenai Collections dan Examples.
3. Postman Collection `Minggu 3 — API Contract`.

---

## 14. Deklarasi Penggunaan AI

Dalam pengerjaan praktikum ini, AI digunakan sebagai alat bantu untuk memahami konsep API contract, membantu menyusun struktur dokumentasi, memberikan contoh request dan response, serta memberikan panduan dalam penggunaan Postman.

Penggunaan AI dilakukan sebagai bantuan dalam proses pengerjaan dan pemahaman materi. Isi API contract disesuaikan dengan skenario Library API menggunakan resource `books`.

---

## 15. Refleksi

### 15.1 Keputusan contract mana yang paling mungkin memengaruhi client?

Keputusan yang paling mungkin memengaruhi client adalah struktur endpoint dan format response JSON. Client akan menggunakan endpoint, HTTP method, dan field yang telah ditentukan dalam contract untuk mengambil, membuat, dan mengolah data buku.

### 15.2 Apa risiko jika field berubah type setelah client dibuat?

Jika tipe data sebuah field berubah setelah client dibuat, client dapat mengalami error ketika memproses data. Perubahan tipe data dapat menyebabkan perbedaan dalam validasi, parsing, atau pengolahan data di sisi client.

Sebagai contoh, jika `published_year` sebelumnya berupa integer kemudian berubah menjadi string, client yang mengharapkan integer dapat mengalami masalah ketika melakukan pengolahan data.

### 15.3 Bagian mana yang akan diterjemahkan menjadi route, validation, dan API Resource di Laravel?

Endpoint matrix akan diterjemahkan menjadi route Laravel. Aturan request dan field wajib akan menjadi dasar validation. Struktur response JSON akan diterjemahkan menggunakan API Resource Laravel.

---
