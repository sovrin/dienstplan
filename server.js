require('dotenv').config();

const {version} = require('./package');
const {send, default: micro} = require('micro');
const router = require('micro-r');
const {database, di, cors, migration, ws, store} = require('./middleware');

const {use, register, route, ready} = router((req, res) => {
    send(res, 404);
});

const server = micro(route);

// use(ws(server));
use(di());
// use(database('db.json'));
use(store(__dirname + '/stores'));
use(cors());
use(migration(__dirname + '/migrations', version));

register(__dirname + '/routes');

server.listen(process.env.PORT);

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 07.03.2019
 * Time: 21:12
 */
module.exports.ready = ready;
