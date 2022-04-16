const express = require('express');
const chats = require('./db/chats');
const app = express();
app.get('/chat', (req, res) => res.send(chats));
app.get('/chat/:chatId', (req, res) => {
  const foundChat = chats.find(chat => chat._id === req.params.chatId);
  if (foundChat === undefined) {
    res.send('no items found');
  } else {
    res.send(foundChat);
  }
});
app.listen(process.env.PORT || 5000, () => console.log('i am here'));
