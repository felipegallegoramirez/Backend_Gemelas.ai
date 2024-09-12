const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    skills: [{
      type: String,
    }],
    state: {
      type: String,
    },
    flujo_id: {
      type: String,
    },
    user_id: {
        type: String,
      },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Employe || mongoose.model("Employe", StorageScheme);