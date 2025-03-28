const express = require('express');
const router = express.Router();
const User =require('./../models/user')
const {jwtAuthMiddleware,generateToken} = require('../jwt');


//User(voter) ka signup
router.post('/signup', async (req, res) => {
    try {
      const data = req.body;
       // Check if there is already an admin user
       const adminUser = await User.findOne({ role: 'admin' });
       if (data.role === 'admin' && adminUser) {
           return res.status(400).json({ error: 'Admin user already exists' });
       }
       // Validate Aadhar Card Number must have exactly 12 digit
       if (!/^\d{12}$/.test(data.aadharCardNumber)) {
           return res.status(400).json({ error: 'Aadhar Card Number must be exactly 12 digits' });
       }

       // Check if a user with the same Aadhar Card Number already exists
       const existingUser = await User.findOne({ aadharCardNumber: data.aadharCardNumber });
       if (existingUser) {
           return res.status(400).json({ error: 'User with the same Aadhar Card Number already exists' });
       }

      //Create a new User document using mongoose model
      const newUser = new User(data);
      //Save the new user to the databaase
      const response = await newUser.save();
      console.log('User as voter is saved');

      //payload
      const payload = {
        id: response.id
      }
      //generating token 
      console.log(JSON.stringify(payload));
      const token = generateToken(payload);
      console.log("Token is : ",token)
      res.status(200).json({response: response,token: token});
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  //Login Route
router.post('/login' ,async(req,res) => {
    try{
      //Extract username and password from request body
      const {aadharNumber,password} = req.body;
  
      // Find by username 
      const user = await Person.findOne({aadharNumber: aadharNumber});
     
      //If user does not exist exit or password does not match, return error
      if(!user || !(await user.comparePassword(password))){
        return res.status(401).json({error:'Invalid username or password'})
      }
  
      //genereate tokens
      const payload = {
        id : user.id,
        
      }
      const token = generateToken(payload);
  
      //return token as response
      res.json({token})  
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  });


  // Profile jaha user create hone ke baad stored rhega
  router.get('/profile',jwtAuthMiddleware, async (req, res) => {
   
    try {
     
        const userData = req.user;
        const userId = userData.id;
        const user = await User.findById(userId);
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error' });
    }
  });



  //User can update their password which they created while signing up
  router.put('/profile/password',jwtAuthMiddleware,async (req,res)=>{
  try{
    const  userId=req.user.id; //Extract the id from the token
    const {currentPassword,newPassword} = req.body //extract the current and new password from the request body
  
    //Find the user by the userID
    const user = await User.findById(userId);

    //If password does not match , return error
    if(!(await user.comparePassword(currentPassword))){
        return res.status(401).json({error:'Invalid username or password'});
    }

    //Agar password match hogaya then hmlog update karne denge password user ko
    user.password=newPassword;
    await user.save();
    console.log('password updated');
    res.status(200).json({message:'Password updated successfully!'})
}catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
  })

  module.exports = router;
  