const fs = require("fs");
module.exports.config = {
	name: "Luật box",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Tiadals", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Luật box")==0 || (event.body.indexOf("luật box")==0)) {
		var msg = {
				body: "ʟᴜᴀ̣̂ᴛ ʙᴏx HEART WARMEST\n1. ᴛᴠᴍ ᴠᴀ̀ᴏ ᴛᴜ̛̣ sᴇᴛ ʙɪᴇ̣̂ᴛ ʜɪᴇ̣̂ᴜ (ᴛᴇ̂ɴ+ ɴᴀ̆ᴍ sɪɴʜ🐰) ᴆᴇ̂̉ ᴅᴇ̂̃ xᴜ̛ɴɢ ʜᴏ̂\n2. ʙᴏx ᴋʜᴏ̂ɴɢ ᴄᴀ̂́ᴍ ɴᴏ́ɪ ᴄʜᴜʏᴇ̣̂ɴ ᴛʜᴏ̂ ᴛᴜ̣ᴄ ɴʜᴜ̛ɴɢ ᴘʜᴀ̉ɪ ᴄᴏ́ ᴍᴜ̛́ᴄ ᴆᴏ̣̂ ! ᴛᴏ̂ɴ ᴛʀᴏ̣ɴɢ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ᴛʀᴏɴɢ ʙᴏx !\n3. ʙᴀ̂́ᴛ ᴄᴜ̛́ ᴛʜᴀ̀ɴʜ ᴠɪᴇ̂ɴ ɴᴀ̀ᴏ ᴄᴏ́ xɪ́ᴄʜ ᴍɪ́ᴄʜ ʜᴀʏ ᴠᴀ̂́ɴ ᴆᴇ̂̀ ʟᴀ̀ᴍ ʙᴀ̉ɴ ᴛʜᴀ̂ɴ ᴋʜᴏ́ ᴄʜɪ̣ᴜ ɴʜᴜ̛ : ᴋʜᴏ̂ɴɢ ʜᴀ̀ɪ ʟᴏ̀ɴɢ 1 ᴆɪᴇ̂̀ᴜ ɢɪ̀ ᴆᴏ́, ᴋʜᴏ̂ɴɢ ᴛʜɪ́ᴄʜ 1 ᴛʜᴜ̛́ ɢɪ̀ ᴆᴏ́ ... ᴄᴏ́ ᴛʜᴇ̂̉ ɴʜᴀ̆́ɴ ʀɪᴇ̂ɴɢ ᴄʜᴏ ᴄʜᴜ̉ ʙᴏx ʜᴏᴀ̣̆ᴄ ɴᴏ́ɪ ᴠᴏ̛́ɪ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ᴆᴇ̂̉ ᴆᴜ̛ᴀ ʀᴀ ʜᴜ̛ᴏ̛́ɴɢ ɢɪᴀ̉ɪ ǫᴜʏᴇ̂́ᴛ !\n4. ᴛᴜʏᴇ̣̂ᴛ ᴆᴏ̂́ɪ ᴋʜᴏ̂ɴɢ ᴘʜᴀ̂ɴ ʙɪᴇ̣̂ᴛ, ᴋʜᴏ̂ɴɢ ɢᴀ̂ʏ ᴡᴀʀ ( ɴᴇ̂́ᴜ 1 ᴀɪ ᴆᴏ́ sᴀɪ ʙɪ̣ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ɴʜᴀ̆́ᴄ ɴʜᴏ̛̉ ɴʜᴜ̛ɴɢ ᴋʜᴏ̂ɴɢ sᴜ̛̉ᴀ ᴛʜɪ̀ ǫᴜᴀ ʙᴏx ᴡᴀʀ ɢǫ ) .ᴋʜᴏ̂ɴɢ xᴜ́ᴄ ᴘʜᴀ̣ᴍ ʙᴀ̂́ᴛ ᴄᴜ̛́ ᴄᴀ́ ᴛʜᴇ̂̉ ɴᴀ̀ᴏ ᴛʀᴜ̛̀ ᴋʜɪ ʜᴏ̣ ʟᴀ̀ᴍ sᴀɪ ! ᴛᴀ̂́ᴛ ᴄᴀ̉ ᴠᴀ̂́ɴ ᴆᴇ̂̀ ɢᴀ̂ʏ ᴀ̉ɴʜ ʜᴜ̛ᴏ̛̉ɴɢ ᴆᴇ̂́ɴ ʙᴏx ɢᴀ̂ʏ ᴍᴀ̂́ᴛ ᴛᴜ̛̣ ɴʜɪᴇ̂ɴ ᴄʜᴏ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ = ᴋɪᴄᴋ \n5. ᴍᴏ̣̂ᴛ ɴɢᴜ̛ᴏ̛̀ɪ ᴠɪ̀ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ᴠᴀ̀ ɴɢᴜ̛ᴏ̛̣ᴄ ʟᴀ̣ɪ !\n6. ᴛʜᴀ̀ɴʜ ᴠɪᴇ̂ɴ ᴄᴜ̃ ᴘʜᴀ̉ɪ ʙᴀ̆́ᴛ ᴄʜᴜʏᴇ̣̂ɴ ᴠᴏ̛́ɪ ᴛʜᴀ̀ɴʜ ᴠɪᴇ̂ɴ ᴍᴏ̛́ɪ ᴠᴀ̀ ɢɪᴜ́ᴘ ʜᴏ̣ ʜᴏ̀ᴀ ɴʜᴀ̣̂ᴘ\n7. sᴀᴜ ᴋʜɪ ᴠᴀ̀ᴏ ʙᴏx ᴛʀᴏɴɢ 24ʜ ᴋʜᴏ̂ɴɢ ɴʜᴀ̆́ɴ sᴇ̃ ʙɪ̣ ʟᴏ̣ᴄ .\n8. ᴠᴀ̀ᴏ ʙᴏx ᴆᴇ̂̉ ɢɪᴀᴏ ʟᴜ̛ᴜ ᴄᴀ́ᴄ ʙᴀ̣ɴ ɴᴀᴍ ɴᴇ̂ɴ ɢɪᴜ̛̃ ʏ́ ᴛᴜ̛́ ᴋʜᴏ̂ɴɢ ɢᴀ̣ ɢᴀ̂̃ᴍ , ɴᴏ́ɪ ᴄʜᴜʏᴇ̣̂ɴ 'ᴅᴏ̛' ɢᴀ̂ʏ ᴋʜᴏ́ ᴄʜɪ̣ᴜ ᴄʜᴏ ᴄᴀ́ᴄ ʙᴀ̣ɴ ɴᴜ̛̃.\n9. ᴋʜᴏ̂ɴɢ ᴀɪ ʙᴀ̆́ᴛ ᴄᴀ́ᴄ ʙᴀ̣ɴ ᴠᴀ̀ᴏ ᴄᴀ̉ ᴍᴀ̀ ᴅᴏ ᴄᴀ́ᴄ ʙᴀ̣ɴ ᴛᴜ̛̣ ɴɢᴜʏᴇ̣̂ɴ , ᴠᴀ̀ᴏ ᴄʜᴀ̀ᴏ ᴠᴀ̀ ᴆɪ ᴄᴜ̃ɴɢ ᴘʜᴀ̉ɪ ʜᴏ̉ɪ ! ʜᴀ̃ʏ ʟᴀ̀ 1 ᴄᴏɴ ɴɢᴜ̛ᴏ̛̀ɪ ᴄᴏ́ ʜᴏ̣ᴄ !\n10. ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ᴘʜᴀ̉ɪ ʙɪᴇ̂́ᴛ ᴘʜᴀ̂ɴ ʙɪᴇ̣̂ᴛ ᴆᴀ̂ᴜ ʟᴀ̀ ᴆᴜ̀ᴀ ᴠᴜɪ ᴠᴀ̀ ᴆᴀ̂ᴜ ʟᴀ̀ ᴆᴜ̀ᴀ ǫᴜᴀ́ ᴛʀᴏ̛́ɴ ! ʀᴀɴʜ ɢɪᴏ̛́ɪ ᴄᴜ̉ᴀ sᴜ̛̣ ʜᴀ̀ɪ ʜᴜ̛ᴏ̛́ᴄ ᴠᴀ̀ ᴠᴏ̂ ᴅᴜʏᴇ̂ɴ ʀᴀ̂́ᴛ ɢᴀ̂̀ɴ.\n11. ɴᴇ̂́ᴜ ʙᴏx ʜᴏᴀ̣ᴛ ᴆᴏ̣̂ɴɢ ʜᴏ̀ᴀ ᴆᴏ̂̀ɴɢ , ᴠᴜɪ ᴠᴇ̉ ʟᴇ̂ɴ ᴋᴇ̀ᴏ ᴆɪ ᴏғғ xᴀ̉ ʟᴀ́ɴɢ\n12. ᴠᴀ̀ᴏ ᴆᴀ̂ʏ ᴋʜᴏ̂ɴɢ ᴆᴜ̛ᴏ̛̣ᴄ ʟᴀ̀ᴍ ᴄᴀ́ ᴄᴀ̉ɴʜ , ᴄᴀ̉ᴍ ᴛʜᴀ̂́ʏ ᴋʜᴏ̂ɴɢ ɴᴛ ᴆᴜ̛ᴏ̛̣ᴄ ᴠᴏ̛́ɪ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ᴛʜɪ̀ xɪɴ ᴠᴀ̀ ᴏᴜᴛ !\n13 . ʙᴏx ᴄʜᴜ̉ ʏᴇ̂́ᴜ ʜᴏᴀ̣ᴛ ᴆᴏ̣̂ɴɢ ᴠᴇ̂̀ ᴆᴇ̂ᴍ ɴᴇ̂ɴ ᴄᴀ́ᴄ ʙᴀ̣ɴ ʜᴏᴀ̣ᴛ ᴆᴏ̣̂ɴɢ ɢɪᴏ̛̀ ᴠɪᴇ̣̂ᴛ ɴᴀᴍ ᴆᴜ̛̀ɴɢ ᴠɪ̀ ʙᴀɴ ɴɢᴀ̀ʏ ɪ́ᴛ ɴɢᴜ̛ᴏ̛̀ɪ ɴʜᴀ̆́ɴ ᴍᴀ̀ ᴋʜᴏ̂ɴɢ ᴛᴜ̛ᴏ̛ɴɢ ᴛᴀ́ᴄ ʙᴏx ( ɴʜᴀ̆́ᴄ ᴛᴠᴍ)\n14. ʙᴏx ᴋʜᴏ̂ɴɢ ᴄᴀ̂̀ɴ sᴏ̂́ ʟᴜ̛ᴏ̛̣ɴɢ ᴄʜɪ̉ ᴄᴀ̂̀ɴ ᴄʜᴀ̂́ᴛ ʟᴜ̛ᴏ̛̣ɴɢ , ɪ́ᴛ ᴄᴜ̃ɴɢ ᴆᴜ̛ᴏ̛̣ᴄ ᴍɪᴇ̂̃ɴ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ʙᴇ̂ɴ ɴʜᴀᴜ ᴅᴀ̀ɪ ʟᴀ̂ᴜ ᴠᴀ̀ ᴠᴜɪ ᴠᴇ̉ ^^ ɴᴀ̀ʏ ʟᴀ̀ ᴛᴜ̀ʏ ᴛᴀ̂ᴍ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ !\n15. Vào tame thấy hợp sau 3 ngày phải đổi tên không = auto kick\n16.mọi người add game với nhau để câu cá, tán gái, và tâm sự cùng nhau nhé... \nʏᴇ̂ᴜ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ʀᴀ̂́ᴛ ɴʜɪᴇ̂̀ᴜ ♡ !!\n𝘽𝙤𝙨𝙨 : Hoàng Hiệu 🐰 , Yu ❤",
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}