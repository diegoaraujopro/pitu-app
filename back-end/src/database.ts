import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:root@db/pitu-db');

export default sequelize;