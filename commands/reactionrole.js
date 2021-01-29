module.exports = {
  name: "reactionrole",
  async execute(msg, args, Discord, client) {
    const channel = "804758884719001611";
    const snzRole = msg.guild.roles.cache.find((r) => r.name === "SNZFriends");

    const SNZFriendsEmoji = ":snz";

    let embed = new Discord.MessageEmbed()
      .setColor("#fff")
      .setTitle("Escolha um Cargo!")
      .setDrescription(
        "Escolher um cargo te permitira acessar determinadas áreas do servidor!\n\n" +
          `${SNZFriendsEmoji} se for amigo de SNZ!\n`
      );

    let messageEmbed = await msg.channel.send(embed);
    messageEmbed.react(SNZFriendsEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === SNZFriendsEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(snzRole);
        }
      } else {
        return;
      }
    });
    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reacion.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === SNZFriendsEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(snzRole);
        }
      } else {
        return;
      }
    });
  },
};
