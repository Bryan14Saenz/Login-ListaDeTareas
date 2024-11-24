const express = require('express');
const User = require('../models/Usuarios');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'Este correo ya está registrado.' });

  const user = new User({ email, password });
  await user.save();
  res.status(201).json({ message: 'Cuenta creada con éxito.' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Correo o contraseña incorrectos.' });

  const match = await user.matchPassword(password);
  if (!match) return res.status(400).json({ message: 'Correo o contraseña incorrectos.' });

  res.status(200).json({ message: 'Inicio de sesión exitoso.' });
});

module.exports = router;

