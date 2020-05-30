const knex = require('knex');

class BaseDBModel{
    constructor(dbName){
        (async () => {
            this._db = knex({
                client: 'sqlite3',
                connection: {
                    filename: dbName
                }
            })
        })
    }

    async CreateTable(tblName, cols, schName = null){
        if(schName !== null || schName !== undefined){
            this._db.schema.createSchema(schName)
        }

        this._db.schema.createTable(tblName, function(table){
            table.increments();
        })
    }

    async SeedTable(tblName, data){

    }

    async SelectTable(){

    }

    async InsertIntoTable(){

    }

    async UpdateTable(){

    }

    async DropTable(){

    }
}

export default GramHighSchoolDb = new BaseDBModel('');

