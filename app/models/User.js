const db = require('../database');


class User {

    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const { rows } = await db.query('SELECT * FROM "user" ');

        return rows.map((row) => {
            return new User(row)
        })
    }

    async save() {

        const user = await db.query('SELECT * FROM new_user($1);', [this])
        this.id = user.rows[0].id

    }

};

module.exports = User







