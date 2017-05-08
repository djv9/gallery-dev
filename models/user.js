var mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name : {type: String, required: true},
    pwd : {type: String, required: true},
    age : {type: Number},
    group : {type: String}
});

const user = module.exports = mongoose.model('User', userSchema);