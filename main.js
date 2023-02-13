const express = require('express');


const app = express();


app.use(express.static('public'), express.json())

app.get('/', function(request, response){
    response.sendFile('public')
    response.sendFile('vectors.json')
});


const port = 3000;



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })