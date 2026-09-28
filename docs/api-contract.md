# Minggu 3 — API Contract

## 1. Resource Dictionary

Resource utama yang digunakan adalah `books`.

| Field | Tipe Data | Keterangan |
|---|---|---|
| `id` | integer | ID unik buku |
| `title` | string | Judul buku |
| `author` | string | Nama penulis |
| `isbn` | string | Nomor ISBN buku |
| `published_year` | integer | Tahun terbit buku |

Resource `books` digunakan sebagai acuan komunikasi antara client dan server.

---

## 2. Endpoint Matrix

| Method | Endpoint | Keterangan | Success | Error |
|---|---|---|---|---|
| POST | `/api/books` | Membuat buku baru | 201 Created | 422 Unprocessable Entity |
| GET | `/api/books` | Menampilkan daftar buku | 200 OK | - |
| GET | `/api/books/{id}` | Menampilkan detail buku | 200 OK | 404 Not Found |

---

## 3. Create Book Request

### Endpoint

`POST /api/books`

### Request Body

```json
{
  "title": "Pemrograman Web",
  "author": "Budi Santoso",
  "isbn": "978-1234567890",
  "published_year": 2025
}