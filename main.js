const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', function(request, response){
    response.sendFile('public');
});

const port = 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })