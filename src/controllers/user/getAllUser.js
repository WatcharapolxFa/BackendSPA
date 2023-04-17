const User = require('../../models/data')

const GetAllUsers = async (req, res) => {
    const users = await User.find({})

    return res.status(200).json({
        status: true,
        message: 'success',
        data: users,
    })
}

module.exports = GetAllUsers;