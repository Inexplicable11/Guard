const Discord = require('discord.js');

exports.run = async (client, message, args,bot) => {

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter(client.user.username,client.user.avatarURL())
.setTimestamp()
.setTitle(`***__${client.user.username} Genel Sunucu Koruma Sistemi__***`)
.setDescription(`<a:unlem:758930479105441795> ***Trix Guard Sistem Bilgilendirmesi***`)
.addField(`<a:cark:758932136228159497> **Kanal Koruma**`,"*Kanal koruması sağlar, ayrıntılı bilgi için komudu kullanın.*\n \n\n `t!kanal-koruma`")
.addField(`<a:cark:758932136228159497> **Rol Koruma**`,"*Rol koruması sağlar, ayrıntılı bilgi için komudu kullanın.*\n \n\n `t!rol-koruma`")
.addField(`<a:cark:758932136228159497> **Emoji Koruma**`,"*Emoji koruması sağlar ayrıntılı bilgi için komudu kullanın.*\n \n\n `t!emoji-koruma`")
.addField(`<a:cark:758932136228159497> **Bot Koruma**`,"*Botlara karşı koruma sağlar ayrıntılı bilgi için komudu kullanın.*\n \n\n `t!bot-koruma`")
.addField(`<a:cark:758932136228159497> **Mesaj Log**`,"*Silinen ve düzenlenen mesajları kanala gönderir. Ayrıntılı bilgi için komudu kullanın.*\n \n\n `t!mesaj-log`")
.addField(`<a:cark:758932136228159497> **Yetkili Rol**`,"*Role bota komut verme yetkisini verir.Ancak yine de yetkililer korumalardan etkilenir.*\n \n\n `t!yetkili`")
.addField(`<a:cark:758932136228159497> **Dokunulmaz Rol**`,"*Bot ayarlanmış role sahip olanları görmezden gelir. Tehlikeli bir izindir.*\n \n\n `t!dokunulmaz`")
.addField(`<a:cark:758932136228159497> **İstatistik**`,"*Trix Guard istatistiklerini gösterir.*\n \n\n `t!istatistik`")


if(!args[0]) return message.channel.send(emb)
message.channel.send(emb)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım"],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};