const {send, json} = require('micro');
const {createHmac} = require('crypto');
const jwt = require('jsonwebtoken');

/**
 *
 * @param req
 * @param res
 * @param query
 * @param di
 * @returns {Promise<void>}
 */
const handle = async (req, res, query, di) => {
    const body = await json(req);
    const {username, password} = body;

    const encrypted = createHmac('sha1', process.env.SECRET)
        .update(password)
        .digest('hex')
    ;

    di.inject((db) => {
        const found = db.get('users')
            .find({username})
            .value()
        ;

        if (found) {
            return found;
        }

        const user = {
            username,
            password: encrypted,
            role: 'user',
        };

        db.get('users')
            .push(user)
            .write()
        ;

        return user;
    });

    const expiresIn = 2 * 24 * 60 * 60;
    const token = jwt.sign({id: username}, process.env.SECRET, {
        expiresIn,
    });

    send(res, 200, {auth: true, token: token});
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 07.03.2019
 * Time: 23:49
 */
module.exports = handle;
