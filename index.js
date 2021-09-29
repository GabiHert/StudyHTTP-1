// Gabriel Guinter Herter

const http = require("http");

const srv =  http.createServer((req,res) => //crates server wich recieves request e response 
{
    console.log("METHOD:", req.method); //request method  
    console.log("HEADERS:", req.headers); // request headers
    console.log("HTTP VERSION:", req.httpVersion); // request http version  


    if(req.method === "POST")// if method is POST
    {
        res.writeHead(201,{"Content-Type":"application/json"});//RESPONSE status code & headers specification 
        res.write(`
        {
            "method":${req.method}, 
            
        }`)//RESPONSE json message 

    }
    else
    {
        res.writeHead(200,{ "content-Type":"text/html"}) //RESPONSE status code & headers specification 

        //writes response content, ENTITY 
        res.write(`<!DOCTYPE html> 
        <html lang="pt-BR">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Data Hoje</title>
        </head>
        
        <body>
        
            <section class="container">
                <h3 class = "titulo">Data/hora Hoje</h3>
                <h2 class="dataHoje"> teste </h2>
                <h1 class="horaHoje"> teste </h1>
            </section>

        </body>
        
        </html>`);

    }

    
    res.end("FINISHED");// final RESPONSE message 

});

srv.listen(3001,()=> console.log("SERVER OK!") ); // "listen" to 3001 gate & call-back funcion (executed when the serever is built)