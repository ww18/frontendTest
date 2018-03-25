const Mocha = require('mocha');
var mocha = new Mocha({
  reporter: 'mochawesome'
});
mocha.addFile("./service/router.spec.js");
mocha.run(function(){
	console.log("done");
	process.exit();
});