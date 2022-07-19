require('dotenv').config();
const request = require('request');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

const intents = new Discord.Intents(32767);
const prefix = ">"; // Goes infront of every command.
const client = new Discord.Client({
    intents
});


client.on('ready', () => {
    console.log("The bot is online")
})

client.on('messageCreate', (message) => {
    if (message.guild) {
        if (message.content.startsWith(prefix)) {
            const commandCfx = message.content.trim().substring(prefix.length).split(/\s+/);
            if (commandCfx[0] === 'cfx') {
                if (!commandCfx[1]) {
                    message.reply("Missing argument")
                } else {
                    request.get({
                        url: `https://servers-frontend.fivem.net/api/servers/single/${commandCfx[1]}`,
                        json: true,
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v3094297041797994747 t108896256523930349 ath1fb31b7a altpriv cvcv=2 smf=0'
                        }
                    }, (err, res, data) => {
                        if (err) {
                            console.log("Error:", err);
                        } else if (res.statusCode !== 200) {
                            message.reply("Cfx address is unavailable")
                        } else {
                            var connectEndPoints = data['Data']['connectEndPoints']['0']; 
                            if (connectEndPoints.startsWith("http")) {
                                var connectEndPoints = 'CFX Protected';
                            } else {
                                var connectEndPoints = data['Data']['connectEndPoints']['0']; 
                            }
                            
                            const ip = "IP:Port **=>** `" + String(connectEndPoints) + "`"
                            var currentclients = data['Data']['clients'];
                            var maxclients = data['Data']['vars']['sv_maxClients'];
                            var hostname = data['Data']['hostname'];
                            var mapname = data['Data']['mapname'];
                            var tags = data['Data']['vars']['tags'];
                            var enhancedHostSupport = data['Data']['enhancedHostSupport'];
                            var requestSteamTicket = data['Data']['requestSteamTicket']
                            var resourcesdata = data['Data']['resources']
                            var sv_projectname = data['Data']['vars']['sv_projectName'];
                            var onesync_enabled = data['Data']['vars']['onesync_enabled'];
                             
                            const onesync = "Onesync **=>** `" + String(onesync_enabled) + "`" 
                            const servername = "Server Name **=>** `" + String(sv_projectname) + "`"
                            const servermapname = "Mapname **=>** `" + String(mapname) + "`"
                            const servertags = "Tags **=>** `" + String(tags) + "`"
                            const players = "Players **=>** `" + String(currentclients) + "/" + String(maxclients) + "`"
                            const resources = "Resources **=>** `" + String(resourcesdata.length) + "`"
                            const enhanhostsup = "enhancedHostSupport **=>** `" + String(enhancedHostSupport) + "`"
                            const reqstetick = "requestSteamTicket **=>** `" + String(requestSteamTicket) + "`"
 
                            const cfxcmdembed = new MessageEmbed()
                                .setTitle(String(hostname))
                                .setDescription(ip + "\n" + servername + "\n" + servertags + "\n"  + players + "\n" + resources  + "\n" + servermapname + "\n" +  enhanhostsup + "\n" + reqstetick + "\n" + onesync)
                                .setColor("#C5803D")
                            return message.channel.send({
                                embeds: [cfxcmdembed]
                            })
                    }
                    })
                    

                    
                }
            }
        } 
    } 
        
})

client.login(process.env.TOKEN)
