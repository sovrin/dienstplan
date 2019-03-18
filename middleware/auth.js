const {verify, sign: _sign} = require('jsonwebtoken');
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
            req.user = verify(token, process.env.SECRET, {
                maxAge: '24h',
            });

            return next(req, res, query, di);
        } catch (e) {
            return send(res, 403);
        }
    };
};

/**
 *
 * @param username
 * @param role
 * @param expiresIn
 * @returns {*}
 */
const sign = ({username, role}, expiresIn = 2 * 24 * 60 * 60) => {
    const token = _sign({username, role}, process.env.SECRET, {
        expiresIn,
    });

    return {
        token,
        expiresIn,
    }
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 07.03.2019
 * Time: 22:53
 */
module.exports = factory;
module.exports.sign = sign;
