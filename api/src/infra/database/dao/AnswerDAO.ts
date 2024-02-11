import DAO from "@domain/dao/DAO";
import AnswerEntity from "@domain/entity/AnswerEntity";

export default class AnswerDAO implements DAO<AnswerEntity> {
    create(data: AnswerEntity): Promise<AnswerEntity> {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }

    findById(id: number): Promise<AnswerEntity> {
        return new Promise((resolve, reject) => {
            resolve(new AnswerEntity());
        });
    }
}