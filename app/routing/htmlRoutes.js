  
let path = require("path");
module.exports = function (app) {
    app.get(`/`, (req, res) => {
        res.sendFile(path.join(__dirname, `../public/home.html`));
    });
    app.get(`/survey.html`, (req, res) => {
        res.sendFile(path.join(__dirname, `../public/survey.html`));
    });
};