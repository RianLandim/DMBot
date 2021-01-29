module.exports = {
  name: "clear",
  help: "Limpa uma quantitade X(1-100) de mensagens!",
  async execute(msg, args) {
    const member = msg.mentions.members.first();
    if (member.roles.cache.some((role) => role.name === "Demencius King")) {
      if (!args[0])
        return msg.reply(
          "Insira uma quantidade de mensagens para serem apagadas!"
        );
      if (isNaN(args[0])) return msg.reply("Por favor, insira um numero real!");

      if (args[0] > 100)
        return msg.reply("O limite de mensagens que podem ser apagadas é 100!");
      if (args[0] < 1)
        return msg.reply("Você precisa deletar pelo menos 1 mensagem!");
      await msg.channel.messages.fetch({ limit: args[0] }).then((messages) => {
        msg.channel.bulkDelete(messages);
      });
    }
  },
};
