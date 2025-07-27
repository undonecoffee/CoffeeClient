import settings from "../config/settings"
import { defaults, convertToJSON } from "./utils"
import { path } from "../config/gui"

let thingsToRemove = []

let data = JSON.parse(FileLib.read(`${path}/chatCleaner`, "data.json") || false)
if (!data) {
    data = convertToJSON(messages)
    FileLib.write(`${path}/chatCleaner`, "data.json", data)
}

register("chat", (message, event) => thingsToRemove.forEach(t => message.match(t) && cancel(event))).setCriteria("${ }")

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

    Object.keys(data).forEach(key => settings[`hide_${key}`] && data[key].forEach(t => t[1] && thingsToRemove.push(new RegExp(t[0]))))

    // if (settings.hideBossMessages) messages.bossMessages.forEach(t => thingsToRemove.push(t))
    // if (settings.hideMoreBossMessages) messages.moreBossMessages.forEach(t => thingsToRemove.push(t))
    //
    // if (settings.hideDungeonMessages) messages.dungeonMessages.forEach(t => thingsToRemove.push(t))
    // if (settings.hideMoreDungeonsMessages) messages.moreDungeonMessages.forEach(t => thingsToRemove.push(t))
    // if (settings.hideEvenMoreDungeonsMessages) messages.evenMoreDungeonMessages.forEach(t => thingsToRemove.push(t))
}
checkSettings()
settings.getConfig().onCloseGui(() => checkSettings())
console.log(JSON.stringify(thingsToRemove, null, 4))

register("command", () => {
}).setName("chatcleaner")

// case "":
// const toggle1 = Data.friendJoinMessages ? `&a` : `&c`
// const toggle2 = Data.partyChat ? `&a` : `&c`
// const toggle3 = Data.dungeonSpam ? `&a` : `&c`
// const toggle4 = Data.randomMessages ? `&a` : `&c`
// const toggle5 = Data.watcherMessages ? `&a` : `&c`
// const toggle6 = Data.bossMessages ? `&a` : `&c`
// const components = [
//     { name: `&3Clean ${Data.friendJoinMessages ? "&a" : "&c"}Friend join messages `, command: `/ChatCleaner friendJoinMessages`, hoverText: "Toggle Clean Friend join messages" },
//     { name: `&3Clean ${Data.partyChat ? "&a" : "&c"}Party Chat `, command: `/ChatCleaner partyChat`, hoverText: "Toggle Clean Party Chat" },
//     { name: `&3Hide ${Data.dungeonSpam ? "&a" : "&c"}Dungeon spam `, command: `/ChatCleaner dungeonSpam`, hoverText: "Toggle Dungeon spam" },
//     { name: `&3Hide ${Data.randomMessages ? "&a" : "&c"}Random messages `, command: `/ChatCleaner randomMessages`, hoverText: "Toggle Random messages" },
//     { name: `&3Hide ${Data.watcherMessages ? "&a" : "&c"}Watcher messages `, command: `/ChatCleaner watcherMessages`, hoverText: "Toggle Watcher messages" },
//     { name: `&3Hide ${Data.bossMessages ? "&a" : "&c"}Boss messages `, command: `/ChatCleaner bossMessages`, hoverText: "Toggle Boss messages" },
// ];
// const toggleName = Data.toggled ? "on" : "off";
// const toggleColor = Data.toggled ? "&a" : "&c";
// ChatLib.chat(`\n                         &cEngineer&bChatCleaner`);
// new TextComponent(`                              ${Data.toggled ? "&a" : "&c"}&nMain toggle ${Data.toggled ? "on" : "off"}`).setHover("show_text", `/ChatCleaner toggle`).setClick("run_command", `/ChatCleaner toggle`).chat()
// ChatLib.chat(`\n                              &7Click to toggle\n`);
// components.forEach(({ name, command, hoverText }) => {new TextComponent(`         ${name}`).setHover("show_text", hoverText).setClick("run_command", command).chat();});
//     break;
