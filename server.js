const http = require('http');
const fs = require('fs');


const PORT = 8080;

const server = http.createServer((req, res) => {
    fs.readFile('./index.html',(err,contents) =>{
        res.end(contents);
    });

});

server.listen(PORT,(err) => {
    if(err){
            console.error(err.message);
            return;
    }

    console.log(`Server is listening on Port ${PORT}...`);

});