const User = require("../../models/User");
const Location = require("../../models/Location");

const userResolver = {
    Query : {
        async getUsers(){
            const users = await User.findAll({include : [{model : Location}]});
            const userList = []
            users.forEach(user => {
                user.dataValues.location = user.dataValues.Location.dataValues
                userList.push(user.dataValues)
            });
            console.log(userList);
            return userList
        }
    },
    Mutation : {
        async newUser(_, args){
            const location = await Location.create(args.input.location,{raw : true})
            const nuser = await User.create({
                title : args.input.title,
                firstName:  args.input.firstName,
                lastName: args.input.lastName,
                gender: args.input.gender,
                email: args.input.email,
                dateOfBirth: args.input.dateOfBirth,
                phone: args.input.phone,
                picture: args.input.picture,
                LocationId : location.dataValues.id
            },{include : [{model : Location}]})
            const user = await User.findByPk(nuser.dataValues.id, {include : [{model : Location}]})
            user.dataValues.location = user.dataValues.Location.dataValues
            
            return user.dataValues
        },

        async deleteUser(_, args) {
            const user = await User.findByPk(args.id)
            return user.destroy() 
        }
    }
}



module.exports = {userResolver}