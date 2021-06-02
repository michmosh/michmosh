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
router.get('/twilio/flex/clientForms/:email', function (req, res) {
    const jsonReesponse = require('./mocks/forms.json')
    res.status(200)
   res.send(jsonReesponse);
})
router.get('/twilio/flex/clientDocuments/:id', function (req, res) {
    const jsonReesponse = require('./mocks/documents.json')
    res.status(200)
   res.send(jsonReesponse);
})
router.get('/twilio/flex/clientPolicies/:id', function (req, res) {
    const jsonReesponse = require('./mocks/policies.json')
    res.status(200)
   res.send(jsonReesponse);
})
router.get('/twilio/flex/clientClaims/:id', function (req, res) {
    const jsonReesponse = require('./mocks/claims.json')
    res.status(200)
   res.send(jsonReesponse);
})
router.get('/twilio/flex/templateForUser/:id', function (req, res) {
    const jsonReesponse = require('./mocks/knowladge-base.json')
    res.status(200)
   res.send(jsonReesponse);
})
router.get('/twilio/flex/templateTxt/:channelId/:templateId', async function(req,res){
   
    const mockResponse = `יהודית שלום, מסמכי הביטוח שלך בחברתינו ממתינים עבורך לצפייה באזור האישי באתר החברה: https://ut555.relay.yashir.co.il/site/online/login.html?BASKET_NR=null . `
   
    await res.status(200)
    res.send(mockResponse)
})
router.get('/twilio/flex/historyChannels/:from', async function(req,res){
    const from = req.params.from;
    const jsonResponse = require('./mocks/search.json')
    await res.status(200)
    res.send(jsonResponse)
})
router.get('/twilio/login/authenticated', async function(req,res){
    await res.status(200)
    res.send('ok');
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

router.post('/twilio/flex/conversationUpdate/', async function(req,res){
    const mockResponse = {
        status:'ok',
        success : true
    }
    await res.status(200)
    res.send(mockResponse)
})

module.exports = router