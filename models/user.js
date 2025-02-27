const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

//Defining  the user schemaa
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    aadharNumber:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    role: {
        type: String, 
        enum: ['voter', 'admin'], 
        required: true 
    }
    ,
    isVoted:{
        type:Boolean,
        default:'true'
    },
});

userSchema.pre('save', async function(next){
    const user = this;
    //Hash the password only if it has been modified (or its new)
    if(!user.isModified('password')) return next();

      try{
        // Jab hashpassword generate karna ho
        const salt = await bcrypt.genSalt(10);
        //hash password 
        const hashedPassword = await bcrypt.hash(user.password , salt);
        
        //Overriding the plain password with the hashed one 
        user.password = hashedPassword;


          next();
      }
      catch(err){
           return next(err);
      }
    
})
userSchema.methods.comparePassword = async function(candidatePassword){
    try{
        //Use bcrypt to compare the provided password with the hashed password 
        const  isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }
    catch(err){
        throw err;
   
    }
}


const User = mongoose.model('User',userSchema);
module.exports=User;