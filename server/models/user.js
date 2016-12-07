import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postActionSchema = new Schema({
  firstname: { type: 'String', required: true },
  lastname: { type: 'String', required: true },
  password: { type: 'String', required: true },
  email: { type: 'String', required: true },
  number: { type: 'String', required: true },  
  
});

export default mongoose.model('User', postActionSchema);
