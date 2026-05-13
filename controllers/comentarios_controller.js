const connection = require('../db/connection');

const crearComentario = (req, res) => {

    const datos = req.body;

    const sql = `
    INSERT INTO comentarios_blog
    (autor, contenido, fecha_publicacion, articulo_titulo, aprobado, ip_origen)
    VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [
        datos.autor,
        datos.contenido,
        datos.fecha_publicacion,
        datos.articulo_titulo,
        datos.aprobado,
        datos.ip_origen
    ], (error, resultado) => {

        if (error) {
            res.status(500).json(error);
        } else {
            res.json({
                mensaje: 'Comentario creado',
                resultado
            });
        }

    });

};

const obtenerComentarios = (req, res) => {

    const sql = 'SELECT * FROM comentarios_blog';

    connection.query(sql, (error, resultados) => {

        if (error) {
            res.status(500).json(error);
        } else {
            res.json(resultados);
        }

    });

};

const obtenerComentarioPorId = (req, res) => {

    const id = req.params.id;

    const sql = 'SELECT * FROM comentarios_blog WHERE id = ?';

    connection.query(sql, [id], (error, resultados) => {

        if (error) {
            res.status(500).json(error);
        } else {
            res.json(resultados);
        }

    });

};

const actualizarComentario = (req, res) => {

    const id = req.params.id;

    const datos = req.body;

    const sql = `
    UPDATE comentarios_blog
    SET autor = ?,
    contenido = ?,
    fecha_publicacion = ?,
    articulo_titulo = ?,
    aprobado = ?,
    ip_origen = ?
    WHERE id = ?
    `;

    connection.query(sql, [
        datos.autor,
        datos.contenido,
        datos.fecha_publicacion,
        datos.articulo_titulo,
        datos.aprobado,
        datos.ip_origen,
        id
    ], (error, resultado) => {

        if (error) {
            res.status(500).json(error);
        } else {
            res.json({
                mensaje: 'Comentario actualizado',
                resultado
            });
        }

    });

};

const eliminarComentario = (req, res) => {

    const id = req.params.id;

    const sql = 'DELETE FROM comentarios_blog WHERE id = ?';

    connection.query(sql, [id], (error, resultado) => {

        if (error) {
            res.status(500).json(error);
        } else {
            res.json({
                mensaje: 'Comentario eliminado',
                resultado
            });
        }

    });

};

module.exports = {
    crearComentario,
    obtenerComentarios,
    obtenerComentarioPorId,
    actualizarComentario,
    eliminarComentario
};