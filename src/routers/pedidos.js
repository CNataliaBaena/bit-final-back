import express
    from 'express';

import {

    crearPedido,

    getPedidos,

    actualizarEstadoPedido,

    eliminarPedido

} from '../controllers/pedidos.js';

import authMiddleware
    from '../middlewares/auth.js';


const router =

    express.Router();


/* =========================
    CREAR PEDIDO
========================= */
router.post(

    '/',

    authMiddleware,

    crearPedido

);


/* =========================
    OBTENER PEDIDOS
========================= */
router.get(

    '/',

    authMiddleware,

    getPedidos

);


/* =========================
    ACTUALIZAR ESTADO
========================= */
router.put(

    '/:id',

    authMiddleware,

    actualizarEstadoPedido

);


/* =========================
    ELIMINAR PEDIDO
========================= */
router.delete(

    '/:id',

    authMiddleware,

    eliminarPedido

);


export default router;