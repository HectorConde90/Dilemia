import mongoose from 'mongoose';
import schema from './schema.js';

const Message = mongoose.model('message', schema);

export default Message;
