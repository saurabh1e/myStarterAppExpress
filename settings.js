/**
 * Created by saurabh on 4/4/16.
 */
var redis = require("redis");
var elasticsearch = require('elasticsearch');

exports.elastic = elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});
exports.redis = redis.createClient(6379, '127.0.0.1', db=0);
