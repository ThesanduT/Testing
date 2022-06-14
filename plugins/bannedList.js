let handler = async (m, { jid, msgsz, usedPrefix, command, isOwner    }) => {
 try {     let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let caption = `
${sa}${kki} Banned chats ${kka}
${gx} Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
${gy} ${i + 1}. ${msgsz.getName(jid) == undefined ? 'Unknown' : msgsz.getName(jid)}
${gy} ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : ''}
${sb}

${sa}${kki} Banned User ${kka}
${gx} Total : ${users.length} Users${users ? '\n' + users.map(([jid], i) => `
${gy} ${i + 1}. ${msgsz.getName(jid) == undefined ? 'Unknown' : msgsz.getName(jid)}
${gy} ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : ''}
${sb}
`.trim()
    msgsz.reply(m.chat, caption, m, { contextInfo: { mentionedJid: msgsz.parseMention(caption) } })
}
   

    catch(e){
  msgsz.reply(m.chat, `${e}`) 
msgsz.reply(`${global.owner[0]}`+'@s.whatsapp.net','```ERROR REPORT```\n\n'+
'```COMMAND   :'+`${command}`+'```\n\n'+
'```PREFIX    :'+`${usedPrefix}`+'```\n\n'+
'```VERSION   :'+`${version}`+'```\n\n'+
'```ERROR     :'+`${e}`+'```\n\n'+
'```DETIELD ERROR LOG IN CRASH REPORT GROUP```') 
  msgsz.reply('120363041922413381@g.us', `𝗘𝗿𝗿𝗼𝗿 : ${util.format(e)}\n\n
  𝗖𝗼𝗺𝗺𝗮𝗻𝗱 : ${usedPrefix+command}`, null, {})
} } 

    handler.help1 = ['ʟɪsᴛʙᴀɴ']

handler.help = ['𝙻𝙸𝚂𝚃𝙱𝙰𝙽']
handler.tags = ['info']
handler.command = /^list?ban(ned)?|ban(ned)?list?|daftarban(ned)?$/i

handler.owner = false

module.exports = handler

