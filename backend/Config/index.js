var config = require('./config.json')

module.exports = {
    getDbConnectionString: function(){
        return "mongodb://" + config.dbuser +":"+ config.dbpassword + "@ds117423.mlab.com:17423/mernproject"
    }
}