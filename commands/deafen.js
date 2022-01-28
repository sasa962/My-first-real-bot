module.exports = {
    
        name: "deafen",
        description: "Deafen a member in a voice channel",
       
        aliases: ["deaf"],
        permissions:["DEAFEN_MEMBERS"],
        async execute(message,args, cmd, client, Discord,profileData){
       
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase());

        if(!member) return message.channel.send("Unable to find the mentioned user in this guild.")

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No Reason Provided"


        try {
            member.voice.setDeaf(true, reason);
            message.channel.send("Success ✅ : Member Deafened")
        } 
        
        catch(error) {
            console.log(error)
            message.channel.send("Oops! An unknown error occured. Please try again later.")
        }

    }
}