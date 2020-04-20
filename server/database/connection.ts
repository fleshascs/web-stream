const { Client } = require("pg");

export let client: any;
export const connectToDatabase = () => {
    client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });
    return client.connect();
};
