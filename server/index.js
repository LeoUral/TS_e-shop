require("dotenv").config();
const express = require('express');
const cors = require('cors');
const crypto = require("crypto");
const { nanoid } = require("nanoid"); // поддерживается v3.1.30

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
});


const login = require("./src/login/login");
const registration = require("./src/login/registration");

const app = express()
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/login', login)
app.post('/registration', registration)

app.listen(PORT, () => {
    console.log(`SERVER start to PORT: ${PORT}`);
})