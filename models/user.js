const userSchema = mongoose.Schema({
    name : {type: String, required: true},
    pwd : {type: String, required: true}
});

const user = module.exports = mongoose.model('User', userSchema);