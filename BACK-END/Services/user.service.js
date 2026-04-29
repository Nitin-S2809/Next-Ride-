const userModel = require('../MODELS/user.model');

module.exports.createUser = async({
    firstname , lastname , email , password
}) => {
    if(!firstname || !email || !password ){
        throw new Error('all fieldd are required')
        
    } else {
        const user =  await userModel.create({
            fullname : {
                firstname,
                lastname
            },
            email,
            password

        })
        return user;
    }
}