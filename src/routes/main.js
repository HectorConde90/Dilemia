import Router from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();


const router = Router();




router.get('/gira', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src/public/gira.html'));
})

router.get('/banda', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src/public/about.html'));
})

router.get('/contacto', (req, res) => {

    res.sendFile(path.join(process.cwd(), 'src/public/contacto.html'));
})

router.get('/login', (req, res) => {

    res.sendFile(path.join(process.cwd(), 'src/public/login.html'));
})






router.get('/admin', (req, res) => {

    const palabra = req.get('Authorization');

    if (palabra === process.env.AUTH) {
        res.sendFile(path.join(process.cwd(), 'src/public/admin.html'));
    }else{
        res.sendFile(path.join(process.cwd(), 'src/public/login.html'));
    }
    
})


export default router;