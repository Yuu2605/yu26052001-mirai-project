const fs = require("fs");
module.exports.config = {
	name: "yamate",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MinhQuang - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yamate")==0 || (event.body.indexOf("yamate")==0)) {
		var msg = {
				body: "y⃠a⃠m⃠a⃠t⃠e⃠ k⃠u⃠d⃠a⃠s⃠a⃠i⃠",
				attachment: fs.createReadStream(__dirname + `/noprefix/yamate=.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}