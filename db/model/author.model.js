import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const authorSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      bio:  String,
      birthDate: Date,
       
      books: [{
        type: Schema.Types.objectId,
        ref: 'bookModel'
      }]
    });
const authorModel= mongoose.model("Author",authorSchema)
export default authorModel;