const Sequelize = require('sequelize');


const sequelize = new Sequelize("myblog", "root", "123456", {
    host: "localhost",
    dialect: "mysql",
    logging: console.log
})

// 测试连接
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// 定义模型
const Passage = sequelize.define('passages', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    coverPath: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "封面 ",
        defaultValue: null
    },
})

async function initDB() {
    await sequelize.sync({ force: false })

}

initDB.Passage = Passage

module.exports = initDB
