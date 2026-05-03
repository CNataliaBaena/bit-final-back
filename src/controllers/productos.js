import Producto
from '../models/productos.js';


/* =========================
   GET
========================= */

export const getProductos =
async (
  req,
  res
) => {

  const productos =
    await Producto.find();

  res.json(
    productos
  );

};


/* =========================
   POST
========================= */

export const crearProducto =
async (
  req,
  res
) => {

  const producto =
    new Producto(
      req.body
    );

  const saved =
    await producto.save();

  res.status(201)
    .json(saved);

};


/* =========================
   PUT
========================= */

export const actualizarProducto =
async (
  req,
  res
) => {

  const updated =
    await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

  res.json(
    updated
  );

};


/* =========================
   DELETE
========================= */

export const eliminarProducto =
async (
  req,
  res
) => {

  await Producto.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message:
      'Producto eliminado'
  });

};