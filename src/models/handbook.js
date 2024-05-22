'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Handbook extends Model {
        static associate(models) {
            Handbook.belongsTo(models.Specialty, {foreignKey : 'keyToFindSpecialty',targetKey: 'id', as : 'findSpecialty'});
            // Handbook.belongsTo(models.User, {foreignKey :'creatorId', targetKey : 'id', as : 'findCreator'});
        }
    };
    Handbook.init({
        

        nameHandbook : DataTypes.STRING,
        nameHandbookEnglish : DataTypes.STRING,
        contentHandbook_HTML : DataTypes.STRING, 
        contentHandbook_TEXT : DataTypes.STRING,
        contentHandbookEnglish_HTML : DataTypes.STRING, 
        contentHandbookEnglish_TEXT : DataTypes.STRING, 

        avatar_base64_Save_in_DB: DataTypes.STRING,
        
        // new
        keyToFindSpecialty : DataTypes.STRING,//nắm giữ khóa ngoại để tìm thằng chuyên khoa new 
        // creatorId : DataTypes.INTEGER , 
    }, {
        sequelize,
        modelName: 'Handbook',
    });
    return Handbook;
};

// 

