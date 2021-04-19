const express = require('express');
const router = express();

router.get('/', function (req, res) {
    console.log(req)
   res.send('GET /');
})

router.get('/knowladge-base', function (req, res) {
    const jsonReesponse = require('./mocks/knowladge-base.json')
   res.send(jsonReesponse);
})
router.get('/policies', function (req, res) {
    const jsonReesponse = require('./mocks/policies.json')
   res.send(jsonReesponse);
})
router.get('/forms', function (req, res) {
    const jsonReesponse = require('./mocks/forms.json')
   res.send(jsonReesponse);
})
router.get('/documents', function (req, res) {
    const jsonReesponse = require('./mocks/documents.json')
   res.send(jsonReesponse);
})

module.exports = router