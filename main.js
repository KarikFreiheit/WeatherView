const express = require('express');
const app = express();


app.use(express.static('public'), express.json())

app.get('/', function(request, response){
    response.sendFile('public')
    response.send('vectors.json')
});

app.get('/json', function(request, response){
    response.sendFile('./vectors.json')
});

const port = 3000;

app.post('/', function(request, response){
    const body = req.body;
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })