const {
    SELECT,
    INSERT,
    DELETE,
} = require('../helpers/sql');

const getAllUsers = ({limit, offset} = {}) => SELECT('SELECT * FROM users LIMIT ? OFFSET ?', [limit, offset])
    .catch((err) => {
        console.error('getAllUsers err =>', err);
        return [];
    });

const getUserById = (id) => SELECT('SELECT * FROM users WHERE id = ?', [id])
    .catch((err) => {
        console.error('getUserById err =>', err);
        return [];
    });

const addUser = (name, country) => INSERT(
    'INSERT INTO users (name, country) VALUES (?, ?)',
    [name, country]
).catch((err) => {
    console.error('addUser err =>', err);
    return null;
});

const dellUserById = (id = 0) => {
    if (!id) {
        console.error('dellUserById: Invalid id');
        return Promise.resolve(null);
    }
    return DELETE('DELETE FROM users WHERE id = ?', [id], 'delete')
        .catch((err) => {
            console.error('dellUserById err =>', err);
            return null;
        });
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    dellUserById,
};
