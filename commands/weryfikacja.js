module.exports = {
    name: 'verification',
    aliases:["weryfikacja"],
    description: "sends the veryfication link!",
    permissions:["ADMINISTRATOR"],
   async execute(message,args, cmd, client, Discord,profileData){
        
        
        

        
                const channel = '927600349878042674';
                const zweryfikowanyRole = message.guild.roles.cache.find(role => role.id === "863397263400370187");
                const niezweryfikowanyRole = message.guild.roles.cache.find(role => role.id === "863396706728017941");

               
         
                const zweryfikowanyEmoji = '✅';
            
         
                let embed = new Discord.MessageEmbed()
                    .setColor('YELLOW')
                    .setDescription('Kliknij ✅ aby korzystać z serwera\n\n'
                    )
                        
         
                let messageEmbed = await message.channel.send(embed);
                messageEmbed.react(zweryfikowanyEmoji);
         
                client.on('messageReactionAdd', async (reaction, user) => {
                    if (reaction.message.partial) await reaction.message.fetch();
                    if (reaction.partial) await reaction.fetch();
                    if (user.bot) return;
                    if (!reaction.message.guild) return;
         
                    if (reaction.message.channel.id == channel) {
                        if (reaction.emoji.name === zweryfikowanyEmoji) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(zweryfikowanyRole);
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(niezweryfikowanyRole);
                        } 
                    } else {
                        return;
                    }   });
         

        
            
         
        }
        
    } 



