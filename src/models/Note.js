const { Schema, model } = require("mongoose");


//este esquema modela los datos o propiedades que quiero guardar dentro de la base de datos 
const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);


module.exports = model("Note", NoteSchema);//creacion del modelo