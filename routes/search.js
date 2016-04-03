var express = require('express');
var router = express.Router();
var settings = require('./../settings');

var redis = settings.redis;
var elastic = settings.elastic;

/* GET users listing. */
router.get('/', function(req, res, next) {

    elastic.search({
        index: 'testapp',
        type: 'keyValue',
        body: {
            query: {
                match: {
                    value: req.query.value
                }
            }
        }
    }).then(function(resp){
        res.send(resp['hits']['hits']);
    });

});

module.exports = router;
