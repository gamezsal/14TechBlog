const router = require('express').Router();

const apiRoutes = require('./api/')
const homeRoutes = require('./homeRoutes');
// Use homeRoutes file to route views
router.use('/',homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
