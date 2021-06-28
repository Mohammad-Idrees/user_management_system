const fetch = require("node-fetch")

//View users
exports.view = (req, res) => {
    //data fetching from api '/users/'
    fetch('http://localhost:5001/users')
        .then(res => res.json())
        .then(data => {
            rows = data.data
            res.render('home', { rows });
        })
        .catch(err => console.log(err));
}

exports.find = (req, res) => {
    //data fetching from '/users/search/:id'
    //id = req.body.search
    fetch(`http://localhost:5001/users/search/${req.body.search}`)
        .then(res => res.json())
        .then(data => {
            rows = [data.data];
            res.render('home', { rows });
        })
        .catch(err => console.log(err));
}

exports.adduser = async (req, res) => {
    try {
        res.render('adduser');
    } catch (error) {
        console.log(error);
    };
};

exports.create = (req, res) => {
    //create user and post req.body to api endpoint '/users/' using fetch
    fetch('http://localhost:5001/users/', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            res.render('adduser', { alert: 'User added successfully' });
        })
        .catch(err => console.log(err));
};

exports.edituser = (req, res) => {
    //data fetching from '/users/search/:id'
    //id=req.params.id

    fetch(`http://localhost:5001/users/search/${req.params.id}`)
        .then(res => res.json())
        .then(data => {
            rows = [data.data]
            res.render('edituser', { rows });
        })
        .catch(err => console.log(err));
    ;
}


exports.updateuser = (req, res) => {
    //send req.body to '/users/update/:id' api endpoint using fetch(post) and backend handles updation
    //id = req.params.id

    fetch(`http://localhost:5001/users/update/${req.params.id}`, {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        rows = [data.data]
        res.render('edituser', { rows, alert: 'Updation Successful' });
    })
    .catch(err => console.log(err));
};

exports.deleteuser = (req, res) => {
    //delete request to endpoint '/users/delete/:id' using fetch and backend handles deletion
    //id = req.params.id

    fetch(`http://localhost:5001/users/delete/${req.params.id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};

exports.viewuser = (req, res) => {
    //user fetching from '/users/search/:id'
    //id = req.params.id

    fetch(`http://localhost:5001/users/search/${req.params.id}`)
        .then(res => res.json())
        .then(data => {
            rows = [data.data]
            res.render('viewuser', { rows });
        })
        .catch(err => console.log(err));
};