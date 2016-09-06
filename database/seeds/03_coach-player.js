var find = require('../helper');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coach').select()
  .then(function(coaches) {
      return knex('player').select()
      .then(function(players) {
          return knex('coach_player').del()
          .then(function () {
              return Promise.all([
                // Inserts seed entries
                knex('coach_player').insert({coach_id: find.findPersonId('tttim', coaches), player_id: find.findPersonId('alexjames', players)}),
                knex('coach_player').insert({coach_id: find.findPersonId('malong', coaches), player_id: find.findPersonId('waldner', players)}),
                knex('coach_player').insert({coach_id: find.findPersonId('zhangjike', coaches), player_id: find.findPersonId('lilyzhang', players)})
              ]);
          });
      })
  })
};
