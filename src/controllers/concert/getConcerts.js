import concertDAO from '../../model/concert/dao.js'


const listConcerts = async (req, res, next) => {

    try {

        const concerts = await concertDAO.list();

        res.status(201).json(concerts);

        

    } catch (error) {
        next(error);
    }

}

export default listConcerts;