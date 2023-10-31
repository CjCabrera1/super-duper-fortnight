const router = require('express').Router();
const userRoutes = require('./userRoutes');
const chatroomRoutes = require('./chatroomRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;