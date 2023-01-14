const mongoose = require("mongoose");

const listSchema = {
  name: String,
  items: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Item', unique: false,
  }]
};

mongoose.model("List", listSchema)
module.exports = mongoose.model('List')
