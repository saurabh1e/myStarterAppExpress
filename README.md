# myStarterAppExpress
Starter App for express with redis and elastic search

1. get '/index' with parameter name key will fetch value from redis.
  eg: 127.0.0.1:3000/index/?key=
2. post on '/index' with json in body with format {"key": "key", "value": "value"} will put data in redis and elastic.
3. get on '/search' with parameter name value will search elastic for that value.
