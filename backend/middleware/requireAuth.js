const jwt = require('jsonwebtoken')
const User = require('../models/userModel');

const requireAuth = async (req,res,next) => {

    //verify authentication
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error:"Auth token required"});
    }

    const token = authorization.split(' ')[1];

    try{
        const {_id} = jwt.verify(token,process.env.SECRET);

        const user = await User.findOne({_id}).select('_id');
        next();

    }catch(err){
        console.log(err);
        res.send(401).json({error: "Request not verified"});
    }
}

module.exports = requireAuth;