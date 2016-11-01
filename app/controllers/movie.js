// Import the packages
var mysql = require('mysql');

//=== Local database connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'MovieSearch',
    password: 'tiva101'
});

// Connect database
connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
    } else {
        console.log('Connected as id: ' + connection.threadId);
    }
});

// Get Movie Detail by Movie_id
exports.getMovieDetail = function (req, res) {
    var query = connection.query('select * from Movie where Movie_id = ?', req.params.id, function (err, result) {
        if (err) {
            return res.status(400).send(err);
        } else {
            return res.status(200).send(result);
        }
    });
};

// Add trash message
exports.addMovie = function(req, res) {

    var input = {
        Movie_name : req.body.Movie_name
    };

    var query = connection.query('insert into Movie set ?', input, function(err, result) {
        if (err) {
            return res.status(400).send(err);
        } else {
            if (result.length > 0) {
                return res.status(200).send(result);
            } else {
                console.log(input);
                return res.status(201).send('');
            }
        }
    });

};

// Delete Movie
exports.deleteMovie = function (req, res) {
    var query = connection.query('delete from Movie where Movie_id = ?', req.params.id, function (err, result) {
        if (err) {
            return res.status(400).send(err);
        } else {
            return res.status(200).send(result);
        }
    });
}

// Update Movie
exports.updateMovie = function (req, res) {
    var query = connection.query('update Movie set isWatched = ! isWatched where Movie_id = ?', req.params.id, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(400).send(err);
        } else {
            return res.status(200).send(result[0]);
        }
    });
};
