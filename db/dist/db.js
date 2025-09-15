import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
    origin: 'https://pruebas-8e2i.onrender.com',
    credentials: true,
}));
app.use(express.json());
app.post('/auth', (req, res) => {
    res.json({ message: 'Auth OK' });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
