
exports.up = function (knex) {
    return knex.schema.createTable("user_registration", (table) => {
        table.increments("id");
        table.string("name", 255);
        table.string("surname", 255);
        table.string("phone", 255);
        table.string("email", 255);
        table.string("login", 255);
        table.string('password', 255);
    });

};

exports.down = function (knex) {
    return knex.schema.dropTable("user_registration");
};
