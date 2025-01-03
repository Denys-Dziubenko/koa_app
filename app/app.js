const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const config = require('config');
const router = require('./routes/index');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes())
    .use(router.allowedMethods());

app.use((ctx) => {
    ctx.status = 404;
    ctx.body = {status: 404, err: 'Route Not Found'};
});

const PORT = process.env.PORT || config.server.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server running in ${config.server.host}:${PORT}`);
});

module.exports = server;