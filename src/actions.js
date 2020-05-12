const MESSAGES = require('../util/Messages')


module.exports = {

	get_testGetCall(req, res){

		//res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
        res.status(200).json({
        	msg:MESSAGES.TEST_ENDPOINT_MSG
        })

	}
}