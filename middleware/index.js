/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 07.03.2019
 * Time: 23:13
 */
module.exports = {
    database: require('./database'),
    di: require('./di'),
    auth: require('./auth'),
    cors: require('./cors'),
    migration: require('./migration'),
    ws: require('./ws'),
    store: require('./store'),
};
