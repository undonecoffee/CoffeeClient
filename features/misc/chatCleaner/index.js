import settings from "../config/settings"
import { messages } from "./utils"

let thingsToRemove = []

// 0: none
// 1: all that get removed
// 2: all
let debug = 0
register("command", t => debug = t).setName("ccdebug")

// register("chat", (message, event) => thingsToRemove.forEach(t => message.match(t) && cancel(event))).setCriteria("${ }")
register("chat", (message, event) => {
    if (debug == 0) return thingsToRemove.forEach(t => message.match(t) && cancel(event))
    if (debug == 2) console.log("\n\n")
    thingsToRemove.forEach(t => {
        if (message.match(t) && t) {
            console.log(`removed "${message}" == "${t}`)
            cancel(event)
        }
        if (debug == 2) { if (!message.match(t) && t) console.log(`"${message}" !== "${t}`) }
    })
}).setCriteria("${ }")

const clean_joined = register("chat", (type, name, joinType, event) => {
    cancel(event)
    if (joinType == "joined") ChatLib.chat(`&2 >>&${type == "Guild" ? "2" : "a"} ${name}`)
    if (joinType == "left") ChatLib.chat(`&4 <<&${type == "Guild" ? "2" : "c"} ${name}`)
}).setCriteria(/^(Friend|Guild) > (.+) (.+)\./).unregister()

const clean_partyChat = register("chat", (rank, name, message, event) => {
    cancel(event)
    ChatLib.chat(`  &9> &b${name}&f: ${message}`)
}).setCriteria(/^Party > (\[.+\])? ?(.+)?: (.*)/).unregister()

function checkSettings() {
    thingsToRemove = []

    settings.clean_join ? clean_joined.register() : clean_joined.unregister()
    settings.clean_partyChat ? clean_partyChat.register() : clean_partyChat.unregister()

    if (settings.hide_ability) messages.ability.forEach(t => thingsToRemove.push(t))
    if (settings.hide_error) messages.error.forEach(t => thingsToRemove.push(t))

    if (settings.hide_boss) messages.boss.forEach(t => thingsToRemove.push(t))
    if (settings.hide_blessings) messages.blessings.forEach(t => thingsToRemove.push(t))

    // if (settings.hideBossMessages) messages.bossMessages.forEach(t => thingsToRemove.push(t))
    // if (settings.hideMoreBossMessages) messages.moreBossMessages.forEach(t => thingsToRemove.push(t))
    //
    // if (settings.hideDungeonMessages) messages.dungeonMessages.forEach(t => thingsToRemove.push(t))
    // if (settings.hideMoreDungeonsMessages) messages.moreDungeonMessages.forEach(t => thingsToRemove.push(t))
    // if (settings.hideEvenMoreDungeonsMessages) messages.evenMoreDungeonMessages.forEach(t => thingsToRemove.push(t))
}

checkSettings()

settings.getConfig().onCloseGui(() => checkSettings())
