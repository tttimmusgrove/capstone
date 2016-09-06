var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  var password = "password";
  var hash = bcrypt.hashSync(password, 8);
  // Deletes ALL existing entries
  return knex('coach').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('coach').insert({first_name: 'Tim', last_name: 'Musgrove', username: 'tttim', password: hash}),
        knex('coach').insert({first_name: 'Ma', last_name: 'Long', username: 'malong', password: hash}),
        knex('coach').insert({first_name: 'Zhang', last_name: 'Jike', username: 'zhangjike', password: hash})
      ]);
    });
};
