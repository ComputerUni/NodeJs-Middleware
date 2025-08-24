const express = require("express");
const app = express();

const logger = require("./logger");

app.use(logger);

const PORT = 3000;
app.use(express.json());

app.use((req, res, next) => {
  console.log("Global Middleware çalıştı.");
  next();
});

function LocalMiddleware(req, res, next) {
  console.log("Local Middleware çalıştı.");
  next();
}

app.get("/", (req, res) => {
  res.send("Ana sayfa");
});

app.get("/about", LocalMiddleware, (req, res) => {
  res.send("Hakkında");
});

app.get("/error", (req, res, next) => {
  const user = null;
  if (!user) {
    throw new Error("Kullanıcı bulunamadı!");
  }
  res.json(user);
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: "Hata mesajı" });
});

app.use((req, res) => {
  res.status(404).send("404-SAYFA BULUNAMADI");
});

app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
