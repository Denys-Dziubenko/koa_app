
const getUserById = (ctx) => {

    ctx.body = `User with id ${ctx.params.id}`;
};

const getUsersList = (ctx) => {
    ctx.body = { res: 'All users' };
};

const addUser = (ctx) => {
    ctx.body = 'Add new user';
};

module.exports = {
    getUserById,
    getUsersList,
    addUser,
};