import DAO from "@domain/dao/DAO";
import QuestionEntity from "@domain/entity/QuestionEntity";

export default class QuestioDAO implements DAO<QuestionEntity> {
    create(data: QuestionEntity): Promise<QuestionEntity> {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }

    findById(id: number): Promise<QuestionEntity> {
        return new Promise((resolve, reject) => {
            resolve(new QuestionEntity());
        });
    }
}