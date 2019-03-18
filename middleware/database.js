const {resolve} = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

/**
 *
 * @returns {Function}
 */
const factory = (file) => {
    if (!process.env.NODE_ENV === 'production') {
        file = 'dev.' + file;
    }

    const path = resolve(process.cwd(), file);
    const adapter = new FileSync(path);
    const db = low(adapter);

    return (next) => (req, res, query, di) => {
        di.register('db', db);

        next(req, res, query, di);
    };
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 07.03.2019
 * Time: 22:53
 */
module.exports = factory;
