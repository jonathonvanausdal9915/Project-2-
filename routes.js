




app.get("", function (req, res) {
    db = JSON.parse(fs.readFileSync("./db/db.json")) || []
    res.json(db)
});