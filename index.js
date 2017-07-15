var models = require('./models/index.js');

function startApp() {
    models.quote.findAll().then(function(quote) {
        for( var i = 0; i < quote.length; i++ ) {
            console.log(quote[i].id + " | " + quote[i].quote);
        }
    });
}

models.sequelize.sync()
.then(function() {
    startApp();
})
.catch(function (e) {
    throw new Error(e);
});
