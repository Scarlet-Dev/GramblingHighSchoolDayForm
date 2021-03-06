'use strict';
const knex = require('knex');

export default class BaseDBModel{
    constructor(dbName, schName){
        (async () => {
            this._db = knex({
                client: 'sqlite3',
                connection: {
                    filename: dbName
                }
            })
        })
        this._schName = schName;
    }

    async CreateTable(tblName, cols){
        if(schName !== null || schName !== undefined){
            this._db.schema.createSchema(this._schName)
        }

        this._db.schema.createTable(tblName, function(table){
            cols.map(function(colItem) {
                switch (typeof colItem.type){
                    case "string":
                        table.string(colItem.name, 255);

                    case "number":
                        if(colItem.useId){
                            table.increments(colItem.name);
                        }
                        else{
                            table.integer(colItem.name);
                        }

                    case "boolean":
                        table.boolean(colItem.name);

                    case "bigint":
                        table.decimal(colItem.name, 2, 8)
                    
                    case "object":
                        if(colItem.type instanceof Date){
                            table.dateTime(colItem.name, {
                                useTz: false,
                                precision: 2
                            });
                        }
                        else if(colItem.type instanceof Array){
                            table.json(colItem.name)
                        }
                        
                    default:
                        table.string(colItem, 1000);
                }
            })
        })
    }

    async SeedTable(tblName, data){
        this._db.seed.run({
            
        })
    }

    async SelectTable(tblName){
        this._db(tblName).withSchema(this._schName).select({
            
        })
    }

    async InsertIntoTable(tblName){
        this._db(tblName).withSchema(this._schName).insert({

        })
    }

    async UpdateTable(tblName){
        this._db.withSchema(this._schName).update({

        }).table(tblName).where({

        })
    }

    async DropTable(tblName){
        this._db.withSchema(this._schName).delete().table(tblName).where()
    }
}


