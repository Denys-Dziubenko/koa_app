/** Must be all valid headers to get through */
const KEYS_SET = {
    'x-auth-key': '4f7a4b738d347cff03b43bf5a5994db6', // md5(super-duper-secret)
};

module.exports = {
    KEYS_SET,
    authMiddleware: async (ctx, next) => {
        const reqHeaders = ctx?.request?.header || {};
    
        for (const key in KEYS_SET) {
            if (reqHeaders[key] !== KEYS_SET[key]) {
                ctx.body = {
                    msg: 'Auth key is not valid'
                };
                return ctx;
            }
        }
        return next();
    },
};

