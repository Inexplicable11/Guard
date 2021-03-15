const Discord = require('discord.js');

exports.run = async (client, message, args,bot) => {

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter(client.user.username,client.user.avatarURL())
.setTimestamp()
.setTitle(`***__${client.user.username} Kanal Koruma Sistemi__***`)
.setDescription(`<a:unlem:758930479105441795> ***Detaylı Kanal Koruma Sistem Bilgilendirmesi***`)
.addField(`<a:cark:758932136228159497> **Açılan Kanal Koruma**`,"*Açılan kanalları otomatik olarak kapatır.*\n*Kanalı açan yetkiliye işlem uygulamaz.* \n\n `t!açılan-kanal-koruma`")
.addField(`<a:cark:758932136228159497> **Düzenlenen Kanal Koruma**`,"*Düzenlenen kanalları eski haline getirir.*\n*Düzenleyen yetkiliye işlem uygulamaz.* \n\n `t!düzenlenen-kanal-koruma`")
.addField(`<a:cark:758932136228159497> **Silinen Kanal Koruma**`,"*Silinen kanalları otomatik olarak tekrar açar.*\n*Silen yetkiliden tüm rolleri alır.* \n\n `t!silinen-kanal-koruma`")
.addField(`<a:cark:758932136228159497> **Kanal Log**`,"*Yukarıda belirtilen işlemlerin kayıtlarını belirtilen kanala gönderir.*\n\n `t!kanal-log`")



if(!args[0]) return message.channel.send(emb)
message.channel.send(emb)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanal-koruma"],
  permLevel: 0
}

exports.help = {
  name: 'kanal-koruma'
};