const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pas de nom'],
    },
    firstname: {
        type: String,
        required: [true, 'Pas de prénom'],
    },
    mail: {
        type: String,
        required: [true, 'Pas de mail'],
    },
    password: {
        type: String,
        required: [true, 'Pas de mot de passe']
    },

})

const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel