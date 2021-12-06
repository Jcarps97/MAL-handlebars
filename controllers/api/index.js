const router = require('express').Router();
// const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');
const entryRoutes = require('./entry-routes');

// router.use('/comment', commentRoutes);
router.use('/users', userRoutes);
router.use('/entry', entryRoutes);

module.exports = router;