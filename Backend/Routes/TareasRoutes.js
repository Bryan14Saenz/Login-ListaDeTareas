const express = require('express');
const Task = require('../Models/Task');
const User = require('../Models/Usuarios');
const router = express.Router();

router.post('/task', async (req, res) => {
  const { text, userId } = req.body;

  const user = await User.findById(userId);
  if (!user) return res.status(400).json({ message: 'Usuario no encontrado.' });

  const task = new Task({ text, userId });
  await task.save();
  res.status(201).json(task);
});

router.get('/task', async (req, res) => {
  const { userId } = req.query;
  const tasks = await Task.find({ userId });
  res.status(200).json(tasks);
});

router.delete('/task/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.status(200).json({ message: 'Tarea eliminada.' });
});

router.patch('/task/:id', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) return res.status(404).json({ message: 'Tarea no encontrada.' });

  task.completed = !task.completed;
  await task.save();
  res.status(200).json(task);
});

module.exports = router;
