const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        }
    },
    {
        timestamps: { currentTime: Date.now },
    },
)

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
