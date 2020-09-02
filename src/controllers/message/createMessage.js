import messageDAO from '../../model/message/dao.js'




const createMessage = async (req, res, next) => {

    try {

        const newMessage = req.body;

        console.log(newMessage);

        const message = await messageDAO.create(newMessage);

        res.status(201).json(message);

    } catch (error) {
        next(error);
    }

}

export default createMessage;