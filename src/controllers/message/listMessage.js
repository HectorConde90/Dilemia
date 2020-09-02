import messageDAO from '../../model/message/dao.js'




const listMessage = async (req, res, next) => {

    try {

        const message = await messageDAO.list();

        res.status(201).json(message);

    } catch (error) {
        next(error);
    }

}

export default listMessage;