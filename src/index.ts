//write a fn to create a users table
import { Client } from "pg";

const client = new Client({
  connectionString: `postgresql://culsarthak:DmMQ0GReiY4T@ep-yellow-hall-a59f5gsn.us-east-2.aws.neon.tech/week10_study_postgres?sslmode=require`,
});

client.connect();

const createUsersTable = async () => {
  const result = await client.query(`
  CREATE TBALE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIMEZONE DEFAULT CURRENT_TIMESTAMP
  )`);
  console.log(result);
};
