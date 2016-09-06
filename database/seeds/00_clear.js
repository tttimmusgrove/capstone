exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE coach, player, coach_player, match, game, point RESTART IDENTITY CASCADE;');
};
