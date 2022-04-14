const mongoose = require('mongoose');
const ChatSchema = mongoose.Schema(
  {
    chatName: { type: String },
    latestMsg: { type: String },
    isGroupChat: { type: Boolean },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);
const ChatModel = mongoose.model('Chat', ChatSchema);
module.export = ChatModel;
