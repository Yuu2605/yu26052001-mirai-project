
module.exports.config = {
  name: "sukunaxmegumi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaiser",//nguồn :hungcho
  description: "random ảnh sukuna & megumi",
  commandCategory: "random-img",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/7cjnqvi.jpeg",
"https://i.imgur.com/5oinLy8.jpeg",
"https://i.imgur.com/6ul7qgs.jpeg",
"https://i.imgur.com/Ajc8J3w.jpeg",
"https://i.imgur.com/AMnJonb.jpeg",
"https://i.imgur.com/zfPUyJf.jpeg",
"https://i.imgur.com/hDUVnKQ.jpeg",
"https://i.imgur.com/i8oVYYP.jpeg",
"https://i.imgur.com/28z862W.jpeg",
"https://i.imgur.com/l272A4e.jpeg",
"https://i.imgur.com/jo5KLsa.jpeg",
"https://i.imgur.com/oVgoJ1d.jpeg",
"https://i.imgur.com/Ajc8J3w.jpeg",
    ];
     var callback = () => api.sendMessage({body:`Số ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };js
