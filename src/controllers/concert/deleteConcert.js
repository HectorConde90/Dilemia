import concertDAO from '../../model/concert/dao.js'




const deleteConcert = async (req, res, next) => {

    try {
         
        const id = req.params.id;

        const concert = await concertDAO.delete(id);

        res.status(201).json(concert);

    } catch (error) {
        next(error);
    }

}

export default deleteConcert;