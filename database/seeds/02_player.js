var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  var password = "password";
  var hash = bcrypt.hashSync(password, 8);
  // Deletes ALL existing entries
  return knex('player').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('player').insert({first_name: 'Alex', last_name: 'James', username: 'alexjames', password: hash}),
        knex('player').insert({first_name: 'Jan Ove', last_name: 'Waldner', username: 'waldner', password: hash}),
        knex('player').insert({first_name: 'Lily', last_name: 'Zhang', username: 'lilyzhang', password: hash})
      ]);
    });
};
