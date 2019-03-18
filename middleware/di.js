/**
 *
 * @returns {function(*): Function}
 */
const factory = () => {

    const dependency = {};

    /**
     *
     * @param fn
     * @returns {*}
     */
    const inject = function (fn) {
        const matches = extract(fn);
        const match = matches[1];

        if (match === '') {
            return fn.apply(this);
        }

        const deps = match
            .split(',')
            .map(name => name.trim())
            .map(name => get(name))
        ;

        return fn.apply(this, deps);
    };

    /**
     *
     * @param name
     * @returns {*}
     */
    const get = (name) => {
        return dependency[name];
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
     * @param name
     * @param fn
     */
    const register = (name, fn) => {
        dependency[name] = fn;
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
    return (next) => (req, res, query) => {
        next(req, res, query, {inject, register, get});
    };
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 08.03.2019
 * Time: 00:00
 */
module.exports = factory;
