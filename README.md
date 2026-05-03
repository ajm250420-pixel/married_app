```
# Batak Wedding Invitation
```bash
docker compose stop
```

### Stop dan hapus container

```bash
docker compose down
```

### Reset database MongoDB

```bash
docker compose down -v
```

---

## Melihat status container

```bash
docker compose ps
```

---

## Melihat log error

```bash
docker compose logs -f
```

Service tertentu:

```bash
docker compose logs -f frontend
docker compose logs -f backend
```

---

## Endpoint API

### GET /guestbook

Mengambil daftar ucapan.

### POST /rsvp

Contoh payload:

```json
{
  "name": "Nama Tamu",
  "attendance": "hadir",
  "guestCount": 2,
  "message": "Selamat menempuh hidup baru"
}
```

---

## Catatan penting

Versi saat ini adalah **starter runnable lokal** untuk memastikan environment berjalan stabil.

Tahap berikutnya akan dikembangkan menjadi:

- Angular full app
- RSVP tersimpan ke MongoDB
- personalized guest link `?to=`
- countdown timer
- galeri foto
- background music
- Batak ornament (ulos/gorga)
- responsive mobile-first
- deployment VPS production

---

## Deployment VPS (nanti)

```bash
git clone <repo>
cd married_app
cp .env.example .env
docker compose up -d --build
```

---

## Troubleshooting umum

### Port sudah dipakai

Cek apakah port 4200 atau 3000 sedang digunakan.

### Docker tidak jalan

Pastikan Docker Desktop aktif.

### WSL error

Jalankan:

```bash
wsl --update
```

---

## Author

Batak Wedding Invitation — Albert Jeremi Manurung
```