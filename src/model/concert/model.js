import mongoose from 'mongoose';
import schema from './schema.js';

const Concert = mongoose.model('concert', schema);

export default Concert;
