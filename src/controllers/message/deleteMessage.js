import messageDAO from '../../model/message/dao.js'




const deleteMessage = async (req, res, next) => {

    try {
        const id = req.params.id;
        const message = await messageDAO.delete(id);

        res.status(201).json(message);

    } catch (error) {
        next(error);
    }

}

export default deleteMessage;