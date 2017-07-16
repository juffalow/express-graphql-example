var models = require('./models/index.js');

function startApp() {
    models.quote.findAll({ include: [ { model: models.author } ] }).then(function(quote) {
        for( var i = 0; i < quote.length; i++ ) {
            console.log(quote[i].id + " | " + quote[i].quote + " | " + quote[i].author.name + " " + quote[i].author.last_name);
        }
    }).then(function() {
        models.author.findAll().then(function(author) {
            for( var i = 0; i < author.length; i++ ) {
                console.log(author[i].name + " " + author[i].last_name);
            }
        });
    });
}

models.sequelize.sync()
.then(function() {
    startApp();
})
.catch(function (e) {
    throw new Error(e);
});
