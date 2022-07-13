 const { Discord, Client, MessageEmbed, WebhookClient } = require('discord.js');
const client = new Client();



client.on('ready', () => {
  client.user.setActivity('Internet Condom Factory ', { type: 'PLAYING' })
   console.log(`Logged in as ${client.user.tag}!`);
  const Guilds = client.guilds.cache.map(guild => guild.id);
  console.log(Guilds);
})

let blacklisted = [
  'https://gif-discorde.com/', 
  'https://is.gd/RfhB7I', 
  'https://discoord-app.com/',
   'https://discbrd.com/', 
   'https://gif-discord.com/', 
   'https://steamldiscord.com/', 
   'https://discoord-gift.com/', 
   'https://disccord-ap.ru/', 
   'https://discrod-gifte.com/', 
   'https://discorcd-apps.com/', 
   'https://discrod-gifte.com/', 
   'https://bit.do/fSAo3',
    'https://dlscord.app/', 
    'http://discordxgifts.xyz/', 
    'https://stearncommunytiy.ru/', 
    'https://steamcommunytiy.ru/', 
    'https://steancommunytiu.ru/', 
    'https://tournament-predator.xyz/', 
    'https://discord-gifts.us/', 
    ' https://stearncommunytu.ru/', 
    'http://lootweapons.com/', 
    'aidrop-nitro',
  'free from steam',
  'distribution of discord nitro',
  'discorid',
  'discord nitro by steam',
  'free gift discord',
  'free gift nitro',
  'im leaving the cs',
  'i leave cs: go',
  'leaving fucking CS:GO to CoD',
  'dsicord',
  'dlscord',
  'dlcord',
  '/airdrop',
  'counter-strlke.site',
  'https://steamnitroi.com/airdrop',
  'Free Discord Nitro AirDrop from Steam',
  '/boost',
  'https://discqrdapp.com/newyears',
  '/newyears',
  'https://discrode.club/',
  '/welcome',
  'Free Discord Nitro AirDrop from Steam',
  'Airdrop Discord NITRO with Epic Games',
  'https://nitro-ds.com/',
  'http://tooyou464.store/',
  'https://cutt.ly/',
  'Click to get Nitro:',
  'Get Discord Nitro for Free from Steam Store ',
  'https://raydiumswap.com/',
  'Hello friend here they give out crypt',
  '/best',
  'take it :)',
  'https://discqrde.com/',
  'https://yip.su/',
'https://2no.co/',
  'https://discorx.gift/',
  'https://steam-nitro-gift.com/'
];

client.on('message', async(msg) => {
    let foundInText = false;
  for (var i in blacklisted) {
    if (msg.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }

  if (foundInText) {
    msg.delete();
    msg.channel.send("<" + "@" + msg.author + ">" + " Is Token Logged, To Change Your Discord Token Simply Change Your Discord Password");
     
  }
});

client.login("token here");
