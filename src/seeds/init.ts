import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  return knex("author").del()
    .then(() => {
      return knex("author").insert([
        { id: 1, firstName: 'John', lastName: 'Johnson' },
        { id: 2, firstName: 'Martin', lastName: 'Fowler' },
        { id: 3, firstName: 'Jason', lastName: 'Lengstorf' },
        { id: 4, firstName: 'Linus', lastName: 'Torvalds' },
        { id: 5, firstName: 'Robert', lastName: 'Martin' },
        { id: 6, firstName: 'Bill', lastName: 'Gates' },
        { id: 7, firstName: 'Felipe', lastName: 'Fortes' },
        { id: 8, firstName: 'Niels', lastName: 'Bohr' },
        { id: 9, firstName: 'Jamie', lastName: 'Zawinski' },
      ]);
    });
}
