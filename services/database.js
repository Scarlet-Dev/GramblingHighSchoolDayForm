import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb () {
    const [studApps, contacts, states, programs] = await Promise.all([
        open({
            filename: 'db/programs.db',
            driver: sqlite3.cached.Database
        }),
        
        open({
            filename: 'db/states.db',
            mode: sqlite3.OPEN_READONLY,
            driver: sqlite3.cached.Database
        }),
        
        open({
            filename: 'db/student-apps.db',
            driver: sqlite3.Database
        }),

        open({
            filename: 'db/contacts.db',
            driver: sqlite3.Database
        })
    ]);

    await studApps.migrate({
        migrationsPath: '...'
    })
}