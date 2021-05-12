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
router.get('/claims', function (req, res) {
    const jsonReesponse = require('./mocks/claims.json')
    res.status(200)
   res.send(jsonReesponse);
})
router.get('/templateForUser/:id', function (req, res) {
    const jsonReesponse = require('./mocks/knowladge-base.json')
    res.status(200)
   res.send(jsonReesponse);
})
router.get('/templateText/:channelId/:templateId', async function(req,res){
    const clientId = req.params.id;
    const mockResponse = `${clientId} שלום, מסמכי הביטוח שלך בחברתינו ממתינים עבורך לצפייה באזור האישי באתר החברה: $urlClientZone .\nנשמח לעמוד לשירותך בכל עת, $brand." `
   
    await res.status(200)
    res.send(mockResponse)
})
router.get('/twilio/login/authenticated?disableLdap=1', async function(req,res){
    await res.status(200)
    await res.send('ok');
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

router.post('/register-activitey/', async function(req,res){
    const mockResponse = {
        status:'ok',
        success : true
    }
    await res.status(200)
    res.send(mockResponse)
})

module.exports = router