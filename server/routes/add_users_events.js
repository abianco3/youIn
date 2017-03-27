'use strict';

let db = require('../config');

module.exports = function(req, res) {
  let userIds = req.body.userIds;
  let eventId = req.body.eventId;


db.task(t => {

  userIds.forEach(id => {
    t.one('INSERT into USERS_EVENTS (event_id, user_id) VALUES ($1, $2)', [eventId, id])
  })
  
})
.then((result) => res.send() )

};

//   let promises = [];
//   Promise.all(promises)
//   .then( (result) => {

//   console.log('result from query in add_users_events.js', result);
//   res.status(201).json(result);
// })
// .catch( (err) => {
//   res.status(404).send(err, "Invalid user_id, please login");
// })