module.exports.config = {
	name: "ping",
	version: "0.0.3",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "tag toàn bộ thành viên",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 10
};

module.exports.run = async function({ api, event, args, Threads }) {
	try {
		var all = (await Threads.getInfo(event.threadID)).participantIDs;
    all.splice(all.indexOf(api.getCurrentUserID()), 1);
	  all.splice(all.indexOf(event.senderID), 1);
		var body = (args.length != 0) ? args.join(" ") : "Lên nghe quản trị viên thông báo kìa các cậu 🍒 ", mentions = [], index = 0;
		
    for (let i = 0; i < all.length; i++) {
		    if (i == body.length) body += body.charAt(body.length - 1);
		    mentions.push({
		  	  tag: body[i],
		  	  id: all[i],
		  	  fromIndex: i - 1
		    });
	    }

		return api.sendMessage({ body: `‎${body}`, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}