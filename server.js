var http = require('http');
var httpProxy = require('http-proxy');

var port = process.env.PORT || 80;

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
  if (req.headers.host === 'andrewhoekstra.com') {
    proxy.web(req, res, { target: 'http://localhost:3000' });
  }
  else if (req.headers.host === 'hookybrew.com') {
    proxy.web(req, res, { target: 'http://localhost:3001' });
  }
  else if (req.headers.host === 'kd8raw.com') {
    proxy.web(req, res, { target: 'http://localhost:3002' });
  }
  else
  {
    console.log("Invalid url");
  }
});

console.log("Listening on port " + port);
server.listen(port);
