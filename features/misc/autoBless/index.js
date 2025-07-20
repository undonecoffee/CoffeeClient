import settings from "../config/settings.js"

let cooldown = false
let pfKick = false

const stripRank = rankedPlayer => rankedPlayer.replace(/\[[\w+\+-]+] /, "").trim()

const blacklist = [
    "AscentPvP",
    "SergStreams",
    "F7God",
    "Chompacabra",
    "Pinn3dd",
    "Zenimar",
    "qcbell",
    "Big_Mike427",
]

// register("chat", () => {
//     if (!settings.partyKick) return
//     pfKick = true
//     setTimeout(() => pfKick = false, 3000)
// }).setCriteria(/Party Finder > (.+) joined the dungeon group! .+/)
//
// register("chat", a => {
//     if (cooldown || pfKick || !settings.partyKick) return
//     if (blacklist.includes(stripRank(a)) || a.includes(Player.getName())) return
//     ChatLib.command("ac bless", false)
//     cooldown = true
//     setTimeout(() => cooldown = false, 500)
// }).setCriteria(/(.+) has been removed from the party./)
//
// register("chat", a => {
//     if (cooldown || !settings.partyLeave) return
//     if (blacklist.includes(stripRank(a)) || a.includes(Player.getName())) return
//     ChatLib.command("ac bless", false)
//     cooldown = true
//     setTimeout(() => cooldown = false, 500)
// }).setCriteria(/(.+) has left the party./)
//
// register("chat", a => {
//     if (cooldown || !settings.partyLeave) return
//     if (blacklist.includes(stripRank(a)) || a.includes(Player.getName())) return
//     ChatLib.command("ac bless", false)
//     cooldown = true
//     setTimeout(() => cooldown = false, 500)
// }).setCriteria(/The party was transferred to .+ because (.+) left/)
//
// register("chat", (a, b, c, d) => {
//     if (cooldown || !settings.guild) return
//     if (a.includes(Player.getName()) || c.includes(Player.getName())) {
//         cooldown = true
//         setTimeout(() => cooldown = false, 500)
//         return
//     }
//     ChatLib.command("gc bless", false)
//     cooldown = true
//     setTimeout(() => {
//         cooldown = false
//     }, 500)
// }).setCriteria(/Guild > (.+) (.+):.* bless .*|Guild > (.+) (.+):.* bless/gim)
//
// register("chat", (a, b) => {
//     if (cooldown || !settings.party) return
//     if (a.includes(Player.getName()) || b.includes(Player.getName())) {
//         cooldown = true
//         setTimeout(() => cooldown = false, 500)
//         return
//     }
//     ChatLib.command("pc bless", false)
//     cooldown = true
//     setTimeout(() => cooldown = false, 500)
// }).setCriteria(/Party > (.+):.* bless .*|Party > (.+):.* bless/gim)
//
// register("chat", (a, b) => {
//     if (cooldown || !settings.officer) return
//     if (a.includes(Player.getName()) || b.includes(Player.getName())) {
//         cooldown = true
//         setTimeout(() => cooldown = false, 500)
//         return
//     }
//     ChatLib.command("oc bless", false)
//     cooldown = true
//     setTimeout(() => {
//         cooldown = false
//     }, 500)
// }).setCriteria(/Officer > (.+):.* bless .*|Officer > (.+):.* bless/gim)
//
// register("chat", (a, b) => {
//     if (cooldown || !settings.coop) return
//     if (a.includes(Player.getName()) || b.includes(Player.getName())) {
//         cooldown = true
//         setTimeout(() => cooldown = false, 500)
//         return
//     }
//     ChatLib.command("cc bless", false)
//     cooldown = true
//     setTimeout(() => cooldown = false, 500)
// }).setCriteria(/Co-op > (.+):.* bless .*|Co-op > (.+):.* bless/gim)
//
// register("chat", (a, b) => {
//     if (cooldown || !settings.dms) return
//     if (a) ChatLib.command(`w ${stripRank(a)} bless`)
//     if (b) ChatLib.command(`w ${stripRank(b)} bless`)
//     cooldown = true
//     setTimeout(() => cooldown = false, 500)
// }).setCriteria(/From (.+):.* bless .*|From (.+):.* bless/gim)
//
// register("chat", () => {
//     if (cooldown || !settings.dms) return
//     cooldown = true
//     setTimeout(() => cooldown = false, 500)
// }).setCriteria(/To (.+):.* bless .*|To (.+):.* bless/gim)
//
// register("chat", (a, b) => {
//     if (cooldown || !settings.all) return
//     ChatLib.chat("found!")
//     if (a.includes(Player.getName()) || b.includes(Player.getName())) {
//         cooldown = true
//         setTimeout(() => cooldown = false, 500)
//         return
//     }
//     ChatLib.command("ac bless", false)
//     cooldown = true
//     setTimeout(() => cooldown = false, 500)
// }).setCriteria(/^(?!(?:Party >|Guild >|Officer >|From |Co-op >|To )).*?(\S+):.* bless .*|^(?!(?:Party >|Guild >|Officer >|From |Co-op >|To )).*?(\S+):.* bless/gim)
