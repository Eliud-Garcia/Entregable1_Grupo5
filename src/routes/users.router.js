import {Router} from 'express';
import {uploadUserAvatar} from '../middlewares/multer.middleware.js';

const router = Router();

router.get('/', (req, res) => {
    res.send("lista usuarios");
});

router.get('/:id', (req, res) => {
    res.send("detalles de un usuario");
});

router.post('/', uploadUserAvatar.single('avatar'), (req, res) => {
    res.status(201).json({
        message: "usuario creado",
        file: req.file.filename
    });
});

router.put('/:id', (req, res) => {
    res.send("actualizar informacion de un usuario");
});

router.delete('/:id', (req, res) => {
    res.send("eliminar un usuario por id");
});

export default router;