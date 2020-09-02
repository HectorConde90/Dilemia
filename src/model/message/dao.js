import Message from './model.js';

class MessageDAO {

    constructor() { }

    list() {
        return Message.find().sort({_id: -1});
    }

    create(message) {
        return new Message(message).save();
    }

    delete(id) {
        return Message.findByIdAndDelete({_id: id})
    }

}

export default new MessageDAO();