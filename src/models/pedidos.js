import mongoose
  from 'mongoose';


const pedidoSchema =

  new mongoose.Schema({

    /* =========================
        CLIENTE
    ========================= */
    usuarioId: {

      type:

        mongoose.Schema.Types.ObjectId,

      ref:

        'Usuario',

      required:

        true

    },


    /* =========================
        PRODUCTOS
    ========================= */
    productos: [

      {

        name:

          String,

        price:

          Number,

        quantity:

          Number

      }

    ],


    /* =========================
        TOTAL
    ========================= */
    total: {

      type:

        Number,

      required:

        true

    },


    /* =========================
        ESTADO
    ========================= */
    estado: {

      type:

        String,

      default:

        'pendiente'

    },


    /* =========================
        FECHA
    ========================= */
    fecha: {

      type:

        Date,

      default:

        Date.now

    }

  });


const Pedido =

  mongoose.model(

    'Pedido',

    pedidoSchema

  );


export default Pedido;