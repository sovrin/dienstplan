const {resolve} = require('path');
const {writeFileSync} = require('fs');

/**
 *
 * @param path
 * @returns {function(*): Function}
 */
const factory = (path) => {

    /**
     *
     * @param name
     * @returns {any}
     */
    const load = (name) => {
        const cursor = resolve(path, `${name}.json`);

        return require(cursor);
    };

    const push = (entity) => {

    };

    /**
     *
     * @param name
     * @returns {any}
     */
    const modify = (name) => {


        entities.save = () => writeFileSync(cursor, JSON.stringify(entities));
        entities.append = (entries) => {
            entities.push(entries);

            return entities;
        };

        entities.set = (overwrite) => entities = overwrite;

        return entities;
    };

    /**
     *
     * @param fn
     * @returns {*}
     */
    const store = function (fn) {
        const matches = extract(fn);
        const match = matches[1];

        if (match === '') {

            return fn.apply(this);
        }

        const stores = match
            .split(',')
            .map(name => name.trim())
            .map(modify)
        ;

        return fn.apply(this, stores);
    };

    /**
     *
     * @param fn
     * @returns {string}
     */
    const stringify = (fn) => {
        return Function.prototype.toString.call(fn);
    };

    /**
     *
     * @param fn
     * @returns {RegExpMatchArray}
     */
    const extract = (fn) => {
        const string = stringify(fn);
        return string.match(/\((.*?)\)/) || string.match(/(\w+)/);
    };

    /**
     *
     */
    return (next) => (req, res, query, di) => {
        di.register('store', store);

        next(req, res, query, di);
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 02.04.2019
 * Time: 00:46
 */
module.exports = factory;
