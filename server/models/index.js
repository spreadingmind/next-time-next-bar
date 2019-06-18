const Sequelize = require('sequelize');
const connection = require('../services/dbService').sequelize;

const BarInfo = connection.define('bars_info', {
    id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    website: {
        type: Sequelize.TEXT
    },
    coordinates: {
        type: Sequelize.TEXT,
        allowNull: false

    },
    rating: {
        type: Sequelize.INTEGER,
    }
}, {
    freezeTableName: true,
    tableName: 'bars_info'
});

const AttendedBar = connection.define('bars_attended', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    attended: {
        type: Sequelize.BOOLEAN,
    },
    attended_time: {
        type: Sequelize.TIME,
    },
    review: {
        type: Sequelize.TEXT,
    }
});

module.exports = {
    BarInfo,
    AttendedBar
}