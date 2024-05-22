'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        static associate(models) {
            // History.hasMany(models.Doctor_Infor, {foreignKey : 'priceId', as : 'priceTypeData'});
            // History.hasMany(models.Doctor_Infor, {foreignKey : 'provinceId', as : 'provinceTypeData'});
        }
    };
    History.init({
        patientId: DataTypes.INTEGER,
        doctorId : DataTypes.INTEGER, 
        description : DataTypes.TEXT,
        descriptionEnglish : DataTypes.TEXT, //new

        dateTimeForAppintment : DataTypes.DATE, 
        recordPatient: DataTypes.STRING, // dường dẫn của file ,còn hồ sơ được lưu dưới dạng nhị phân BLOB trong csdl
        // hồ sơ bệnh án là files
     }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};