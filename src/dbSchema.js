import mongoose from 'mongoose';

const serenSchema = mongoose.Schema({
  feeling: String,
  walk: String,
  hobbies:[String],
  digit: Number,
})

export default mongoose.model('Serenx', serenSchema);
