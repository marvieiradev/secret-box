import HttpServer from "./HttpServer";
import express from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import cors from "cors";
import UserController from "@infra/http/controller/UserControllerImpl";

export default class ExpressAdapter implements HttpServer {
    readonly app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());

        const userController = new UserController();

        this.app.use('/api/user', userController.create);

        this.app.use('/api', (req, res) => {
            res.json({ message: 'Hello!' });
        })
    }



    listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    }
}