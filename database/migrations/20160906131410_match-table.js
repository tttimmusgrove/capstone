
exports.up = function(knex, Promise) {
    return knex.schema.createTable('match', function(table){
      table.increments();
      table.integer('winner_id').references('id').inTable('player').onDelete('cascade');
      table.integer('loser_id').references('id').inTable('player').onDelete('cascade');
      table.string('date');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('match');
};
