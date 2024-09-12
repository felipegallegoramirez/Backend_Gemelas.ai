const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    descriptions: {
      type: String,
    },
    square:[{
      id: {
        type: String,
      },
      x: {
        type: Number,
      },
      y: {
        type: Number,
      },
      sizeX: {
        type: Number,
      },
      sizeY: {
        type: Number,
      },
      background_color: {
        type: String,
      },
      border_color: {
        type: String,
      },
      text_color: {
        type: String,
      },
      text: {
        type: String,
      },
      conect: [{
        type: String,
      }],

    }],
    conections:[{
      id: {
        type: String,
      },
      id_entry: {
        type: String,
      },
      id_exit: {
        type: String,
      },
      x_entry: {
        type: Number,
      },
      y_entry: {
        type: Number,
      },
      x_exit: {
        type: Number,
      },
      y_exit: {
        type: Number,
      },
    }],
    data:[{
      square_id: {
        type: String,
      },
      type: {
        type: String,
      },
      promt: {
        type: String,
      },
      extra: {
        type: String,
      },
    }]
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Claims || mongoose.model("Claims", StorageScheme);
