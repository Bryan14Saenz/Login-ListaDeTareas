const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
}, { timestamps: true });


const Task = mongoose.model('Task', taskSchema);
module.exports = Task;

