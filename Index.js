var express = require('express');
var app = express();
var mongoose= require('mongoose');
var Schema= mongoose.Schema;
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

mongoose.connect("mongodb://localhost/photobook",{useNewUrlParser: true,useUnifiedTopology: true});
var postSchemaJSON = {
  post_name: String,
  ubication: String,
  size: String,
  description: String
};

var post_schema= new Schema (postSchemaJSON);
var post = mongoose.model("post",post_schema);
 
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
    res.send("uploading_content");
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
  app.post('/upload_your_idea', function(req, res, next){
    let EDFile = req.files.file
    EDFile.mv(`./post/${EDFile.Photobook}`,err => {
        if(err) return res.status(500).send({ message : err })
        return res.status(200).send({ message : 'File upload' })
    res.end();
  })
});

app.listen(3000,function(err){
    if (err)console.log("Problemas para abrir el puerto")
    console.log("Se abre puerto 3000")
});
