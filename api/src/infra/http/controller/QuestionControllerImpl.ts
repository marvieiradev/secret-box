import { Request, Response } from "express";
import QuestionController from "@application/controller/QuestionController";
import CreateUser from "@application/usecase/user/CreateUser";

export default class QuestionControllerImpl implements QuestionController {
    async create(request: Request, response: Response): Promise<void> {
        const { title, description, userId } = request.body;
        const questionData = { title, description, userId };
        //const newQuestion = await new CreateUser().execute(questionData);
        //response.status(201).json(newQuestion);
        response.status(201).json(questionData);
    }


    async list(request: Request, response: Response): Promise<void> {
        const { userId } = request.params;
        //const questions = await new ListQuestions().execute(userId)
        //response.status(200).json(questions);
        response.status(200).json({ userId });
    }

    async delete(request: Request, response: Response): Promise<void> {
        const { questionId } = request.params;
        //await new DeleteQuestions().execute(questionId)
        response.status(200).send();
    }
}