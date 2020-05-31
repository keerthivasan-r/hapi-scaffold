const UserHandler = require('../handlers/user-handler');

function create(server){
    server.route({
        method: 'POST',
        path: '/users/',
        handler: (request, h) => {
            
        }
    });
}


function read(server){

}


function update(server){

}


function deactivate(server){

}

module.exports  = {
    create,
    read,
    update,
    deactivate
}