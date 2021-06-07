const User = require("../models/User");




/**
 * 
 */
const userController = {

    add:async(req,res) => {

      

        try{
            const user = new User({
                name : req.body.name,
               
            })
        
            let createUser = await user.save()
            
            res.status(201).send(createUser);
           

        }catch(err){
            res.status(500).json(err.message)
        }
    },
     getAll:async(_,res)=>{

        try {
            const users = await User.findAll()
            

            res.json(users)
            
        }catch(err){
            res.status(500).json(err.message)
        }

     }

    };
    

module.exports= userController;