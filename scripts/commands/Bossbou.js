const fs = require("fs");
module.exports.config = {
	name: "Botboss",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("bossbou") || react.includes("boserbouk") || react.includes("gf")) {
		var msg = {
				body: " Boss. SK SHAKIL(TOM)আমার ভাবি,😌😌মিস্টি😌😌"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	   }
