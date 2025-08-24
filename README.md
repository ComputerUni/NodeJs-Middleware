# MiddlewareNode.js

# Node.js Middleware Projesi

Bu proje, Express.js kullanarak middleware kavramlarını öğrenmek ve uygulamak için geliştirilmiş bir Node.js uygulamasıdır.

## 🚀 Özellikler

- **Global Middleware**: Tüm istekler için çalışan middleware
- **Local Middleware**: Belirli route'lar için özel middleware
- **Error Handling**: Hata yakalama ve işleme middleware'i
- **Logger Middleware**: İstek loglarını kaydetme
- **404 Handler**: Sayfa bulunamadığında özel hata sayfası
- **JSON Body Parser**: JSON verilerini işleme

## 📋 Gereksinimler

- Node.js (v14 veya üzeri)
- npm (Node Package Manager)

## 🛠️ Kurulum

1. Projeyi klonlayın:
   git clone https://github.com/kullaniciadi/middleware.git
   cd middleware

2. Bağımlılıkları yükleyin:
   npm install
   npm install express
   npm install -g express-generator

3. Uygulamayı başlatın:
   npm start

## 🏃‍♂️ Kullanım

Uygulama başlatıldıktan sonra `http://localhost:3000` adresinden erişebilirsiniz.

### Mevcut Endpoint'ler

- `GET /` - Ana sayfa
- `GET /about` - Hakkında sayfası (Local Middleware ile)
- `GET /error` - Hata test sayfası
- `POST /api/data` - JSON veri gönderme endpoint'i

## 📁 Proje Yapısı

middleware/
├── index.js # Ana uygulama dosyası
├── logger.js # Logger middleware
├── package.json # Proje bağımlılıkları
└── README.md # Bu dosya

## 🔧 Middleware Açıklamaları

### Global Middleware

app.use((req, res, next) => {
console.log("Global Middleware çalıştı.");
next();
});

Tüm istekler için çalışır.

### Local Middleware

function LocalMiddleware(req, res, next) {
console.log("Local Middleware çalıştı.");
next();
}

Sadece belirli route'larda çalışır.

### Logger Middleware

function logger(req, res, next) {
console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
next();
}

Her isteği tarih ve saat ile birlikte loglar.

### Error Handling Middleware

app.use((err, req, res, next) => {
console.error(err.message);
res.status(500).json({ message: "Hata mesajı" });
});

Hataları yakalar ve uygun yanıt döner.

## 📝 Loglar

Uygulama çalışırken konsol çıktısında şu tür logları göreceksiniz:

```
GET / - 2024-01-15T10:30:00.000Z
Global Middleware çalıştı.
GET /about - 2024-01-15T10:30:05.000Z
Global Middleware çalıştı.
Local Middleware çalıştı.
```

## 👨‍💻 Geliştirici

Bu proje middleware kavramlarını öğrenmek için geliştirilmiştir.

## 🔗 Faydalı Linkler

- [Express.js Dokümantasyonu](https://expressjs.com/)
- [Express Generator Dokümantasyonu](https://expressjs.com/en/starter/generator.html)
- [Node.js Dokümantasyonu](https://nodejs.org/)
- # [Middleware Kavramı](https://expressjs.com/en/guide/using-middleware.html)
