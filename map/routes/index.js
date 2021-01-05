var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/update', function(req, res, next){
  update(req, res, next);
})

router.get('/events', function(req, res, next){
  eventsHandler(req, res, next);
})

router.get('/getAPI', function(req, res, mext){
  res.render('getAPI',{ title: 'Express' })
})

router.post('/register', function(req, res, next){
 substriber.push(res.body.url); 
})

let substriber = [];
let clients = [];
let locations = [];
function eventsHandler(req, res, next) {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  };
  res.writeHead(200, headers);

  const data = `data: ${JSON.stringify(locations)}\n\n`;
  res.write(data);
  
  const clientId = Date.now();
  const newClient = {
    id: clientId,
    res
  };
  clients.push(newClient);
  
  req.on('close', () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter(c => c.id !== clientId);
  });
}

function sendEventsToAll(newLocation) {
  clients.forEach(c => c.res.write(`data: ${JSON.stringify(newLocation)}\n\n`))
}

async function update(req, res, next) {
  const newLocation = req.body;
  locations.push(newLocation); 
  res.json("ok");
  return sendEventsToAll(newLocation);
}

module.exports = router;