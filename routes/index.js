const router = require('express').Router();

require('./register')(router);
require('./login')(router);

module.exports = router;
