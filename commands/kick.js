const { GuildMember, TeamMember } = require("discord.js");

module.exports = {
  name: "kick",
  help: "Expulsar um usuario do canal!",
  execute(msg, args) {
    if (msg.member.hasPermission("KICK_MEMBERS")) {
      console.log("Kicka na latinha");
      const user = msg.mentions.user.first();
      if (user) {
        const member = msg.guild.member(user);
        if (member) {
          member
            .kick("Razão para kick!")
            .then(() => {
              msg.reply(`${user.tag} kickado com sucesso!`);
            })
            .catch((err) => {
              msg.reply("Eu não consigo kickar esse membro!");
              console.log(err);
            });
        } else {
          msg.reply("Esse usario não existe!");
        }
      } else {
        msg.reply("Você não mencionou um usuario!");
      }
    } else {
      msg.reply("Você não tem permissão para usar esse comando!");
    }
  },
};
