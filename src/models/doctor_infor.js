'use strict';
const {
    Model, FLOAT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_Infor extends Model {
        static associate(models) {
            Doctor_Infor.belongsTo(models.User , {foreignKey : 'doctorId'})

            Doctor_Infor.belongsTo(models.Allcode , {foreignKey : 'priceId', targetKey :'keyMap', as :'priceTypeData'});
            Doctor_Infor.belongsTo(models.Allcode , {foreignKey : 'provinceId', targetKey :'keyMap', as :'provinceTypeData'});
            Doctor_Infor.belongsTo(models.Allcode , {foreignKey : 'paymentId',targetKey :'keyMap', as :'paymentTypeData'});

            Doctor_Infor.belongsTo(models.Clinic , {foreignKey : 'clinicId'});
            Doctor_Infor.belongsTo(models.Specialty , {foreignKey : 'specialtyId'});
            Doctor_Infor.hasMany(models.Answer , {foreignKey : 'answerId', targetKey : 'id'});
        }
    };
    Doctor_Infor.init({
        doctorId: DataTypes.INTEGER,
        specialtyId : DataTypes.INTEGER, // cứ để đó xem có mở rộng được ko ? 
        clinicId : DataTypes.INTEGER,

        priceId: DataTypes.STRING,
        provinceId: DataTypes.STRING,
        paymentId: DataTypes.STRING,

        note: DataTypes.STRING,
        count: DataTypes.INTEGER,
        startRate : DataTypes.FLOAT, // new
        answerId : DataTypes.INTEGER, //

        contentHTML : DataTypes.TEXT('long') , 
        contentMarkdown: DataTypes.TEXT('long'),
        contentHTMLEnglish : DataTypes.TEXT('long') , 
        contentMarkdownEnglish : DataTypes.TEXT('long'),

        description : DataTypes.TEXT('long'), 
        descriptionEnglish : DataTypes.TEXT('long')
    }, {
        sequelize,
        modelName: 'Doctor_Infor',
        freezeTableName : true
    });
    return Doctor_Infor;
};