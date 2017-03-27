'use strict';

let db = require('../config');

module.exports = (req, res) => {
  let userId = req.user['user_id'];
  let eventId = req.body['eventId'];
  
  db.query('DELETE from users_events where event_id =$1 and user_id = $2', [eventId, userId])
  .then((result) => {
    console.log('deleted route success', result);
    res.status(201).send('event deleted');
  })
  .catch((err) => {
    console.log('deleted route error', err);
    res.status(404);
  });
};