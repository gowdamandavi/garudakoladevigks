import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(cors());
app.use(express.json());

/* Test route */
app.get("/", (req, res) => {
    res.send("Koladevi Garuda Temple Backend is running");
});

/* Contact form API */
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields required" });
    }

    // Later: save to DB or send email
    console.log(req.body);

    res.json({ success: true, message: "Message received" });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});