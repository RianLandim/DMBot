const { GuildMember } = require("discord.js");

module.exports = {
  name: "kick",
  help: "Expulsar um usuario do canal!",
  execute(msg, args) {
    if(msg.member.roles.cache.has('367868660779319324')){

    }else{
      msg.reply('Você não tem permissão para usar este comando!')
    }
  },
};
