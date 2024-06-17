import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  name:{
    type :String,
    required : true
  },
  price:{
    type :Number,
    required : true
  },
  featured:{
    type: Boolean,
    default: false
  },
  rating:{
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company:{
    type: String,
    enum:{
      values : ['mi','realme','apple','vivo','oppo'],
      message: '{values} is not supported'
    }
  }
})

export const Product = mongoose.model('Product' ,ProductSchema);