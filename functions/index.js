const functions = require('firebase-functions');
const Friends = require('./src/Friends');

exports.getFriends = functions.https.onCall(() => {
  const friends = Friends();
  return friends;
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
