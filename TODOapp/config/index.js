var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds123361.mlab.com:23361/nodetodosample`;
    }

};