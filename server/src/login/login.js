const crypto = require("crypto");

module.exports = async (req, res) => {

    console.log(`MODULE: login.js >>>`);// test

    const { key, data } = req.body;
    const { login, password } = data;
    const knex = req.knex;
    const key_front = process.env.KEY_FRONT || Jc4EUsxLADBu_sm0g2lnX
    const secret = key_front;

    if (key === key_front) {
        // * 1: сформировать HASH пароля
        const confusionPassword = crypto.createHash("sha256", secret).update(password).digest("hex");

        const userData = await knex('user_registration')
            .select()
            .where({
                login: login,
                password: confusionPassword
            }).first();

        // * 2: проверить на наличие пользователя (login, HASH-password)
        if (userData && userData.password === confusionPassword && login === userData.login) {
            console.log(`ВХОД в систему`);

            res.json({ server: 'OK' })

        } else {
            res.json({ server: 'LOGIN: Не верный пароль или Логин' })
        }

    } else {
        console.log('LOGIN: Ошибка ключа');
        res.json({ server: 'LOGIN: Ошибка ключа' })
    }


}