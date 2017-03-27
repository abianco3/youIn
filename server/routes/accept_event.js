'use strict';


let db = require('../config');

module.exports = (req, res) => {
  
  let userId = req.user['user_id'];
  
  let eventId = req.body['eventId'];
  
  db.query('UPDATE users_events set current_status = \'accepted\' where event_id =$1 and user_id =$2', [eventId, userId])
  .then((result) => {
    console.log('accepted route success', result);
    res.status(201).send('event accepted');
  })
  .catch((err) => {
    console.log('accepted route error', err);
    res.status(404).send('this was an error');
  });
};