import AnswerEntity from "@domain/entity/AnswerEntity";

export default interface AnswerRepository {
    create(question: AnswerEntity): Promise<AnswerEntity>;
}