const Item = require("../models/item")


exports.insertItems = (req, res) => {

    Item.find({}, (err, f) => {
        if (f.length === 0) {
            Item.insertMany(arrItem)
                .then((items) => {
                    console.log("saved Data", items);
                })
                .catch(e => {
                    throw e;
                });
            res.redirect("/");
        } else {
            res.render("list", { newListItems: f })
        }
    })
}


exports.deleteItems = (req, res) => {

    const check = req.body.checkbox
    Item.findByIdAndRemove(check, function (err) {
        if (!err) {
            console.log("Successfully deleted");
            res.redirect("/")
        }
    })
}



exports.saveItems = (req, res) => {

    const itemName = req.body.n;
    const item = new Item({
        name: itemName
    })
    item.save();
}

