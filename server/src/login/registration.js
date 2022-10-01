require("dotenv").config();
const crypto = require("crypto");

module.exports = async (req, res) => {
    console.log(`MODULE: login.js >>>`);// test

    const { key, data } = req.body;
    const knex = req.knex;


    const key_front = process.env.KEY_FRONT || Jc4EUsxLADBu_sm0g2lnX
    const secret = key_front;

    if (key === key_front) {
        console.log(`DATA::: `, data); // test

        const { name, surname, phone, email, login, password } = data;

        //* 1: сформировать HASH пароля
        const confusionPassword = crypto.createHash("sha256", secret).update(password).digest("hex");
        console.log(`newPASSWORD::: `, confusionPassword); // test

        //todo 3: Сохранить нового пользователя в БД
        await knex('user_registration').insert({
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            login: login,
            password: confusionPassword
        });

        res.json({ server: 'Регистрация в процессе разработки' })
    } else {
        console.log(`Ошибка ключа`);
        res.json({ server: 'Ошибка ключа' })
    }
}
