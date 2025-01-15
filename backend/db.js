const mongoose = require("mongoose");

// so now here we have to connect with mongo db 
const uri = "mongodb+srv://admin:ashok2678@cluster0.d44br.mongodb.net/Paytm_project?retryWrites=true&w=majority";

// so now here connecting with the error handling 
mongoose.connect(uri)
    .then(async() =>{
        console.log("connected to mongo db")
    })
    .catch((err) => console.log("error in connecting" , err.message));

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: String
});

// creating the schema for the account 
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // reference to user model 
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = { User, Account };
