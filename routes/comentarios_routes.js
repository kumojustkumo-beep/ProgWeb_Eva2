const express = require('express');
const router = express.Router();

const {
    crearComentario,
    obtenerComentarios,
    obtenerComentarioPorId,
    actualizarComentario,
    eliminarComentario
} = require('../controllers/comentarios_controller');

router.post('/', crearComentario);

router.get('/', obtenerComentarios);

router.get('/:id', obtenerComentarioPorId);

router.put('/:id', actualizarComentario);

router.delete('/:id', eliminarComentario);

module.exports = router;