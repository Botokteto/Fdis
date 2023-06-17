import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  const linknya = args[0]

  if (!args[0]) throw `Input *URL*`
  let p = await fetch(`https://xzn.wtf/api/download?url=${linknya}&apikey=${global.xzn}`)
  let v = await p.json()
  let o = v.url[0].url
  let wm = `${global.wm}`
  await m.reply('Sedang diproses...')
  await conn.sendFile(m.chat, o, '', wm, m)
}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.register = true

handler.command = /^(fb(dl)?)$/i

export default handler
