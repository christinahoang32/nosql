const { Schema, Types } = require('mongoose');
const formattedDate = require("../utils/formatDate.js")

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type:String,
            required:true,
            maxlength:280,
        },
        userName: {
            type:String,
            required:true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => formattedDate(date)
        },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
);

module.exports = reactionSchema