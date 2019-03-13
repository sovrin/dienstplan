const {verify} = require('jsonwebtoken');
const {send} = require('micro');

/**
 *
 * @returns {Function}
 */
const factory = () => {
    return (next) => (req, res, query, di) => {
        const {headers: {authorization}} = req;

        if (!authorization) {
            return send(res, 403);
        }

        const [_, token] = authorization.split(' ');

        try {
            const {id} = verify(token, process.env.SECRET, {
                maxAge: '24h',
            });

            req.user = id;

            return next(req, res, query, di);
        } catch (e) {
            return send(res, 403);
        }
    };
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 07.03.2019
 * Time: 22:53
 */
module.exports = factory;
