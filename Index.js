var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  res.send("Cargando!!");
  res.end();
});

app.get('/2', function(req, res, next){
    console.log('get route', req.testing);
    res.send("Raul");
    res.end();
  });
  app.get('/2', function(req, res, next){
    console.log('get route', req.testing);
    res.send("Abrir foto");
    res.end();
  }); 


  app.post('/', function(req, res, next){
    console.log('post content', req.body.testing);
    res.send("Subiendo contenido;Description: ; ");
    res.end();
  });

  app.post('/', function(req, res, next){
    console.log('post content', req.body.testing);
    res.send("Info post ");
    res.end();
  });

  app.put('/', function(req, res, next){
    console.log('put route', req.body.testing);
    res.send("Publicar Comentario");
    res.end();
  });
  app.put('/', function(req, res, next){
    console.log('put route', req.body.testing);
    res.send("Redirección a Sube tu idea");
    res.end();
  });

app.listen(3000,function(err){
    if (err)console.log("Problemas para abrir el puerto")
    console.log("Se abre puerto 3000")
});

