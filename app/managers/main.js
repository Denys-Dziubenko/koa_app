const {
    SELECT,
    INSERT,
} = require('../helpers/sql');

const getAllUsers = () => SELECT('SELECT * FROM users')
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

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
};
