export function up(knex) {
  return knex.schema.createTable('author', (author) => {
    author.increments('id').primary();
    author.string('firstName', 255).notNullable();
    author.string('lastName', 255).notNullable();
    author.timestamp('createdAt').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    author.timestamp('updatedAt').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  })
  .createTable('quote', (quote) => {
    quote.increments('id').primary();
    quote.integer('authorId').unsigned().notNullable().references('id').inTable('author').onDelete('cascade');
    quote.string('text', 255).notNullable();
    quote.timestamp('createdAt').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    quote.timestamp('updatedAt').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

export function down(knex) {
  return knex.schema.droptTable('quote').dropTable('author');
}
