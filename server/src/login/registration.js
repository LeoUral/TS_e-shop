module.exports = async (req, res) => {
    console.log(`MODULE: login.js >>>`);// test

    const { key, data } = req.body;

    console.log(`key::: `, key);
    console.log(`DATA::: `, data);


    res.json({ server: 'REGISTRATION: response - ok' })
}