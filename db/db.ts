import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://pruebas-8e2i.onrender.com', 
  credentials: true,
}));

app.use(express.json())
app.use(express.static(path.join(__dirname,"../../src/dist")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../src/dist/index.html')); // Ajusta la ruta
});

app.post('/auth', (req, res) => {
  res.json({ message: 'Auth OK' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
