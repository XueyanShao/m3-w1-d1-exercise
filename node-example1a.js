var myLogModule = require('./node-example1.js'); // add ./ because module is in same directory

myLogModule.info('Node.js started');
myLogModule.warning('Node.js has a warning');
myLogModule.error('Node.js has an error');

//check in bash terminal
//node node-example1a.js