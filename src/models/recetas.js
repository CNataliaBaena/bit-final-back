import {Schema , model} from 'mongoose';

const recipeSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    ingredients: {
        type: String,
    },
    instructions: {
        type: String,
    },
},
{versionKey: false, timestamps: true },
);

export default model('Recipe', recipeSchema);

