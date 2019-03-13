const {send, json} = require('micro');
const {createHmac} = require('crypto');
const jwt = require('jsonwebtoken');

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

    console.info(encrypted);

    if (encrypted !== user.password) {
        return send(res, 401);
    }

    const expiresIn = 2 * 24 * 60 * 60;
    const token = jwt.sign({id: user.id}, process.env.SECRET, {
        expiresIn: expiresIn,
    });

    send(res, 200, {token, expiresIn});
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 12.03.2019
 * Time: 23:47
 */
module.exports = handle;
