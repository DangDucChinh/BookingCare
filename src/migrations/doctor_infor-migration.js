'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('doctor_infor', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            doctorId: { type: Sequelize.INTEGER, allowNull: false, },
            specialtyId : {type : Sequelize.INTEGER, allowNull: true} ,
            clinicId : {type : Sequelize.INTEGER, allowNull: true} ,

            priceId: { type: Sequelize.STRING, allowNull: false, },
            provinceId: { type: Sequelize.STRING, allowNull: false, },
            paymentId: { type: Sequelize.STRING, allowNull: false, },

            note: { type: Sequelize.STRING },
            count: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
            startRate :{ type: Sequelize.FLOAT }, // new
            answerId : { type: Sequelize.INTEGER },

            contentHTML :{ type: Sequelize.STRING },
            contentMarkdown: { type: Sequelize.STRING },
            contentHTMLEnglish : { type: Sequelize.STRING },
            contentMarkdownEnglish : { type: Sequelize.STRING },
            
            description : { type: Sequelize.STRING },
            descriptionEnglish : { type: Sequelize.STRING },
            
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('doctor_infor');
    }
};