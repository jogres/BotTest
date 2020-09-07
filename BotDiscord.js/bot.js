const Discord = require("discord.js");
const client = new Discord.Client();
const config =  require("./config.json");

const prefix = "!";
client.once("ready", ()=>{
    console.log("Estou online!");
});

client.on("message", message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command ==="ping"){
        message.channel.send("pong!");
    }
    if(client.channels.cache.set()===""){
        
    }
});


client.login(config.token);