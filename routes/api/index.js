const {auth} = require('../../middleware');
const {parse} = require('url');

const authenticated = auth();

/**
 *
 * @param next
 * @returns {Function}
 */
const factory = (next) => (req, ...rest) => {
    const {url} = req;
    const {pathname} = parse(url);

    const whitelist = [
        '/api/login', '/api/register',
    ];

    if (whitelist.includes(pathname)) {
        return next(req, ...rest);
    }

    return authenticated(next)(req, ...rest);
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 07.03.2019
 * Time: 21:17
 */
module.exports =  factory;
