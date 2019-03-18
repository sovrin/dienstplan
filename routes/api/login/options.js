const {send} = require('micro');

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const handle = async (req, res) => {
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');

    send(res, 200);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 13.03.2019
 * Time: 23:27
 */
module.exports = handle;