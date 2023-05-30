// var http = require('http');
// var app = require('./config/express');
// require('./config/database');

// http.createServer(app).listen(3000, function(){
//     console.log('Porta rodando 3000');
// });



var app = require('./config/express');

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Node executando na porta ', app.get('port'));
});