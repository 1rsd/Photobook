var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  res.send("Loading!!");
  res.end();
});
  app.get('/Open_photo', function(req, res, next){
    console.log('get route', req.body.testing);
    res.send("Open photo");
    res.end();
  }); 


  app.post('/Uploading_content', function(req, res, next){
    console.log('post content', req.body.testing);
    res.send("Uploading content;Description: ; ");
    res.end();
  });

  app.get('/Post', function(req, res, next){
    console.log('get route', req.body.testing);
    res.send("Info post ");
    res.end();
  });

  app.get('/Like', function(req, res, next){
    console.log('get route', req.body.testing);
    res.send("Like");
    res.end();
  });

  app.post('/Post_comment', function(req, res, next){
    console.log('put route', req.body.testing);
    res.send("Post comment");
    res.end();
  });
  app.get('/upload_your_idea', function(req, res, next){
    console.log('get route', req.body.testing);
    res.send("Redirection to upload your idea");
    res.end();
  });

app.listen(3000,function(err){
    if (err)console.log("Problemas para abrir el puerto")
    console.log("Se abre puerto 3000")
});

