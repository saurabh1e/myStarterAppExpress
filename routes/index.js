var express = require('express');
var router = express.Router();
var settings = require('./../settings');

var redis = settings.redis;
var elastic = settings.elastic;

/* GET home page. */
router.get('/', function(req, res, next) {

    redis.get(req.query['key'], function (err, reply) {
        res.send(reply);
    });

});

router.post('/', function(req, res) {
    redis.set([req.body['key'], req.body['value']]);
    elastic.index({
        index: 'testapp',
        type: 'keyValue',
        body: {
            key: req.body['key'],
            value: req.body['value']
        }
    });
    redis.get(req.body['key'], function (err, reply) {
        res.send(reply);
    });
});

module.exports = router;
