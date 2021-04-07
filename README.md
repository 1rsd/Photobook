<!DOCTYPE html>
<html>
        <font color="#000000" size="4" face="Poppins">
            <h1>Proyecto Photobook</h1>
                <img src="https://i.imgur.com/xQMSaS4.png" height="100px" width="300px">
            <p>Photobook busca conectar las ideas con las personas con una aplicación en 
                la cual los usuarios puedan buscar y encontrar momentos e ideas sin necesidad de un usuario 
                y altamente funcional.</p>
            <h3>Caracteristicas:</h3>
            <ul>
                <li>Poder compartir fotos en cualquier momento sin necesidad de un usuario.</li>
                <li>Segura: Al no requerir de inicio de sesión, todo lo que subas será anonimo y solo guardaremos el contenido que subas</li>
                <li>Encontrar momentos e ideas que no se han encontrado en ningún lado.</li>
                <li>Encontrar momentos e ideas que no se han encontrado en ningún lado.</li>
                <li>Imagenes de dominio público.</li>
            </ul>
            <img src="https://larazon.co/wp-content/uploads/2018/01/Fotograf%C3%ADasCelular2.jpg" alt="Persona sujetando su celular hacia al Big Ben en Londres a punto de tomarle una foto">
            <h3>Lenguajes a usar:</h3>
            <ul>
                <li>TypeScript</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
                <h3>Con esto buscamos hacer de Photobook, un lugar donde las ideas se encuentran.</h3>
        </font>
    </body>

</html>
app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  res.send("Cargando!!");
  res.end();
});

app.get('/2', function(req, res, next){
    console.log('get route', req.testing);
    res.send("Abrir foto");
    res.end();
  }); 


  app.post('/3', function(req, res, next){
    console.log('post content', req.body.testing);
    res.send("Subiendo contenido;Description: ; ");
    res.end();
  });

  app.post('/4', function(req, res, next){
    console.log('post content', req.body.testing);
    res.send("Info post ");
    res.end();
  });

  app.put('/5', function(req, res, next){
    console.log('put route', req.body.testing);
    res.send("Publicar Comentario");
    res.end();
  });
  app.put('/6', function(req, res, next){
    console.log('put route', req.body.testing);
    res.send("Redirección a Sube tu idea");
    res.end();
  });

app.listen(3000,function(err){
    if (err)console.log("Problemas para abrir el puerto")
    console.log("Se abre puerto 3000")
});
