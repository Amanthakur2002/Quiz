const { Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('abc', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

const Question = sequelize.define('Question',{
    que_text : {
        type : DataTypes.STRING,
        allowNull: false
    },
    option_a: {
        type: DataTypes.STRING,
        allowNull: false
    },
    option_b: {
        type: DataTypes.STRING,
        allowNull: false
    },
    option_c: {
        type: DataTypes.STRING,
        allowNull: false
    },
    option_d: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correct_answer: {
        type: DataTypes.ENUM('option_a', 'option_b',
            'option_c', 'option_d'),
        allowNull: false
    }
})

// new (async () => {
//     await sequelize.sync();
//     console.log("sync with db")
// })();

const syncDatabase = async () => {
    await sequelize.sync();
    console.log('sync done');
};

syncDatabase();

module.exports = Question;