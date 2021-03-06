
exports.up = function(knex, Promise) {
    return knex.schema.createTable('player', function(table){
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('username');
      table.string('password');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('player');
};
