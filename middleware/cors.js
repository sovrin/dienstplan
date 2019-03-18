/**
 *
 * @returns {Function}
 */
const factory = () => {
    return (next) => (req, res, query, di) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

        next(req, res, query, di);
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 13.03.2019
 * Time: 23:33
 */
module.exports = factory;
