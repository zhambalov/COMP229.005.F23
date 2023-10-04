let UserModel = require('../models/user');


module.exports.create = async function (req, res, next) {
    
    try {
        let newUser = new UserModel(req.body);

        let result = await UserModel.create(newUser);
        console.log(result);

        res.json(
            {
                success: true,
                message: "User created successfully."
            }
        );
    } catch (error) {
        console.log(error);
        next(error);
    }
    
}

