const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    conversation: [{
        role: {
            type: String,
        },
        text: {
            type: String,
        }
    }],
    calification: [{
        id: {
            type: String,
        },
        total: {
            type: Number,
        },
    }],
    summary: {
        type: String,
    },
    points: {
      type: Number,
    },
    external: [{
        email: {
            type: String,
        },
        name: {
            type: String,
        },
        phone: {
            type: String,
        },
        cedula: {
            type: String,
        },
        id: {
            type: String,
        },
    }],

    user_id: {
        type: String,
      },
    response_id: [{
    type: String,
    }],
    employe_id: {
      type: String,
    },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Response || mongoose.model("Response", StorageScheme);