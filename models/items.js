const mongoose = require("mongoose");

const itemsSchema = {
  name: String
};


mongoose.model("Item", itemsSchema)
module.exports = mongoose.model('Item')
