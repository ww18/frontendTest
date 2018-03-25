/**
 * Created by phoebe on 2018/3/25.
 */
const supertest = require('supertest');
const app = require('./app.js');

function request(){
  return supertest(app.listen());
}
describe("node接口测试",function(){
	it("test 接口测试", function(done){
		request()
		.get('/test')
		.expect("Content-Type",/json/)
		.expect(200)
		.end(function(err, res){
			if(res.body.data == "Hello World!"){  //注意这里是body里面的，为什么老师那个可以直接取
				done();
			}else{
				done(new Error(res))
			}
		})
	})
});

// const request = require('supertest');
// const express = require('express');
 
// const app = express();
 
// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'tobi' });
// });
 
// request(app)
//   .get('/user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
//   .expect(200)
//   .end(function(err, res) {
//     if (res) throw res.body.name;
//   });

// describe('GET /users', function() {
//   it('respond with json', function(done) {
//     request(app)
//       .get('/users')
//       .set('Accept', 'application/json')
//       .expect(200)
//       .end(function(err, res) {
//       	if(res.body.name == "tobi"){
// 				done();
// 			}else{
// 				done(new Error(res.body.name))
// 			}
//         // if (err) return done(err);
//         // done();
//       });
//   });
// });
