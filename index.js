const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router')
app.use(cors());
app.options('*', cors());
app.use(router)

const server = app.listen(8081, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})