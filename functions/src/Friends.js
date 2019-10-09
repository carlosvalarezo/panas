const friendsDb = require('./Friends.db');

const getFriends = () => {
  console.log(friendsDb);
  return friendsDb;
};

module.exports = getFriends;
