//Install express server
const express = require('express');
const app = express();
const { exec } = require('child_process');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// Set port (default: 3000). For Heroku, we need to use
// the port set by the environment variable $PORT
const port = process.env.PORT || 3000;

const command = `json-server --watch api/data.json --port ${port}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.log('Error running exec', err);
    return;
  }
});
