'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Specialty extends Model {
        static associate(models) {
            Specialty.hasMany(models.Doctor_Infor, {foreignKey: 'doctorId', targetKey: 'doctorId'}); // 
            // Specialty.hasMany(models.HandBook, {foreignKey: 'creatorId', targetKey: 'doctorId'}); // ko cần vì khi truy xuất speiclaty ko cần quy xuất handbook
        }
    };
    Specialty.init({
        name : DataTypes.STRING , 
        nameEnglish : DataTypes.STRING,

        descriptionHTML : DataTypes.TEXT,
        descriptionMarkdown : DataTypes.TEXT,
        descriptionHTMLEnglish : DataTypes.TEXT,
        descriptionMarkdownEnglish : DataTypes.TEXT,
        
        image: DataTypes.STRING,
        
        specific : DataTypes.TEXT , // cái này để ghi chi tiết hơn     new    
        specificEnglish : DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Specialty',
    });
    return Specialty;
};