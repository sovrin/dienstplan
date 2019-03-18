const {send} = require('micro');

/**
 *
 * @param next
 * @returns {Function}
 */
const factory = (next) => (req, res, ...rest) => {
    const {user: {role}} = req;

    if (role !== 'admin') {
        return send(res, 403);
    }

    return next(req, res, ...rest);
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 07.03.2019
 * Time: 21:17
 */
module.exports =  factory;
