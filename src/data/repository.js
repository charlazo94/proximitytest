const {Pool, Client} = require('pg')
const proximityError = require('../../src/models/proximityError')
const uuidv4 = require('uuid/v4');

class Repository {
    constructor(client) {
        this.client = client;
        this.schema = 'proximity';
        this.table = 'service';

    }

    async connection() {
        try {
            const client = new Client({
                user: 'dbuser',
                host: 'database.server.com',
                database: 'mydb',
                password: 'secretpassword',
                port: 3211,
            })
            await client.connect();
            return client;
        } catch (e) {
            return new proximityError(e);
        }
    }

    async save(body) {
        try {
            const service = body;
            service['id'] = uuidv4();
            service['status'] = status.PENDING;
            const stringQuery = `INSERT INTO ${this.table}.${this.schema}(id,date,name,document,next,service,state) VALUES ($1,$2.$3,$4,$5,$6,$7);`;

            await this.client.query(stringQuery, [service.id, service.date, service.name, service.document, service.next, service.service, service.status]);

            return service;

        } catch (e) {
            return new proximityError(e);
        }
    }

    async getAllByState(state) {
        try {
            const stringQuery = `SELECT * FROM ${this.state.schema}.${this.state.table} where state = $1;`;
            const services = this.client.query(stringQuery, [state]);
            return services.rows;
        } catch (e) {
            return new proximityError(e);
        }
    }

    async deleteService(id) {
        try {
            const stringQuery = `UPDATE ${this.state.schema}.${this.state.table} set status = ${status.ARCHIVE} where id = $1; `;
            await this.client.query(stringQuery,[id]);
            return true;
        } catch (e) {
            return new proximityError(e);
        }
    }
}

const status = {
    PENDING: "pendiente",
    DONE: "realizado",
    TODO: 'a-realizar',
    ARCHIVE:"archive"
};

export default Repository;