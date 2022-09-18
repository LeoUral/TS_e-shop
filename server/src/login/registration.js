module.exports = async (req, res) => {
    console.log(`MODULE: login.js >>>`);// test

    const { key, data } = req.body;

    console.log(`key::: `, key);
    console.log(`DATA::: `, data);

    //todo 1: сформировать HASH пароля
    //todo 2: сформировать новый объект для БД
    //todo 3: Сохранить нового пользователя в БД

    res.json({ server: 'REGISTRATION: response - ok' })
}