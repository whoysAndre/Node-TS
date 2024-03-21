import mongoose, { Schema } from 'mongoose';


const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  available: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
  },

  user: {
    type: Schema.Types.ObjectId,//En como una foreing key hace relacion a mi tabla de categoria
    ref: 'User',//La referencia a ese documentos
    required: true
  },

  category: {
    type: Schema.Types.ObjectId,//En como una foreing key hace relacion a mi tabla de categoria
    ref: 'Category',//La referencia a ese documentos
    required: true
  }


});


export const ProductModel = mongoose.model('Product', productSchema);