const { Schema, model } = require("mongoose");

const bcrypt = require("bcryptjs");//par cifrar contraseña

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

//este metodo cifra la contraseña 
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//este metodo compara la contraseña cifrada con la contraseña que el usuario escribe 
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);