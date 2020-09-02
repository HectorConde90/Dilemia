import Router from 'express';
import concerts from '../controllers/concert/getConcerts.js';
import createConcert from '../controllers/concert/createConcert.js';
import deleteConcert from '../controllers/concert/deleteConcert.js';
import createMessages from '../controllers/message/createMessage.js';
import messages from '../controllers/message/listMessage.js';
import deleteMessage from '../controllers/message/deleteMessage.js';


const router = Router();



router.route('/concerts')
    .get(concerts)
    .post(createConcert)

router.route('/concerts/delete/:id')
    .post(deleteConcert);


router.route('/messages')
    .post(createMessages)
     .get(messages)

router.route('/messages/:id')
    .post(deleteMessage)







export default router;