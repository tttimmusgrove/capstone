
exports.up = function(knex, Promise) {
    return knex.schema.createTable('point', function(table){
      table.increments();
      table.integer('match_id').references('id').inTable('match').onDelete('cascade');
      table.integer('winner_id').references('id').inTable('player').onDelete('cascade');
      table.integer('loser_id').references('id').inTable('player').onDelete('cascade');
      table.integer('point_number');
      table.integer('effort_rating');
      table.integer('skill_rating');
      table.string('ball');
      table.string('mode');
      table.string('shot');
      table.string('side');
      table.boolean('same');
      table.string('tactic');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('point');
};
