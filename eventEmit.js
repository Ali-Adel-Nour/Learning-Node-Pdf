var eventEmitter = require('events').EventEmitter;
var counter = 10;
var em = new eventEmitter();
setInterval(function() { em.emit('timed', counter++); }, 3000);
em.on('timed', function(data) {
 console.log('timed ' + data);
});
