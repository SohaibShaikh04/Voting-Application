const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

//Defining  the cnadidate schemaa
const candidateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    party:{
        type:String,
        required:true
    },
    votes: [                                     //nested object very imp part
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref:'User',
                required:true
            },
            votedAt:{
                type:Date,
                default:Date.now()
            }
        }
    ]   ,
    voteCount:{
        type:Number,
        default:0
    }                      
    
});

// candidateSchema.pre('save', async function(next){
//     const candidate = this;
//     //Hash the password only if it has been modified (or its new)
//     if(!candidate.isModified('password')) return next();

//       try{
//         // Jab hashpassword generate karna ho
//         const salt = await bcrypt.genSalt(10);
//         //hash password 
//         const hashedPassword = await bcrypt.hash(candidate.password , salt);
        
//         //Overriding the plain password with the hashed one 
//         candidate.password = hashedPassword;


//           next();
//       }
//       catch(err){
//            return next(err);
//       }
    
// })
// candidateSchema.methods.comparePassword = async function(candidatePassword){
//     try{
//         //Use bcrypt to compare the provided password with the hashed password 
//         const  isMatch = await bcrypt.compare(candidatePassword,this.password);
//         return isMatch
//     }
//     catch(err){
//         throw err;
   
//     }
// }


const Candidate = mongoose.model('Candidate',candidateSchema);
module.exports=Candidate;