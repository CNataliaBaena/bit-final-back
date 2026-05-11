import express from 'express';
import "dotenv/config";
import cors from 'cors';

import usuariosRouter from './routers/usuarios.js';
import pedidosRouter from './routers/pedidos.js';
import recetasRouter from './routers/recetas.js';
import productosRouter from './routers/productos.js';

import connectDB from './config/db.js';

import dns from 'node:dns';
import path from "path";
import { fileURLToPath } from "url";


/* =========================
    CONFIG FRONT
========================= */

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(
  __filename
);


/* =========================
    SERVER
========================= */

const server = express();

const PORT =
  process.env.PORT || 4000;


/* =========================
    DNS FIX
========================= */

if (
  process.env.NODE_ENV !== 'production'
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

// Servir archivos estáticos del front
server.use(
  express.static(
    path.join(
      __dirname,
      "public"
    )
  )
);


/* =========================
    ROUTES
========================= */

server.use(
  "/usuarios",
  usuariosRouter
);

server.use(
  "/pedidos",
  pedidosRouter
);

server.use(
  "/recetas",
  recetasRouter
);

server.use(
  "/productos",
  productosRouter
);


/* =========================
    HOME ROUTE
========================= */

server.get(
  "/",
  (req, res) => {

    res.sendFile(
      path.join(
        __dirname,
        "public",
        "index.html"
      )
    );

  }
);


/* =========================
    START
========================= */

server.listen(
  PORT,
  () => {

    console.log(
      `🚀 Server running on port ${PORT}`
    );

  }
);

export default server;