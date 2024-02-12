import LoadEnv from "@infra/helper/LoadEnv";
import UserEntity from "@domain/entity/UserEntity";
import UserDAO from "@infra/database/dao/UserDAO";
import KnexAdapter from "@infra/database/KnexAdapter";
import UUIDGenerator from "@domain/entity/UUIDGenerator";
import ExpressAdapter from "@infra/http/ExpressAdapter";

LoadEnv.load();

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

