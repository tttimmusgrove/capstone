
exports.up = function(knex, Promise) {
    return knex.schema.createTable('coach_player', function(table){
      table.increments();
      table.integer('coach_id').references('id').inTable('coach').onDelete('cascade');
      table.integer('player_id').references('id').inTable('player').onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('coach_player');
};
