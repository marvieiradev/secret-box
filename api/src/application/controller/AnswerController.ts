export default interface AnswerController {
    create: (request: any, response: any) => Promise<void>;
}