const User = require('../models/User');

exports.view = async (req, res) => {
    try{
        //query data from database
        const rows = await User.find({});
        return res.status(200).json({
            status: 'success',
            data: rows,
        });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    };
};


exports.create = async (req, res) => {
    try {
        //create user from req.body into database
        const row = await User.create(req.body);
        return res.status(200).json({
            status:'success',
            data:  row 
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    };
};


exports.search = async (req, res, next) => {
    try {
        //query on database to filter using id 
        const row = await User.findById(req.params.id);
        return res.status(200).json({
            status:'success',
            data: row
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    };
};


exports.update = async (req, res) =>{
    try{
        //req.body contains data that needs to be replaced
        const row = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.status(200).json({
            status: 'success',
            data:  row 
        });
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    };
};

exports.delete = async (req, res) =>{
    try{
        //delete from database
        await  User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: null
        });
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    };
};