import express from 'express';
import "dotenv/config";
import cors from 'cors';
import usuariosRouter
  from './routers/usuarios.js';
import connectDB from './config/db.js';
import pedidosRouter
  from './routers/pedidos.js';
import dns from 'node:dns';

import recetasRouter
  from './routers/recetas.js';

import productosRouter
  from './routers/productos.js';

import path from "path";

import {
  fileURLToPath
} from "url";


/* =========================
    CONFIG FRONT
========================= */

const __filename =
  fileURLToPath(
    import.meta.url
  );

const __dirname =
  path.dirname(
    __filename
  );


/* =========================
    SERVER
========================= */

const server =
  express();

const PORT =
  process.env.PORT
  || 4000;


/* =========================
    DNS FIX
========================= */

if (
  process.env.NODE_ENV
  !== 'production'
) {

  dns.setServers([
    '8.8.8.8',
    '8.8.4.4'
  ]);

}


/* =========================
    DB
========================= */

connectDB();


/* =========================
    MIDDLEWARES
========================= */

server.use(
  cors()
);

server.use(
  express.json()
);

server.use(
  "/usuarios",
  usuariosRouter
);

server.use(
  "/pedidos",
  pedidosRouter
);

/* =========================
    ROUTES
========================= */

server.use(
  "/recetas",
  recetasRouter
);

server.use(
  "/productos",
  productosRouter
);


/* TEST */
server.get(
  '/',
  (req, res) => {

    res.send(
      'Servidor funcionando 🚀'
    );

  }
);


/* =========================
    STATIC FRONT
========================= */

server.use(
  express.static(
    path.join(
      __dirname,
      "public"
    )
  )
);


/* =========================
    START
========================= */

server.listen(
  PORT,
  () => {

    console.log(
      `Server is running on port ${PORT}`
    );

  }
);


export default server;