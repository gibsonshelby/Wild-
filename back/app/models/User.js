const db = require('../database');


class User {



        constructor(data = {}) {
            for (const prop in data) {
                this[prop] = data[prop];
            }
        }




static async findOne (name) {
    const {rows} = await db.query('SELECT * "user" WHERE name = $1;' ,
    [name]);

    if (rows[0]){
    return new User(rows[0]);

    }else{
        return null ; 
    }

}

async save (){

    const user = await db.query('SELECT * FROM new_user($1);', )


}












}