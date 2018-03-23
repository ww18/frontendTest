"use stract"
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

function fan1(n, f=1){
	if(n == 1){ return f; }
	return fan1(n-1, n + f);
}

function fan2(n){
	if(n == 1) return 1;
	return n + fan2(n-1);
}
// add tests 
suite.add('尾调用优化的代码', function(){
	fan1(100,1);
})
.add('递归循环', function(){
	fan2(100);
})
// add listeners 
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async 
.run({ 'async': true });