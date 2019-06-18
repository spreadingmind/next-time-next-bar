const Sequelize = require('sequelize');

const sequelize = new Sequelize(`postgres://postgres:postgres@localhost:5432/spb_bars`);

const PgModel = class PgModel extends Sequelize.Model {
    constructor(connection, model) {
        this.connection = connection;
        this.model = model;
    }

    async create(data) {
        try {
            const res = await this.model.create(data);
            return res;
        } catch (err) {
            console.error(err);
        }
    }

    async update(updateData, condition) {
        try {
            return this.model.update(updateData, condition);
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = {
    sequelize,
}