import mongoose
    from 'mongoose';


const productoSchema =
    new mongoose.Schema(
        {
            name: String,

            /* NUEVO */
            category: String,

            description: String,

            price: Number,

            ingredients: String,

            instructions: String,

            image: String
        },
        {
            timestamps: true
        }
    );


export default
    mongoose.model(
        'Producto',
        productoSchema
    );