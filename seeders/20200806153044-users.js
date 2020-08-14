'use strict';
const bcryptjs = require("bcryptjs");
var pass = bcryptjs.hashSync("123123", 8);
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('users', [{
			// username: 'admin',
			// role: 'admin',
			// email: 'dinhnguyen.overcome@gmail.com',
			// password: pass,
			// createdAt: new Date(),
			// updatedAt: new Date(),

		}]);
	},

	down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
    }
};
