var result = require('./custommodule');

result.homeloanemi(10000,8,30);
result.userinfo("20/2/2000");

var [simpleinterest,finalamount] = result.simpleinterest(10000,8,30);
console.log(simpleinterest);
console.log(finalamount);