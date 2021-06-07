const User = require("../models/User");



/**
 * 
 */
const authController = {

    async add(req,res) {

        try { 
                const userToCreate = await User.findOne(req.body.name)
                 if(userToCreate){
                    res.status(403).json("Name already exist")
                    return 
                }
        }catch (err){
            res.status(500).json("Error no response from server")
        }

        try{
            const user = new User({
                name : req.body.name,
               
            })
        
            let createUser = await user.save()
            
            res.status(201).send(createUser);
           

        }catch(err){
            res.status(500).json("error")
        }
    }
    };

module.exports= authController;