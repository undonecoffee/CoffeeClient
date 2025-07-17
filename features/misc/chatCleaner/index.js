import settings from "../config/index"
import { messages } from "./utils"

let thingsToRemove = []

// 0: none 
// 1: all that get removed
// 2: all
let debug = 0
register("command", (t) => debug = t).setName("chatcleanerdebug")

// register("chat", (message, event) => thingsToRemove.forEach(t => message.match(t) && cancel(event))).setCriteria(/(.+)/)
register("chat", (message, event) => {
    if (debug == 0) return thingsToRemove.forEach(t => message.match(t) && cancel(event))
    if (debug == 2) console.log("\n\n")
    thingsToRemove.forEach(t => {
        if (message.match(t) && t ) {
            console.log(`removed "${message}" == "${t}`)
            cancel(event)
        }
        if (debug == 2) if (!message.match(t) && t) console.log(`"${message}" !== "${t}`)
    })
}).setCriteria(/(.+)/)


function checkSettings() {
    thingsToRemove = []

    if (settings.hideAbilityMessages) messages.abilityMessages.forEach(t => thingsToRemove.push(t))
    
    if (settings.hideRandomMessages) messages.randomMessages.forEach(t => thingsToRemove.push(t))
    if (settings.hideMoreRandomMessages) messages.moreRandomMessages.forEach(t => thingsToRemove.push(t))

    if (settings.hideBossMessages) messages.bossMessages.forEach(t => thingsToRemove.push(t))
    if (settings.hideMoreBossMessages) messages.moreBossMessages.forEach(t => thingsToRemove.push(t))

    if (settings.hideDungeonMessages) messages.dungeonMessages.forEach(t => thingsToRemove.push(t))
    if (settings.hideMoreDungeonsMessages) messages.moreDungeonMessages.forEach(t => thingsToRemove.push(t))
    if (settings.hideEvenMoreDungeonsMessages) messages.evenMoreDungeonMessages.forEach(t => thingsToRemove.push(t))
    
    
} checkSettings()

register("guiClosed", gui => { if (!(gui instanceof Java.type("gg.essential.vigilance.gui.SettingsGui"))) return; checkSettings(settings.maskTimerToggle)});