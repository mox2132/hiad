const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://festive-topaz.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const { User, MessageMentions } = require('discord.js') 
const SQLite = require('sqlite'); 
const path = require('path'); 
const ids = ["333850936373936129"]
SQLite.open(path.join(__dirname, 'profile.db')).then(() => {
SQLite.run(`CREATE TABLE IF NOT EXISTS profileSystem (id VARCHAR(30), credits BIGINT, lastDaily BIGINT, xp BIGINT, level BIGINT, rep BIGINT, lastRep BIGINT,info TEXT)`)}).catch(err => console.error(err))
let funcs = {generateInt: (low, high) => {return Math.floor(Math.random() * (high - low + 1) + low);},getLevelFromExp: (exp) => {let level = 0;
while (exp >= funcs.getLevelExp(level)) {exp -= funcs.getLevelExp(level);level++;}return level;},
getLevelExp: (level) => {return 5 * (Math.pow(level, 2)) + 50 * level + 100;}}
client.on('message', async msg => {
SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`).then(res => {var s;let xp = funcs.generateInt(1, 5);
if(!res) s = `INSERT INTO profileSystem VALUES ('${msg.author.id}', 1, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info")`
if(res) {xp = res.xp + xp;
let level = funcs.getLevelFromExp(xp);let lvl = res.level;
/*if(res.level != level) {
lvl++;
msg.channel.send('Level UP!, ' + msg.author + ' just reached level ' + level)} */
s = `UPDATE profileSystem SET xp = ${xp}, level = ${lvl} WHERE id = '${msg.author.id}'`}SQLite.run(s);}).catch(err => console.error(err))
if(!msg.content.startsWith(prefix)) return undefined;let args = msg.content.split(' ');
if(args[0].toLowerCase() == `${prefix}credit` || args[0].toLowerCase() === `${prefix}credits`) {let xp = funcs.generateInt(1, 5);
const mention = msg.mentions.users.first() || client.users.get(args[1]) || msg.author;const mentionn = msg.mentions.users.first() || client.users.get(args[1]);
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${mention.id}'`)
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${mention.id}', 1, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info"`)
let credits;if(!res) credits = 0;else credits = res.credits;
let resOfAuthor = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)
if(!resOfAuthor) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 1, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info"`)
let creditsOfAuthor = resOfAuthor.credits;
if(!args[2]){msg.channel.send(`**:money_with_wings: | ${mention.username}, Have Credits \`$${credits}\`**`)}else if(mentionn && args[2]) {
if(args[2] < 1) return msg.channel.send(`**:x: | Error**`);if(mention.bot) return msg.channel.send(`**:x: | Error**`);if(mentionn.id === msg.author.id) return msg.channel.send(`**:x: | Error**`);
if(args[2].includes("-")) return msg.channel.send(`**:x: | Error**`);if(args[2].includes(".")) return msg.channel.send(`**:x: | Error**`);
let resOfMen = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${mentionn.id}'`);
if(!resOfMen) SQLite.run(`INSERT INTO profileSystem VALUES ('${mentionn.id}', 1, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info"`)
let creditsOfMen = resOfMen.credits;
if(isNaN(args[2])) return msg.channel.send(`**:x: | Error , Please input number of credits to transfer it.**`);if(args[2] > creditsOfAuthor) return msg.channel.send(`**:x: | Error , You Don't Have Enough Credit**`);
let first = Math.floor(Math.random() * 9);let second = Math.floor(Math.random() * 9);let third = Math.floor(Math.random() * 9);let fourth = Math.floor(Math.random() * 9);let num = `${first}${second}${third}${fourth}`;
let canvas = Canvas.createCanvas(150 , 50)
let ctx = canvas.getContext('2d');
const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/606837977532071957/608449967199354881/20190807_010123.jpg");
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
let url = msg.author.displayAvatarURL.endsWith(".webp") ? msg.author.displayAvatarURL.slice(5, -20) + ".gif" : msg.author.displayAvatarURL;
jimp.read(url, (err, ava) => {if(err) return console.log(err);ava.getBuffer(jimp.MIME_PNG, (err, buf) => {if(err) return console.log(err);
ctx.font = "sans-serif";ctx.fontSize = '100px';ctx.fillStyle = "#ffffff";
msg.channel.send(`**${msg.author.username}, You Will Trans \`$${args[2]}\` To ${mentionn}\nIf You Want To Complete Trans Type: \`${num}\`**`).then(essss => {
ctx.fillText(num, canvas.width / 2.4, canvas.height / 1.7);
msg.channel.sendFile(canvas.toBuffer()).then(m => {msg.channel.awaitMessages(r => r.author.id === msg.author.id, { max: 1, time: 20000, errors:['time'] }).then(collected => {if(collected.first().content === num) {
client.channels.get("646641689393365022").send(`**\nتم التحول من : ${msg.author.username} | (ID: \`${msg.author.id}\`)\nتم التحول الي : ${mentionn.username} | (ID: \`${mentionn.id}\`)\nالمبلغ : \`$${args[2]}\`\n**`);
msg.channel.send(`**:moneybag: | ${msg.author.username} has transferred \`${num}\`  to ${msg.author.id}**`);
mention.send(`**:money_with_wings: | Transfer Receipt** \`\`\`You Have Received \`$${args[2]}\` From User ${msg.author.username}; (ID (${msg.author.id})\`\`\``);
m.delete();
let newAuthorCredits = (creditsOfAuthor - parseInt(args[2]));
let newMenCredits = (creditsOfMen + parseInt(args[2]));
SQLite.run(`UPDATE profileSystem SET credits = ${newAuthorCredits} WHERE id = '${msg.author.id}'`);
SQLite.run(`UPDATE profileSystem SET credits = ${newMenCredits} WHERE id = '${mentionn.id}'`);}else{m.delete();
essss.delete();}})})})})})}else{msg.channel.send(`**:x: | Error , Please Command True Ex: \`${prefix}credit [MentionUser] [Balance]\`**`);}}else if(msg.content.startsWith(prefix + "daily")){//
let daily = 86400000;let xp = funcs.generateInt(1, 5);let amount = funcs.generateInt(45, 45);
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 1, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info"`)
let curDaily = res.lastDaily;let credits = res.credits;if(curDaily != null && daily - (Date.now() - curDaily) > 0) {let timeObj = ms(daily - (Date.now() - curDaily));
msg.channel.send(`**:alarm_clock: You've already collected the daily credits, it will refresh in ( \`${timeObj.hours} Hours, ${timeObj.minutes} Minutes and ${timeObj.seconds} Seconds.\` )**`)}else{msg.channel.send(`**<a:644493489714757662:645737967411003392> | You have collected your \`\`${amount}\`\` daily credits .**`);
SQLite.run(`UPDATE profileSystem SET credits = ${credits + amount}, lastDaily = ${Date.now()} WHERE id = '${msg.author.id}'`);}}else if(msg.content.startsWith (prefix + "rank")) {
let args = msg.content.split(' ');const gaber = msg.mentions.users.first() || client.users.get(args[1]) || msg.author;let xp = funcs.generateInt(1, 5); 
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = ${gaber.id}`)
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${gaber.id}', 1, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info"`)
let leaderboard = await SQLite.all(`SELECT * FROM profileSystem ORDER BY xp DESC, credits DESC`);for(var i = 0;i<leaderboard.length;i++) {
if(leaderboard[i].id == gaber.id) {msg.channel.send(`>>> Rank #${i+1} \n Level : ${res.level} \n Xp : ${res.xp} \n Credits : $ ${res.credits} \n Rep : +${res.rep} \n Profile Info : ${res.info} `)}}}})
client.on('message',async message => {
if(message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;let args = message.content.split(" ").slice(1);let cmd = message.content.split(" ")[0].substring(prefix.length);let xp = funcs.generateInt(1, 5); 
if(cmd === "setinfo") {let gaber = args.join(" ");if(message.mentions.users.size >= 1) return message.reply(`**:x: | Error in command.**`);
if(gaber.length < 1) return message.reply(`**:x: | please type your note.**`)
if(gaber.length > 180) return message.reply(`**:x: | don\'t type note with up 180 leter.**`)
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${message.author.id}'`);if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${message.author.id}', 1, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info"`)
SQLite.run(`UPDATE profileSystem SET info = "${gaber}" WHERE id = '${message.author.id}'`)
message.channel.send('Your info set to: **' + gaber + '**')}})
client.on('message',async msg => {
if(msg.content.startsWith (prefix + "rep")) {let rep = 86400000;let xp = funcs.generateInt(1, 5);let men = msg.mentions.users.first();
if(!men) return msg.channel.send('Please mention the user you want to give him rep.');
if(men.id === msg.author.id) return msg.channel.send('You can\'t give yourself.');
if(men.bot) return msg.channel.send('You can\'t give bots rep, but you can give me a rep.')
let resOfMen = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${men.id}'`);
let resOfAuthor = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)
if(!resOfMen) SQLite.run(`INSERT INTO profileSystem VALUES ('${men.id}', 1, 0, 0, 0, 0, 0, "Type ${prefix}setinfo to set info")`)
if(!resOfAuthor) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 1, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info"`)
let curRep = resOfAuthor.lastRep;if(curRep != null && rep - (Date.now() - curRep) > 0) {let timeObj = ms(rep - (Date.now() - curRep));
msg.channel.send(`You already gived your reputation point to someone, try again after ${timeObj.hours} Hours, ${timeObj.minutes} Minutes and ${timeObj.seconds} Seconds.`)}else{
msg.channel.send(`You have successfully gived ${men} a reputation point!`)
SQLite.run(`UPDATE profileSystem SET lastRep = ${Date.now()} WHERE id = '${msg.author.id}'`)
SQLite.run(`UPDATE profileSystem SET rep = ${resOfMen.rep + 1} WHERE id = '${men.id}'`)}}else if(msg.content.startsWith (prefix + "add-cr")) {
if(!ids.includes(msg.author.id)) return;
let men = msg.mentions.users.first() || msg.author;
let args = msg.content.split(" ").slice(1);let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${men.id}'`);
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${men.id}', 200, 0, 0, 0, 0, 0, "Type ${prefix}setinfo to set info")`)
let resu;
if(men.id === msg.author.id && !msg.mentions.users.first()) resu = args[0];
else resu = args[1];
if(!resu || isNaN(resu)) return msg.channel.send('Please input number to add it.');
SQLite.run(`UPDATE profileSystem SET credits = ${res.credits + parseInt(resu)} WHERE id = '${men.id}'`)
msg.channel.send('Done Add Credits')}else if(msg.content.startsWith (prefix + "add-rep")) {
let args = msg.content.split(" ").slice(1);
if(!ids.includes(msg.author.id)) return;let men = msg.mentions.users.first() || msg.author;
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${men.id}'`);
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${men.id}', 200, 0, 0, 0, 0, 0, "Type ${prefix}setinfo to set info")`)
let resu;
if(men.id === msg.author.id && !msg.mentions.users.first()) resu = args[0];
else resu = args[1];
if(!resu || isNaN(resu)) return msg.channel.send('Please input number to add it.');
SQLite.run(`UPDATE profileSystem SET rep = ${res.rep + parseInt(resu)} WHERE id = '${men.id}'`)
msg.channel.send('Done Add Rep')}if(msg.content.startsWith (prefix + "remove-cr")) {
if(!ids.includes(msg.author.id)) return;let men = msg.mentions.users.first();
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${men.id}'`);
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${men.id}', 200, 0, 0, 0, 0, 0, "Type ${prefix}setinfo to set info")`)
let transfer1 = msg.content.split(" ").slice(2).join("")
SQLite.run(`UPDATE profileSystem SET credits = ${res.credits - transfer1} WHERE id = ${men.id}`);
SQLite.run(`UPDATE profileSystem SET credits = ${res.credits - transfer1} WHERE id = ${men.id}`);msg.reply("**Done Black Credits**..")}})
client.on("message",async message => {let xp = funcs.generateInt(1, 5);
if (message.author.bot) return;
let args = message.content.split(' ');
const getvalueof = message.mentions.users.first() || client.users.get(args[1]) || message.author;
if (message.content.startsWith(prefix + "profile")) {
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = ${getvalueof.id}`)
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${getvalueof.id}', 1, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info"`)
let Image = Canvas.Image,canvas = Canvas.createCanvas(307, 300),ctx = canvas.getContext('2d');
fs.readFile("./profile.png", function (err, Background) { //امتداد الصورة
if (err) return console.log(err);let BG = Canvas.Image;let ground = new Image;ground.src = Background;ctx.drawImage(ground, 0, 0, 307, 300);})/// PHOTO SIZE
let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
jimp.read(url, (err, ava) => {if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG, async( err, buf) => {if (err) return console.log(err);
ctx.font = 'Arial 23px profile';ctx.fontSize = '62px'; ctx.fillStyle = "#fff";ctx.textAlign = "center"; ctx.fillText(`${getvalueof.username}`, 153, 200)/////USERNAME
let leaderboard = await SQLite.all(`SELECT * FROM profileSystem ORDER BY xp DESC, credits DESC`);/////Rank
ctx.font = "18px Arial";ctx.fontSize = '18px';ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";////RANK
for(var i = 0;i<leaderboard.length;i++) {if(leaderboard[i].id == getvalueof.id) {ctx.fillText(`#${i+1}`, 52, 147)}}///RANK
ctx.font = "14px Arial";ctx.fontSize = '14px';ctx.fillStyle = '#FFFFFF'; ctx.textAlign = "center";ctx.fillText(`$${res.credits}`, 248 , 147)////credits
ctx.font = "15px Arial";ctx.fontSize = '15px'; ctx.fillStyle = "#FFFFFF"; ctx.textAlign = "center";ctx.fillText(`${res.xp}`, 130, 270)////XP
ctx.font = "32px Arial";ctx.fontSize = '32px';ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";ctx.fillText(`${res.level}`, 248, 95)
ctx.font = "24px Arial";ctx.fontSize = "24px";ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";ctx.fillText(`${res.rep}`, 65,95);///REPS
ctx.font = "12px Arial";ctx.fontSize = "12px";ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";ctx.fillText(`${res.info}`,150,155)
let Avatar = Canvas.Image;let ava = new Avatar;
ava.src = buf;ctx.beginPath(); ctx.arc(153.5, 85.5, 50, 0, Math.PI*2, true); ctx.clip();ctx.drawImage(ava, 100, 34, 110, 110);
message.channel.startTyping();message.channel.sendFile(canvas.toBuffer());message.channel.stopTyping();});});}})