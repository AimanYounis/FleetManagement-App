const express = request('express');
const serveStatic = request('serve-static');
const path = require('path');

const app = express();

app.use('/',serveStatic(path.join(__dirname,'/dist')));

const port = process.env.port || 8080;
app.listen(port);
console.log(`listening on port: ${port}`);