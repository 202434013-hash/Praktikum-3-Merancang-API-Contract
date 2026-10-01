1. Tujuan

Tujuan dari pengerjaan Praktikum Minggu 3 adalah menerapkan API Contract dan resource modelling pada project Library API.

API Contract digunakan untuk mendefinisikan standar komunikasi antara client dan server, meliputi endpoint, HTTP method, format response, HTTP status code, serta skenario error.

Pada tahap ini, resource utama yang digunakan adalah books, dengan implementasi endpoint untuk mengambil seluruh data buku dan mengambil data buku berdasarkan ID.

2. Perubahan

Perubahan yang dilakukan pada project meliputi:

Menambahkan resource books pada API.

Menambahkan endpoint GET /api/books untuk mengambil seluruh data buku.

Menambahkan endpoint GET /api/books/:id untuk mengambil data buku berdasarkan ID.

Menambahkan response 200 OK untuk request yang berhasil.

Menambahkan response 404 Not Found apabila buku dengan ID yang diminta tidak ditemukan.

Menambahkan dokumentasi API Contract pada docs/api-contract.md.

Memperbarui dokumentasi Praktikum Minggu 3.

Menyiapkan Postman untuk melakukan pengujian endpoint.

Menggunakan HTTP status code sesuai dengan kondisi response.

3. Endpoint / API Contract

Resource utama pada API adalah books.

3.1 GET /api/books

Digunakan untuk mengambil seluruh data buku.

Method:

GET /api/books

Response berhasil: 200 OK

Contoh response:

{
  "status": 200,
  "message": "Books retrieved successfully",
  "data": [
    {
      "id": 1,
      "title": "Laskar Pelangi",
      "author": "Andrea Hirata"
    },
    {
      "id": 2,
      "title": "Bumi",
      "author": "Tere Liye"
    }
  ]
}

3.2 GET /api/books/:id

Digunakan untuk mengambil satu data buku berdasarkan ID.

Method:

GET /api/books/1

Response berhasil: 200 OK

Contoh response:

{
  "status": 200,
  "message": "Book retrieved successfully",
  "data": {
    "id": 1,
    "title": "Laskar Pelangi",
    "author": "Andrea Hirata"
  }
}

3.3 Error Case - Book Tidak Ditemukan

Apabila ID buku tidak tersedia, API mengembalikan status 404 Not Found.

Contoh request:

GET /api/books/999

Response:

{
  "status": 404,
  "message": "Book not found"
}

3.4 Ringkasan Endpoint

Method

Endpoint

Status Berhasil

Error

GET

/api/books

200

-

GET

/api/books/:id

200

404

Pada tahap ini, endpoint POST, PUT, dan DELETE belum diimplementasikan, sehingga belum dicantumkan sebagai endpoint yang sudah diuji.

4. Design Decisions

4.1 Books sebagai Resource Utama

Resource utama yang digunakan adalah books karena project merupakan Library API yang berfokus pada pengelolaan data buku.

4.2 Menggunakan REST API

Endpoint menggunakan pola REST sederhana:

/api/books
/api/books/:id

Collection books digunakan untuk mengakses kumpulan data, sedangkan :id digunakan untuk mengakses satu resource tertentu.

4.3 Menggunakan HTTP Status Code

API menggunakan HTTP status code untuk menunjukkan hasil request:

200 OK - request berhasil.

404 Not Found - resource buku tidak ditemukan.

Penggunaan status code tersebut membuat client dapat mengetahui hasil request secara jelas.

4.4 Response JSON

Response API menggunakan format JSON agar mudah digunakan oleh client seperti Postman maupun aplikasi frontend.

5. Bukti Pengujian

Pengujian dilakukan menggunakan Postman.

5.1 Success Case

Request:

GET http://localhost:3000/api/books

Expected result:

Status: 200 OK

Response:

{
  "status": 200,
  "message": "Books retrieved successfully",
  "data": [
    {
      "id": 1,
      "title": "Laskar Pelangi",
      "author": "Andrea Hirata"
    },
    {
      "id": 2,
      "title": "Bumi",
      "author": "Tere Liye"
    }
  ]
}

Bukti screenshot Postman:

Tempelkan screenshot hasil request GET /api/books di bawah bagian ini.

Contoh:

[Screenshot Postman - GET /api/books - 200 OK]

5.2 Error Case

Request:

GET http://localhost:3000/api/books/999

Expected result:

Status: 404 Not Found

Response:

{
  "status": 404,
  "message": "Book not found"
}

Bukti screenshot Postman:

Tempelkan screenshot hasil request GET /api/books/999 di bawah bagian ini.

Contoh:

[Screenshot Postman - GET /api/books/999 - 404 Not Found]

6. Error Case

Error case yang diterapkan pada tahap ini adalah ketika client meminta data buku menggunakan ID yang tidak tersedia.

Contoh:

GET /api/books/999

API akan mencari buku berdasarkan ID tersebut. Jika data tidak ditemukan, server mengembalikan:

{
  "status": 404,
  "message": "Book not found"
}

Penggunaan 404 Not Found menunjukkan bahwa endpoint dapat diakses, tetapi resource yang diminta tidak tersedia.

7. Kesimpulan

Pada Praktikum Minggu 3 telah diterapkan API Contract dan resource modelling pada Library API.

Resource yang digunakan adalah books, dengan dua endpoint yang telah diimplementasikan dan diuji, yaitu:

GET /api/books

GET /api/books/:id

Pengujian dilakukan menggunakan Postman dengan success case 200 OK dan error case 404 Not Found.

Dengan adanya API Contract, struktur endpoint, HTTP method, response, dan error handling menjadi lebih jelas serta dapat digunakan sebagai acuan antara client dan server.

8. Referensi

Express.js Documentation - Routing dan HTTP response.

MDN Web Docs - HTTP request methods dan HTTP status codes.

Dokumentasi project Library API.

Postman Documentation - API testing.

9. Deklarasi Penggunaan AI

Dalam pengerjaan tugas ini,  saya menggunakan AI digunakan sebagai alat bantu untuk:

memahami konsep API Contract dan resource modelling;

membantu menyusun struktur dokumentasi;

membantu memperbaiki struktur endpoint dan response API;

membantu melakukan pengecekan konsistensi antara implementasi API dan dokumentasi.

Implementasi, pengujian menggunakan Postman, serta hasil akhir project dilakukan dan diverifikasi pada repository project.