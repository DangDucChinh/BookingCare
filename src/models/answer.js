'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Answer extends Model {
        static associate(models) {
            Answer.belongsTo(models.Specialty, { foreignKey: 'specialtyId', targetKey: 'id' });

            Answer.belongsTo(models.Doctor_Infor, { foreignKey: 'respondentId', targetKey: 'id' });

            Answer.belongsTo(models.Question, { foreignKey: 'questionId', targetKey: 'id' });
        }
    };

    Answer.init({
        answer: DataTypes.STRING,
        specialtyId: DataTypes.INTEGER,//nắm giữ khóa ngoại để tìm thằng chuyên khoa new 
        respondentId: DataTypes.INTEGER,  // id tham chieu den  doctor,
        questionId : DataTypes.INTEGER //
    }, {
        sequelize,
        modelName: 'Answer',
    });
    return Answer;
};

// 
