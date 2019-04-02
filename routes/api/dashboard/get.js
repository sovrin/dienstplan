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
    const store = di.get('store');

    const assignments = store(
            (assignments) => assignments
        )
        .append({
            'name': 'Wurst',
        })
        .save()
    ;

    // const assignments = db.get('assignments').value();

    send(res, 200, {assignments});
};

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 12.03.2019
 * Time: 21:50
 */
module.exports = handle;
