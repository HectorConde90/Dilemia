import Router from 'express';
import concerts from '../controllers/concert/getConcerts.js';
import createConcert from '../controllers/concert/createConcert.js';



const router = Router();



router.route('/concerts')
    .get(concerts)
    .post(createConcert)


// router.route('/mensajes')
//     .post(mensajes)


export default router;