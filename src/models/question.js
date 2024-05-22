'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Question extends Model {
        static associate(models) {
            Question.belongsTo(models.Specialty, { foreignKey: 'keyToFindSpecialty', targetKey: 'id' });

            Question.belongsTo(models.User, { foreignKey: 'questionerId', targetKey: 'id' });
        }
    };
    Question.init({
        question: DataTypes.STRING,
        keyToFindSpecialty: DataTypes.INTEGER,//nắm giữ khóa ngoại để tìm thằng chuyên khoa new 
        questionerId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Question',
    });
    return Question;
};



