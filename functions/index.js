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
  if (username === 'myusername' && password === 'mysuperpassword123') {
    response.status(200).json({
      message: success,
    });
  }
  response.status(200).json({
    message: 'error on login',
  });
});
