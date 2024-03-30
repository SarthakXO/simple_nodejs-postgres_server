//write a fn to create a users table
import { Client } from "pg";

const client = new Client({
  connectionString: `postgresql://culsarthak:DmMQ0GReiY4T@ep-yellow-hall-a59f5gsn.us-east-2.aws.neon.tech/week10_study_postgres?sslmode=require`,
});

const createUsersTable = async () => {
  await client.connect();
  const result = await client.query(`
  CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )`);
  console.log(result);
};

// createUsersTable();

//inserting data into users table

const insertUserInTable = async () => {
  await client.connect();
  const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
  const values = ["sarthak24", "sarthak@gmail.com", "sarthak@1234"]; //provide like this to solve sql injections
  const res = await client.query(insertQuery, values);
  console.log("insertion successfull : ", res);
};
// insertUserInTable();

//get users from table

const getUsers = async () => {
  await client.connect();
  const res = await client.query(`SELECT * FROM users`);
  console.log(res.rows);
};

getUsers();
