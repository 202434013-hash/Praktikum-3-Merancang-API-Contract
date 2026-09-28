Minggu 2 - HTTP, REST, JSON, Status Code, dan Postman

1. Tujuan

Pengerjaan Minggu 2 ini saya lakukan yaiyu lanjutan dari tugas saya yang kemarin tetapi ditugas ini
diminta untuk be menerapkan konsep HTTP, REST API,
JSON, HTTP status code, serta melakukan pengujian API menggunakan
Postman.

Project dibuat menggunakan Node.js dan Express dan dijalankan pada
localhost:3000.

2.  Perubahan

Perubahan yang dilakukan meliputi pembuatan project Node.js,
instalasi Express, dan pembuatan server API menggunakan file
server.js.
END POINT YANG SAYA BUAT ADALAH

API memiliki beberapa endpoint untuk pengujian status code:

- GET /status/200
- GET /status/400
- GET /status/404
- GET /status/429

3.  Endpoint / API Contract

| Method | Endpoint    | Status Code | Keterangan        |
| ------ | ----------- | ----------: | ----------------- |
| GET    | /status/200 |         200 | Success           |
| GET    | /status/400 |         400 | Bad Request       |
| GET    | /status/404 |         404 | Not Found         |
| GET    | /status/429 |         429 | Too Many Requests |

Response API menggunakan format JSON. 4. Bukti Pengujian

Pengujian dilakukan menggunakan Postman.

Success Response

Request:

GET /status/200

Response:

{
"status": 200,
"message": "Success"
}

Hasil: 200 OK.

Error Response

Request:

GET /status/400

Response:

{
"status": 400,
"message": "Bad Request"
}

Hasil: 400 Bad Request. 5. Error Case

Error case yang digunakan dalam project adalah:

- 400 Bad Request
- 404 Not Found
- 429 Too Many Requests

Endpoint tersebut digunakan untuk menguji response dengan status
code error yang berbeda. 6. Kesimpulan

Project berhasil menerapkan HTTP, REST API, JSON, HTTP status code,
dan Postman. API berhasil dijalankan menggunakan Node.js dan
Express pada localhost:3000.

dari tugas yang saya buat ini akirnnya setelah dicoba bahwa API dapat memberikan success response
dan error response sesuai dengan endpoint dan status code yang
ditentukan. 7. Referensi

- Dokumentasi Node.js
- Dokumentasi Express.js
- Dokumentasi Postman
- Postman Collection Minggu 2 - Eksplorasi HTTP

8. Deklarasi Penggunaan AI

AI yang saya gunakan hanya untuk sebagai alat bantu untuk memahami instruksi tugas,
konsep HTTP, REST, JSON, status code, dan Postman serta membantu saya mencari refrensi dan beberapa istilah yang belum saya pahami
jadi penggunaan AI disini tidak semuannya tau copy past tetapi hanya menjadi panduan saya saja untuk menannyakan
berkaitan dengan materi yang tidak saya pahami.

Implementasi API dan pengujian dilakukan pada project menggunakan
Node.js, Express, dan Postman.
