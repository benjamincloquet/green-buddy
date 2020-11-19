const router = require('express').Router();

require('./register')(router);
require('./login')(router);
require('./products')(router);
require('./cart')(router);

module.exports = router;
