require('dotenv').config();
const {version} = require('./package');
const router = require('micro-r');
const {send} = require('micro');
const {database, di, cors, migration} = require('./middleware');

const {use, register, route, ready} = router((req, res) => {
    send(res, 404);
});

use(di());
use(database('db.json'));
use(cors());
use(migration(__dirname + '/migrations', version));

register(__dirname + '/routes');

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 07.03.2019
 * Time: 21:12
 */
module.exports = route;
module.exports.ready = ready;
