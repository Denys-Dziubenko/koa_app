const {
    getAllUsers,
    getUserById,
    addUser,
    dellUserById,
} = require('../managers/main');

const getUsersListAction = async (ctx) => {
    const [
        defaultLimit,
        maxLimit,
        defaultOffset,
    ] = [
            5,
            100,
            0
        ];
    let { limit = defaultLimit, offset = defaultOffset } = ctx.query;
    if (limit > maxLimit) limit = defaultLimit;
    if (offset < 0) offset = defaultOffset;

    ctx.body = await getAllUsers({ limit, offset });
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
        ctx.status = 201;
    }
    ctx.body = body;
};

const dellUserAction = async (ctx) => {
    const id = Number(ctx.params.id) || 0;
    const body = { deleted: 0 };

    if (!id) body.errMsg = 'Invalid id';
    else {
        body.deleted = await dellUserById(id);
        if (!Number(body.deleted)) body.errMsg = 'User not found';
    }
    ctx.body = body;
};

module.exports = {
    getUserByIdAction,
    getUsersListAction,
    addUserAction,
    dellUserAction,
};