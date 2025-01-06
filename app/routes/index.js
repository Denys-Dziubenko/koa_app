const {
    getUserByIdAction,
    getUsersListAction,
    addUserAction,
    dellUserAction,
} = require('../controllers/mainController');
const { authMiddleware } = require('../middlewares/auth');

const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('/', async (ctx) => {
    ctx.body = 'Workin\' on it!';
});

router.get('/api/v1/get-user/:id', getUserByIdAction);
router.get('/api/v1/get-users-list', getUsersListAction);
router.post('/api/v1/add-user', addUserAction);
router.delete(
    '/api/v1/dell-user/:id',
    authMiddleware,
    dellUserAction
);

module.exports = router;