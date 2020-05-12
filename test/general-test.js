const expect = require('chai').expect;
var chai = require('chai')
var chaiHttp = require('chai-http');

chai.use(chaiHttp)

const MESSAGES = require('../util/Messages')


var server = require('../index').server


function sendRequest(path, params = {}){
	return chai.request(server).get('/'+path).set('content-type', 'application/json').send(params)
}

//assert http sucsess
function assertSuccess(res) {
	expect(res.status).to.equal(200)
}

describe('all general endpoint testing ', () => {

	it('test basic get request', (done) =>{
		sendRequest('testGetCall', {}).end((err, res, body) => {
			assertSuccess(res)
			done()
		})
	})

})


