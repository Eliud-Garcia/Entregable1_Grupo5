import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send("lista usuarios");
});

router.get('/:id', (req, res) => {
    res.send("detalles de un usuario");
});

router.post('/', (req, res) => {
    res.send("crear un nuevo usuario");
});

router.put('/:id', (req, res) => {
    res.send("actualizar informacion de un usuario");
});

router.delete('/:id', (req, res) => {
    res.send("eliminar un usuario por id");
});

export default router;