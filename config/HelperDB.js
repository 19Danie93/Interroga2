var config = require('./config'),
    pg     = require('pg');

module.exports = function(){
    var	db = new pg.Client(config.db);
	db.connect();
    return db;
}
