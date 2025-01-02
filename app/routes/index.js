const {
    getUserByIdAction,
    getUsersListAction,
    addUserAction,
} = require('../controllers/mainController');

const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('/', async (ctx) => {
    ctx.body = 'Workin\' on it!';
});

router.get('/api/v1/get-user/:id', getUserByIdAction);
router.get('/api/v1/get-users-list', getUsersListAction);
router.post('/api/v1/add-user', addUserAction);

module.exports = router;