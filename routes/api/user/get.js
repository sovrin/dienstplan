const {send} = require('micro');

/**
 *
 * @param req
 * @param res
 * @param query
 * @param di
 * @returns {Promise<void>}
 */
const handle = async (req, res, query, di) => {
    send(res, 200, 'foobar');
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 12.03.2019
 * Time: 21:50
 */
module.exports = handle;
