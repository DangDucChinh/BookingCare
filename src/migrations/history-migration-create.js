'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('histories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.TEXT
            },
            descriptionEnglish: {
                type: Sequelize.TEXT
            },
            patientId: { type: Sequelize.STRING },
            doctorId: { type: Sequelize.STRING },

            dateTimeForAppintment : {type : Sequelize.DATE}, 
            recordPatient: { type: Sequelize.BLOB('long') },
            
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
        await queryInterface.dropTable('histories');
    }
};