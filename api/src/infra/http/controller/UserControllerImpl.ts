import { Request, Response } from "express";
import UserController from "@application/controller/UserController";
import CreateUser from "@application/usecase/user/CreateUser";

export default class UserControllerImpl implements UserController {
    async create(request: Request, response: Response): Promise<void> {
        const { email, password } = request.body;
        const userData = { email, password };
        const newUser = await new CreateUser().execute(userData);
        response.status(201).json(newUser);
    }


    updateProfile(request: Request, response: Response): Promise<void> {
        throw new Error("a");
    }

    findById(request: Request, response: Response): Promise<void> {
        throw new Error("a");
    }

    authenticate(request: Request, response: Response): Promise<void> {
        throw new Error("a");
    }
}