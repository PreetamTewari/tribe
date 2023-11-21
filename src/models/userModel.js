import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken:{
        type: String,
        default: ""
    },
    forgotPasswordTokenExpiry:{
        type: Date,
        default: Date.now
    },
    verifyToken:{
        type: String,
        default: ""
    },
    verifyTokenExpiry:{
        type: Date,
        default: Date.now
    }

});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;