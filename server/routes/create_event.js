'use strict';

let db = require('../config');

module.exports = function(req, res) {

  let event = req.body;
  event.owner = req.user.user_id;

  console.log('inside create_event', event);
  // query the database for events
  db.one('INSERT into EVENTS (owner, title, short_desc, description, location, date, time, min)\
  VALUES (${owner}, ${title}, ${short_desc}, ${description}, ${location}, ${date}, ${time}, ${min}) returning event_id', event)
  .then( (result) => {
    console.log('result from queryasync in create_event.js', result);
    res.status(201).json(result);
  })
  .catch( (err) => {
    res.status(404).send(err, "Invalid user_id, please login");
  });
};

