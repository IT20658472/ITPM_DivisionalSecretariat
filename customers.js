const router = require("express").Router();
const Customer = require("../models/Customer");
const bcrypt = require("bcrypt");

router.route("/add").post((req,res) =>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newCustomer = new Customer ({
        name,
        age,
        gender
    })

    newCustomer.save().then(() =>{
        res.json("Customer Added")
        
    }).catch((err)=>{
        console.log(err);
    })
})

//GET CUSTOMER
// router.get("/:customer_id", async (req, res) => {
//   try {
//     const customer = await Customer.findOne({'customer_id':req.params.customer_id});
//     const { password, ...others } = customer._doc;
//     res.status(200).json(others);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.route("/").get((req,res) =>{
    Customer.find().then((customers) =>{
        res.json((customers)=>{
            res.json(customers)
        }).catch((err)=>{
            console.log(err)
        })
    })
})

//GET ALL CUSTOMERS
// router.get("/", async (req, res) => {
//   const cus_id = req.query.customer_id;
//   try {
//     let customers;
//     if (cus_id) {
//         customers = await Customer.find({ customer_id });
//     } else {
//         customers = await Customer.find();
//     }
//     res.status(200).json(customers);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.route("/update/:id").put(async (req,res) =>{
    let userId = req.params.id;
    const {name, age, gender} = req.body;

    const updateCustomer = {
        name,
        age,
        gender
    }
    const update = await Customer.findByIdAndUpdate(userId, updateCustomer);then(() =>{
        res.status(200).send({status: "User updated", user: updated})
    }).catch((err) =>{
      console.log(err);
      res.status(500).send({status: "Error with updating data"});

    })

   

})

//UPDATE CUSTOMER
// router.put("/updatestd/:id", async(req, res) => {
//   if (req.body.password) {
//     const salt = await bcrypt.genSalt(10);
//     req.body.password = await bcrypt.hash(req.body.password, salt);
//   }
//   try {
//     const updatedCustomer = await Customer.findOneAndUpdate({'customer_id':req.params.id},
//       {
//         $set: req.body
//       },{new:true}
//     );
//     res.status(200).json(updatedCustomer);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.is;
    await Customer.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status : "user deleted"});

    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
  
})
})

//DELETE CUSTOMER
// router.delete("/deletestd/:id", async(req, res) => {
//   try {
//     const deletedCustomer = await Customer.findOneAndDelete({'customer_id':req.params.id});
//     res.status(200).json("Customer has been deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;
    await Customer.findById(userId).then(() =>{
        res.status(200).send({status : "user fetched", user:user})
    }).catch(() =>{
        console.log(err.message);
        res.status(500).send({status : "Error with fet user", error: EvalError.message});
    })
})

// //GET SUBJECT
// router.get("/subst/:subjects", async (req, res) => {
//   try {
//     const student = await Student.find({'subjects':req.params.subjects});
//     res.status(200).json(student);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });



module.exports = router;
