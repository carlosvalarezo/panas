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
