const { timeStamp } = require('console');
const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
    thoughttext: {
        type:String,
        required:true,
        maxlength: 280,
        minlength: 1,
    },
    createdAt: {
        type:Date,
        default: Date.now,
        get:timeStamp=>dateFormat(timeStamp)
    },
    username: {
        type:String,
        required:true,
    },
    reactions: [reactionSchema],
},
{
  toJSON: {
    getters: true,
  },
}
);


thoughtSchema.virtual('reactioncount').get(function() {
    return this.reactions.length;
  });

  const Thought = model('Thought', thoughtSchema);

  module.exports = Thought;