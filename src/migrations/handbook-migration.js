'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('handbooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ///
      nameHandbook: { type: Sequelize.STRING },
      nameHandbookEnglish: { type: Sequelize.STRING },
      
      contentHandbook_HTML: { type: Sequelize.STRING },
      contentHandbook_TEXT: { type: Sequelize.STRING },
      contentHandbookEnglish_HTML: { type: Sequelize.STRING },
      contentHandbookEnglish_TEXT: { type: Sequelize.STRING },

      avatar_base64_Save_in_DB: { type: Sequelize.BLOB('long') },

      // new
      keyToFindChuyenkhoa: { type: Sequelize.STRING },
      keyToFindDocto : { type: Sequelize.STRING },
      keyToFindSpecialty : {type : Sequelize.STRING}, 
      ///
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
    await queryInterface.dropTable('handbooks');
  }
};