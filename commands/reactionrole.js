module.exports = {
  name: "reactionrole",
  async execute(msg, args, Discord, client) {
    if(msg.member.roles.cache.has("367868660779319324")){
      //Channel//
    const channel = "804758884719001611";
      
      //Roles//
    const rustRole = msg.guild.roles.cache.find((r) => r.name === "Rust");
    const csgoRole = msg.guild.roles.cache.find((r) => r.name === "CounterStrike")
      
      //Emojis//
    const csgo = "🔫";
    const rust = "☢️";
      
      //EmbedMSG//
    let embed = new Discord.MessageEmbed()
      .setTitle("Escolha um Cargo!")  
      .setColor("#fff")
      .setThumbnail("https://i.imgur.com/tgLYcT8.jpg")
      .setDescription(
        "Selecione o cargo de acordo com o que você joga.\nEscolher um cargo te permitira acessar determinadas áreas do servidor!\n\n" 
        + `${csgo} CounterStrike\n`
        + `${rust} Rust\n`
      );
    let messageEmbed = await msg.channel.send(embed);

      //ReactionBot//
    messageEmbed.react(csgo);
    messageEmbed.react(rust);

      //RoleReaction//
    client.on("messageReactionAdd", async (reaction, user) => {
      if(reaction.message.partial) await reaction.message.fecth();
      if(reaction.partial) await reaction.fecth();
      if(user.bot) return;
      if(!reaction.message.guild) return;

      if(reaction.message.channel.id == channel) {
        if(reaction.emoji.name === csgo){
          await reaction.message.guild.members.cache.get(user.id).roles.add(rustRole);
        }
        if(reaction.emoji.name === rust){
          await reaction.message.guild.members.cache.get(user.id).roles.add(csgoRole);
        }
      }else{
        return;
      }
    });
    
    client.on("messageReactionRemove", async (reaction, user)=>{
      if(reaction.message.partial) await reaction.message.fetch();
      if(reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if(!reaction.message.guild) return;

      if(reaction.message.channel.id == channel){
        if(reaction.emoji.name === csgo){
          await reaction.message.guild.members.cache.get(user.id).roles.remove(rustRole);
        }
        if(reaction.emoji.name === rust){
          await reaction.message.guild.members.cache.get(user.id).roles.remove(csgoRole);
        }
      }else{
        return;
      }
    })

    }else{
      msg.reply('Você não tem permissão para usar esse comando!')
    }
  }

}