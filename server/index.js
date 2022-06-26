require("dotenv").config();
const express = require('express');
const crypto = require("crypto");
const { nanoid } = require("nanoid"); // поддерживается v3.1.30
const login = require("./src/login/login");
const registration = require("./src/login/registration");

const app = express()
const PORT = process.env.PORT || 3001;

app.post('/login', login)

app.post('/registration', registration)



app.listen(PORT, () => {
    console.log(`SERVER start to PORT: ${PORT}`);
})