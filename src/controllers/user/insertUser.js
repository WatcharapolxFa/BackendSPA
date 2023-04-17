const User = require('../../models/data')

const InsertUserController = async (req, res) => {
    const { name, email, dob } = req.body

    if (!name || !email || !dob) {
        return res.status(400).json({
            method: 400,
            status: false,
            message: 'failed',
        })
    }

    const user = await User.create({
        name,
        email,
        dob: new Date(dob),
    })

    if (user) {
        return res.status(200).json({
            method: 200,
            status: true,
            message: 'success',
        })
    }

    return res.status(400).json({
        method: 400,
        status: false,
        message: 'failed',
    })
}

module.exports = InsertUserController;