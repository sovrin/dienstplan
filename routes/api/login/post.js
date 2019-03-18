const {send, json} = require('micro');
const {createHmac} = require('crypto');
const {auth: {sign}} = require('../../../middleware');

/**
 *
 * @param req
 * @param res
 * @param query
 * @param di
 * @returns {Promise<*>}
 */
const handle = async (req, res, query, di) => {
    const body = await json(req);
    const {username, password} = body;

    const user = di.inject((db) =>
        db.get('users')
            .find({username})
            .value(),
    );

    if (!user) {
        return send(res, 400);
    }

    const encrypted = createHmac('sha1', process.env.SECRET)
        .update(password)
        .digest('hex')
    ;

    if (encrypted !== user.password) {
        return send(res, 401);
    }

    const payload = sign(user);
    send(res, 200, payload);
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 12.03.2019
 * Time: 23:47
 */
module.exports = handle;
