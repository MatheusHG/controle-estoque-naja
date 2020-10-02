exports.up = function(knex) {
    return knex.schema.createTable('produto', function (table){
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('categoria').notNullable();
        table.decimal('preco').notNullable();
        table.int('quantidade').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('produto');
};
