const express = require('express');

//quando for executar os testes, não é necessário alocar porta ou deixar o servidor de pé
class AppController {
    constructor() {
        // onde está o app, onde podemos usar os métodos do express
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require('./routes'));
    }
}

module.exports = new AppController().express;