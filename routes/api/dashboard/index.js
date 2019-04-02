/**
 *
 * @param next
 * @returns {Function}
 */
const factory = (next) => (req, ...rest) => {
    next(req, ...rest);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 31.03.2019
 * Time: 21:39
 */
module.exports = factory;
