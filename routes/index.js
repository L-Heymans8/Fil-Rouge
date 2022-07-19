
const categoryRouter = require('./category-router');
const userRouter = require('./user-router');
const taskRouter = require('./task-router');
const authRouter = require('./auth-router');

const router = require('express').Router();

router.use('/category', categoryRouter)
router.use('/task', (req, res) => res.sendStatus(501))
router.use('/user', userRouter)
router.use('/auth', (req, res) => res.sendStatus(501))



module.exports = router;