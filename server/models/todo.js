import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: { type: 'String', required: true },
  completed: { type: 'Boolean', required: true },
  cuid: { type: 'String', required: true },
});

export default mongoose.model('Todo', todoSchema);
