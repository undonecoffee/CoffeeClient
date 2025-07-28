import settings from "../config/settings.js"

let cooldown = false
let pfKick = false

const stripRank = rankedPlayer => rankedPlayer.replace(/\[[\w+\+-]+] /, "").trim()

const blacklist = [
    "AscentPvP",
    "SergStreams",
    "Chompacabra",
    "Pinn3dd",
    "Zenimar",
    "qcbell",
    "Big_Mike427",
]

const regexes = {
    leave: {
        leave: /(.+) has left the party./,
        pf: /^Party Finder > (.+) joined the dungeon group! .+/,
        kick: /(.+) has been removed from the party./,
        transfer: /The party was transferred to .+ because (.+) left/,
        from: /^From (.+):.* bless .*/,
    },
    echo: {
        party: /^Party > (.+):.*bless.*/,
        guild: /^Guild > (.+):.*bless.*/,
        coop: /^Co-op > (.+):.*bless.*/,
    },
}

register("chat", message => {
    if (cooldown) return
    let name = ""
    Object.values(regexes.leave).forEach(reg => {
        let match = message.match(reg)
        if (match) name = match[0]
    })
    if (blacklist.includes(name)) return
    console.log(`${message} ${regexes.echo.party.test(message)}`)
    if (regexes.leave.pf.test(message)) return setCooldown(false)
    if (regexes.leave.leave.test(message) && settings.sendOn_leave) setCoolown("ac bless")
    if (regexes.leave.kick.test(message) && settings.sendOn_kick) setCoolown("ac bless")
    if (regexes.leave.transfer.test(message) && settings.sendOn_leave) setCoolown("ac bless")
    if (regexes.leave.from.test(message) && settings.echo) setCoolown(`msg ${name} bless`)

    if (!settings.echo) return
    if (regexes.echo.party.test(message)) {
        setCooldown("pc bless")
        console.log(message.match(regexes.echo.party))
    }

    if (regexes.echo.guild.test(message)) setCooldown("gc bless")
    if (regexes.echo.coop.test(message)) setCooldown("cc bless")
}).setCriteria("${ }")

const setCooldown = command => {
    if (command) ChatLib.chat(command)
    cooldown = true
    setTimeout(() => cooldown = false, 500)
}
