const functions = require('firebase-functions');
const Panas = require('./src/Panas');

exports.getPanas = functions.https.onCall(() => {
  const panas = Panas();
  return panas;
});

exports.getHello = functions.https.onCall(name => {
  return {data: name.name + ' world from firebase!'};
});

exports.addMessage = functions.https.onCall(data => {
  const text = data.text.toUpperCase();
  return {
    data: text,
  };
});

exports.panasLogin = functions.https.onRequest((request, response) => {
  const {username, password} = request.body;
  if (username === 'abc' && password === 'abc') {
    response.status(200).json({
      message: true,
    });
  }
  response.status(200).json({
    message: false,
  });
});

exports.panasList = functions.https.onRequest((request, response) => {
  response.status(200).json({
    panas: Panas(),
  });
});
