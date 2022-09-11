module.exports = async (req, res) => {

    console.log(`MODULE: login.js >>>`);// test

    const { key, data } = req.body;

    console.log(`key::: `, key);
    console.log(`DATA::: `, data);

    // todo 1: сформировать HASH пароля
    // todo 2: проверить на наличие пользователя (login, HASH-password)
    // todo 3: сформировать ответ по результатам проверки

    res.json({ server: 'LOGIN: response - ok' })
}