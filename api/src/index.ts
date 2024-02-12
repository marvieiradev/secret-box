import LoadEnv from "@infra/helper/LoadEnv";
import KnexAdapter from "@infra/database/KnexAdapter";
import ExpressAdapter from "@infra/http/ExpressAdapter";
import Registry from "@infra/di/Registry";
import UserDAO from "@infra/database/dao/UserDAO";
import QuestionDAO from "@infra/database/dao/QuestionDAO";
import AnswerDAO from "@infra/database/dao/AnswerDAO";
import UserRepositoryImpl from "@infra/database/repository/UserRepositoryImpl";
import QuestionRepositoryImpl from "@infra/database/repository/QuestionRepositoryImpl";
import AnswerRepositoryImpl from "@infra/database/repository/AnswerRepositoryImpl";

LoadEnv.load();

const knexAdapter = new KnexAdapter();
knexAdapter.connect();
const registry = Registry.getInstance();

const userDAO = new UserDAO(knexAdapter.instance);
const userRepository = new UserRepositoryImpl(userDAO);
registry.resgister('UserRepository', userRepository);

const questionDAO = new QuestionDAO(knexAdapter.instance);
const questionRepository = new QuestionRepositoryImpl(questionDAO);
registry.resgister('QuestionRepository', questionRepository);

const answerDAO = new AnswerDAO(knexAdapter.instance);
const answerRepository = new AnswerRepositoryImpl(answerDAO);
registry.resgister('AnswerRepository', answerRepository);

const expressAdapter = new ExpressAdapter();
expressAdapter.listen(3000);

//console.log(process.env);

/*
const knexAdapter = new KnexAdapter();
knexAdapter.connect();
const userDAO = new UserDAO(knexAdapter.instance);
userDAO.create({
    userId: UUIDGenerator.generate(),
    name: null,
    email: 'nulo@teste.com',
    password: '25255',
    pictureUrl: null,
    createdAt: new Date(),
    updatedAt: null,
})
*/

