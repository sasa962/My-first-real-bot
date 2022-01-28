const Discord = require ('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const mongoose = require('mongoose');
const Imap = require('node-imap'); //for reading imap emails likegmail

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


client.on('guildMemberAdd', member => {
    member.guild.channels.get('863775997278945300').send("Welcome"); 
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "niezweryfikowany"));
});

['command_handler','event_handler'].forEach(handler =>{

    require(`./handlers/${handler}`)(client, Discord,);
});

mongoose.connect(process.env.MONGODB_SRV,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    userFindAndModify : false
}).then(()=>{
    console.log('Connected to the data');
}).catch((err) =>{
    console.log(err);
});

let AS = {}; //Anti-Spam

const timeAS = 5; //5 seconds
const msgsAS = 3; //3 messages

//you will be allowed to send 3 messages in 5 seconds every message after that for the rest of the 5 seconds will be deleted.

client.on('message', async(message) => {
    if(message.author.bot || !message.guild) return;
    if(!AS[message.author.id]) AS[message.author.id] = {};
    if(!AS[message.author.id][message.guild.id]) AS[message.author.id][message.guild.id] = 1, setTimeout(() => {delete AS[message.author.id][message.guild.id]}, timeAS * 1000);
    else if(AS[message.author.id][message.guild.id] < msgsAS) AS[message.author.id][message.guild.id]++;
    else if(AS[message.author.id][message.guild.id] >= msgsAS) await message.delete(), message.reply(`Nie spam debilu!`).then(e => e.delete({ timeout: 5000 }));
    else AS[message.author.id] = {}, AS[message.author.id][message.guild.id] = 1
})




const jointocreate = require("./jointocreate");
jointocreate(client);
var config = require('./config.json'); //loading the onfig data

var imap = new Imap({
    user: config.emailclient.user, //your email user, usually the email address
    password: config.emailclient.password, //the password of that email addres
    host: config.emailclient.host, //host imap.google.com for example
    port: config.emailclient.port, //port 
    tls: config.emailclient.tls //tls usually on true
});
//CREATING THE DATABASE FOR THE OLD EMAILS 
const Enmap = require("enmap");
client.OldMails_db = new Enmap({ name: 'OldMails' });
//Login into the Discord Client
//Log everytime the Discord Client got the first connection possible after the login
client.OldMails_db.ensure("LatestMail", {
    data: "(#00000)"
})
//Require the first email client with the client and imap parameter 
require("./email.js")(client, imap)
//importing the file



client.login(process.env.DISCORD_TOKEN);
 