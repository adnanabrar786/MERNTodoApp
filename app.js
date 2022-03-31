const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const req = require("express/lib/request")
const res = require("express/lib/response")
const app = express()

// const Item = require("./models/item")
const ItemRoutes = require("./routes/item")

app.set("view engine", "ejs")

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))


app.use("/" , ItemRoutes )


// const connection = mongoose.createConnection(
//     "mongodb://localhost:27017/todoDB"
// )
// const itemSchema = new mongoose.Schema({
//     name: String,
// });
// const Item = connection.model('Item', itemSchema);



// app.get("/", (req, res) => {
//     Item.find({}, (err, f) => {
//         if (f.length === 0) {
//             Item.insertMany(arrItem)
//                 .then((items) => {
//                     console.log("saved Data", items);
//                 })
//                 .catch(e => {
//                     throw e;
//                 });
//             res.redirect("/");
//         } else {
//             res.render("list", { newListItems: f })
//         }
//     })
// })



// app.post("/delete", (req, res) => {
//     const check = req.body.checkbox
//     Item.findByIdAndRemove(check, function (err) {
//         if (!err) {
//             console.log("Successfully deleted");
//             res.redirect("/")
//         }
//     })
// })


// app.post("/", (req, res) => {
//     const itemName = req.body.n;
//     const item = new Item({
//         name: itemName
//     })
//     item.save();
// })


app.listen(3000, () => {
    console.log("connect server");
})

