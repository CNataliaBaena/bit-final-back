import express
    from 'express';

import {

    crearPedido,

    getPedidos,

    actualizarEstadoPedido

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


export default router;