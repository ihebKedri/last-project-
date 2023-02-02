

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require("../database-mysql");
const watch = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// const selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
const selectAll = async function (req, res) {
  try {
    const items = await watch.find();
    res.status(200).send(items);
  } catch (error) {
    res.status(200).send(error);
  }
};


const addOne = async function (req, res) {
    console.log(req.body)
    try {
      const items = await watch.create(req.body);
      res.status(200).send(items);
    } catch (error) {
      res.status(200).send(error);
    }
  };


  const updateone  = async function (req, res) {
    console.log(req.params.id)
    

    try {
      const items = await watch.findByIdAndUpdate({_id:req.params.id},{ price:req.body.price,description:req.body.description,quantity:req.body.quantity });
      res.status(200).send(items);
    } catch (err) {
     console.log(err)
    }
  };


  const Delete = async function (req, res) {
    console.log(req.params.id)
    try {
      const items = await watch.deleteOne({_id:req.params.id});
      res.status(200).send("your watch is deleted ");
    } catch (error) {
      res.status(200).send(error);
    }
  };


module.exports = {selectAll,addOne,Delete,updateone};
