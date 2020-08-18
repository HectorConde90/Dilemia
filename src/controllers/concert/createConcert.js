import concertDAO from '../../model/concert/dao.js'




const createConcert = async (req, res, next) => {

    try {
        
        const newConcert = req.body;

        const concert = await concertDAO.create(newConcert);
    
        res.status(201).json(concert);

    } catch (error) {
        next(error);
    }

}

export default createConcert;