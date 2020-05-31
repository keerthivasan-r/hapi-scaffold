'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = new Hapi.server({
        host: '0.0.0.0',
        port: '3000'
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();