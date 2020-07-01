import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("author").del()
        .then(() => {
            // Inserts seed entries
            return knex("author").insert([
                { id: 1, firstName: 'John', lastName: 'Johnson' },
            ]);
        });
}
