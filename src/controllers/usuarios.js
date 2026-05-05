import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

import Usuario
    from '../models/usuarios.js';


/* =========================
    REGISTER CLIENTE
========================= */
export const register =
    async (req, res) => {

        try {

            const {

                email,

                password

            } = req.body;


            /* EXISTE? */
            const existingUser =

                await Usuario.findOne({

                    email

                });


            if (existingUser) {

                return res.status(400).json({

                    message:

                        'El usuario ya existe'

                });

            }


            /* HASH PASSWORD */
            const hashedPassword =

                await bcrypt.hash(

                    password,

                    10

                );


            /* CREAR CLIENTE */
            await Usuario.create({

                email,

                password:

                    hashedPassword,

                role:

                    'cliente'

            });


            res.status(201).json({

                message:

                    'Cliente registrado correctamente'

            });

        } catch (error) {

            console.error(
                error
            );

            res.status(500).json(
                error
            );

        }

    };


/* =========================
    LOGIN
========================= */
export const login =
    async (req, res) => {

        try {

            const {

                email,

                password

            } = req.body;


            const usuario =

                await Usuario.findOne({

                    email

                });


            if (!usuario) {

                return res.status(404).json({

                    message:

                        'Usuario no encontrado'

                });

            }


            const validPassword =

                await bcrypt.compare(

                    password,

                    usuario.password

                );


            if (!validPassword) {

                return res.status(401).json({

                    message:

                        'Contraseña incorrecta'

                });

            }


            const token =

                jwt.sign(

                    {

                        id:

                            usuario._id,

                        role:

                            usuario.role

                    },

                    process.env.JWT_SECRET,

                    {

                        expiresIn:

                            '1d'

                    }

                );


            res.json({

                token,

                role:

                    usuario.role

            });

        } catch (error) {

            console.error(
                error
            );

            res.status(500).json(
                error
            );

        }

    };