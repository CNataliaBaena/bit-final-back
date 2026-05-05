import Pedido
    from '../models/pedidos.js';


/* =========================
    CREAR PEDIDO
========================= */
export const crearPedido =
    async (req, res) => {

        try {

            const pedido =

                await Pedido.create({

                    ...req.body,
                    /* CLIENTE LOGUEADO */
                    usuarioId:
                        req.user.id

                });


            res.status(201).json(

                pedido

            );

        } catch (error) {

            res.status(500).json(

                error

            );

        }

    };


/* =========================
    OBTENER PEDIDOS
========================= */
export const getPedidos =
    async (req, res) => {

        console.log(
            'USER:',
            req.user
        );

        console.log(
            'ROLE:',
            req.user.role
        );

        try {

            let pedidos;


            /* ADMIN VE TODOS */
            if (

                req.user.role ===
                'admin'

            ) {

                pedidos =

                    await Pedido.find();

            }


            /* CLIENTE VE SOLO LOS SUYOS */
            else {

                pedidos =

                    await Pedido.find({

                        usuarioId:

                            req.user.id

                    });

            }


            res.json(

                pedidos

            );

        } catch (error) {

            res.status(500).json(

                error

            );

        }

    };


/* =========================
    ACTUALIZAR ESTADO
========================= */
export const actualizarEstadoPedido =

    async (req, res) => {

        try {

            /* SOLO ADMIN */
            if (

                req.user.role !==
                'admin'

            ) {

                return res.status(403).json({

                    message:

                        'No autorizado'

                });

            }


            const pedido =

                await Pedido.findByIdAndUpdate(

                    req.params.id,

                    {

                        estado:

                            req.body.estado

                    },

                    {

                        new: true

                    }

                );


            res.json(

                pedido

            );

        } catch (error) {

            res.status(500).json(

                error

            );

        }

    };