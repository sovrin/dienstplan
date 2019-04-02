const {Server} = require('ws');

/**
 *
 * @param ws
 */
const toEvent = (ws) => (message) => {
    try {
        let {module, payload} = JSON.parse(message);
        ws.emit(module, payload || message);
    } catch (ignore) {
        ws.emit(undefined, message);
    }
};

/**
 *
 * @returns {Function}
 */
const factory = (server) => {
    const ws = new Server({server});

    ws.on('connection', socket => {
        socket.on('message', toEvent(ws));

        console.info('connected');
    });

    bind = (event, handler) => {
        ws.on(event, handler);
    };

    return (next) => (req, res, query, di) => {
        req.ws = ws;
        next(req, res, query, di);
    };
};

/**
 * lazy bind
 */
let bind = () => {};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 31.03.2019
 * Time: 20:45
 */
module.exports = factory;
module.exports.bind = bind;
