
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cleaning', (table) => {
      table.increments('id')
      table.integer('tank_id')
      table.string('date')
      table.integer('litres_changed')
      table.string('notes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cleaning')
};
