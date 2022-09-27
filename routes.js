const app = require("express")




app.get("/", function(req, res) {
    res.send("Signup/Login Page")
    db = JSON.parse(fs.readFileSync("./db/db.json")) || []
    res.json(db)
});

app.post("", function(req, res) {
    let noName = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 9451)
    }
    db.push(noName)
    fs.writeFileSync("file path", JSON.stringify(db), function(err) {
        if (err) throw err
    })
    res.json(db)
});

function auth(req, res, next) {
    if (req.query.admin === 'true') {

    } else {
        res.send('no auth');
    }
}

module.exports = app;