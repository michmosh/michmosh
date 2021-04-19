const express = require('express');
const router = express();

router.get('/', function (req, res) {
    console.log(req)
    res.status(200)
   res.send('GET /');
})

router.get('/knowladge-base', function (req, res) {
    const jsonReesponse = require('./mocks/knowladge-base.json')
    res.status(200)
   res.send(jsonReesponse);
})
router.get('/policies', function (req, res) {
    const jsonReesponse = require('./mocks/policies.json')
    res.status(200)
   res.send(jsonReesponse);
})
router.get('/forms', function (req, res) {
    const jsonReesponse = require('./mocks/forms.json')
    res.status(200)
   res.send(jsonReesponse);
})
router.get('/documents', function (req, res) {
    const jsonReesponse = require('./mocks/documents.json')
    res.status(200)
   res.send(jsonReesponse);
})

router.post('/policies/:id', async function(){
    const mockResponse = {
        status:'ok',
        success : true
    }
    await res.status(200)
    res.send(mockResponse)
})
router.post('/knowladge-base/:id', async function(req,res){
    const clientId = req.params.id;
    const mockResponse = {
        status:'ok',
        success : true,
        body:`thank you Max Kozlov - id number :${clientId}`
    }
    await res.status(200)
    res.send(mockResponse)
})

module.exports = router