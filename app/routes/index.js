const {
    getUserById,
    getUsersList,
    addUser,
} = require('../controllers/main');

const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('/', async (ctx) => {
    ctx.body = 'Workin\' on it!';
});

router.get('/api/v1/get-user/:id', getUserById);
router.get('/api/v1/get-users-list', getUsersList);
router.post('/api/v1/add-user', addUser);

module.exports = router;