import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const guestbook = [
  {
    name: "Demo Guest",
    attendance: "hadir",
    guestCount: 2,
    message: "Selamat menempuh hidup baru"
  }
];

app.get("/guestbook", (_req, res) => {
  res.json(guestbook);
});

app.post("/rsvp", (req, res) => {
  const payload = req.body;
  guestbook.unshift(payload);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});