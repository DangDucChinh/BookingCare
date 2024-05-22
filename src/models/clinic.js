'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
        static associate(models) {
            // Clinic.hasMany(models.User, {foreignKey: 'clinicId', as : 'clinicId'});
            Clinic.hasMany(models.Doctor_Infor, {foreignKey: 'clinicId'}); // Clinic có nhiều bác sĩ
        }
    };
    Clinic.init({
        name : DataTypes.STRING , 
        nameEnglish : DataTypes.STRING ,
        
        address: DataTypes.STRING,
        addressEnglish : DataTypes.STRING,

        descriptionHTML: DataTypes.STRING,
        descriptionHTMLEnglish: DataTypes.STRING,
        descriptionMarkdown: DataTypes.STRING,
        descriptionMarkdownEnglish: DataTypes.STRING,

        image : DataTypes.STRING,

        longitude : DataTypes.STRING, // kinh do new
        latitude : DataTypes.STRING, // vi do
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};