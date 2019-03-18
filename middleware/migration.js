const {resolve} = require('path');
const {readdir, stat} = require('fs');
const {promisify} = require('util');

const read = promisify(readdir);
const stats = promisify(stat);

/**
 *
 * @param path
 * @returns {Promise<Array>}
 */
const traverse = async (path) => {
    const absolute = resolve(path);
    const files = [];

    const bind = async (name) => {
        const pointer = resolve(absolute, name);

        if ((await stats(pointer)).isDirectory()) {
            return traverse(pointer);
        }

        if (!name.endsWith('.js')) {
            return;
        }

        const file = require(pointer);
        files.push(file);
    };

    for (const file of await read(path)) {
        await bind(file);
    }

    return files;
};

/**
 *
 * @returns {function(*): Function}
 */
const factory = (path, version) => {

    const migration = (entry) => {
        const {up, down} = entry

    };

    migration.version = version;

    /**
     *
     */
    return (next) => (req, res, query, di) => {
        const db = di.get('db');

        // const roles = db.get('users')
        //     .find({username})
        //     .value()
        // ;
        //
        // console.info(db);
        //
        di.register('migration', migration);

        next(req, res, query, di);
    };
};

module.exports = factory;