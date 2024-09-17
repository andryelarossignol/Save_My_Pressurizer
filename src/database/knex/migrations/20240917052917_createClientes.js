exports.up = knex => knex.schema.createTable("clientes", table => {
    table.increments("id");
    table.text('first_name').notNullable(); 
    table.text('last_name').notNullable();
    table.string('cpf', 11).unique().notNullable(); 
    table.text('email').unique().notNullable();
    table.string('phone', 15).notNullable(); 
    table.string('postal_code', 8).notNullable(); 
    table.text('street').notNullable(); 
    table.integer('number').notNullable();
    table.text('complement'); 
    table.date('installation_date').notNullable();
    table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
  
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
  });
  
  exports.down = knex => knex.schema.dropTable("clientes");
