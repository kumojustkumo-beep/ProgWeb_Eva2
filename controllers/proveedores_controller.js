const connection = require('../db/connection');

const crearProveedor = (req, res) => {

    const datos = req.body;

    const sql = `
    INSERT INTO proveedores_logistica
    (razon_social, contacto_nombre, telefono, email, ciudad, calificacion)
    VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [
        datos.razon_social,
        datos.contacto_nombre,
        datos.telefono,
        datos.email,
        datos.ciudad,
        datos.calificacion
    ], (error, resultado) => {

        if (error) {
            res.status(500).json(error);
        } else {
            res.json({
                mensaje: 'Proveedor creado',
                resultado
            });
        }

    });

};

const obtenerProveedores = (req, res) => {

    const sql = 'SELECT * FROM proveedores_logistica';

    connection.query(sql, (error, resultados) => {

        if (error) {
            res.status(500).json(error);
        } else {
            res.json(resultados);
        }

    });

};

const obtenerProveedorPorId = (req, res) => {

    const id = req.params.id;

    const sql = 'SELECT * FROM proveedores_logistica WHERE id = ?';

    connection.query(sql, [id], (error, resultados) => {

        if (error) {
            res.status(500).json(error);
        } else {
            res.json(resultados);
        }

    });

};

const actualizarProveedor = (req, res) => {

    const id = req.params.id;

    const datos = req.body;

    const sql = `
    UPDATE proveedores_logistica
    SET razon_social = ?,
    contacto_nombre = ?,
    telefono = ?,
    email = ?,
    ciudad = ?,
    calificacion = ?
    WHERE id = ?
    `;

    connection.query(sql, [
        datos.razon_social,
        datos.contacto_nombre,
        datos.telefono,
        datos.email,
        datos.ciudad,
        datos.calificacion,
        id
    ], (error, resultado) => {

        if (error) {
            res.status(500).json(error);
        } else {
            res.json({
                mensaje: 'Proveedor actualizado',
                resultado
            });
        }

    });

};

const eliminarProveedor = (req, res) => {

    const id = req.params.id;

    const sql = 'DELETE FROM proveedores_logistica WHERE id = ?';

    connection.query(sql, [id], (error, resultado) => {

        if (error) {
            res.status(500).json(error);
        } else {
            res.json({
                mensaje: 'Proveedor eliminado',
                resultado
            });
        }

    });

};

module.exports = {
    crearProveedor,
    obtenerProveedores,
    obtenerProveedorPorId,
    actualizarProveedor,
    eliminarProveedor
};