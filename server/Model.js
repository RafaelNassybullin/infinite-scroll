const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const SecureDataModel = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

SecureDataModel.plugin(mongoosePaginate);

module.exports = model("SecureDataModel", SecureDataModel);
