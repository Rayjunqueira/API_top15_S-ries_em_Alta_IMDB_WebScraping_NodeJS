import express from 'express';

import dotenv from 'dotenv';

import ScrapingRoute from './route/ScrapingRoute';

dotenv.config();

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.app.use(express.json());
    }

    private routes () {
        this.app.use('/', ScrapingRoute);
    }
}

export default new App().app;