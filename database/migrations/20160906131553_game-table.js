
exports.up = function(knex, Promise) {
    return knex.schema.createTable('game', function(table){
      table.increments();
      table.integer('match_id').references('id').inTable('match').onDelete('cascade');
      table.integer('game_number');
      table.integer('score');
      table.integer('winner_id').references('id').inTable('player').onDelete('cascade');
      table.integer('loser_id').references('id').inTable('player').onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('game');
};
