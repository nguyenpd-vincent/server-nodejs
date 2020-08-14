'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('categories', [
			{
				name: 'GIFT',
				slug: 'gift-1',
				avatar: 'flaticon-gift',
				status: 'active',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'ENTERTAIN',
				slug: 'entertain-2',
				avatar: 'flaticon-joker',
				status: 'active',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'RELAX',
				slug: 'relax-3',
				avatar: 'flaticon-leaf',
				status: 'active',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'STAY',
				slug: 'stay-1',
				avatar: 'flaticon-bed',
				status: 'active',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'DRINK',
				slug: 'drink-1',
				avatar: 'flaticon-cocktail',
				status: 'active',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'EAT',
				slug: 'eat-1',
				avatar: 'flaticon-ramen',
				status: 'active',
				createdAt: new Date(),
				updatedAt: new Date(),
			},

		]);
	},

	down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('categories', null, {});
    }
};
