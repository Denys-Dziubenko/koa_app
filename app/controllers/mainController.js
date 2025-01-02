const {
    getAllUsers,
    getUserById,
    addUser,
} = require('../managers/main');

const getUsersListAction = async (ctx) => {
    ctx.body = {
        users: await getAllUsers(),
    };
};

const getUserByIdAction = async (ctx) => {
    const id = Number(ctx.params.id) || 0;
    const body = {};
    if (!id) {
        body.errMsg = 'Invalid id';
        return;
    } else {
        const user = await getUserById(id);
        body.user = user && user.length ? user[0] : {};
    }
    ctx.body = body;
};

const addUserAction = async (ctx) => {
    const { name = '', country = '' } = ctx.request.body;
    const body = {};

    if (!name || !country) {
        body.errMsg = 'Invalid data';
    } else {
        const id = await addUser(name, country);
        body.id = id;
    }
    ctx.body = body;
};

module.exports = {
    getUserByIdAction,
    getUsersListAction,
    addUserAction,
};