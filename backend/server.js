const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Configura la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // tu contraseña de MySQL
  database: 'users'
});

// Ruta para agregar usuario
app.post('/addUser', (req, res) => {
  const { nombre, apellido, correo, contraseña } = req.body;
  const sql = 'INSERT INTO usuarios (nombre, apellido, correo, contraseña) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, correo, contraseña], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true, id: result.insertId });
  });
});

app.listen(3001, () => {
  console.log('Servidor backend corriendo en http://localhost:3001');
});