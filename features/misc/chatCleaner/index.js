import settings from "../config/settings"
import { defaults, convertToJSON, getComponets } from "./utils"
import { path } from "../config/gui"

let thingsToRemove = []

let data = JSON.parse(FileLib.read(`${path}/chatCleaner`, "data.json") || false)
if (!data) {
    data = convertToJSON(defaults)
    FileLib.write(`${path}/chatCleaner`, "data.json", data)
    data = JSON.parse(data)
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

    Object.keys(data).forEach(key => settings[`hide_${key}`] && data[key].forEach(t => t[2] && thingsToRemove.push(new RegExp(t[0]))))
}
checkSettings()
settings.getConfig().onCloseGui(() => checkSettings())

register("command", type => {
    const componets = getComponets(data, settings)
    if (!type) {
        ChatLib.chat(`\nClick to show toggle chats for each category`)
        componets.default.forEach(({ name, command, hoverText }) => {
            new TextComponent(`    ${name}`).setHover("show_text", hoverText).setClick("run_command", command).chat()
        })
    } else {
        ChatLib.chat(`\nClick toggle for ${type}`)
        componets[type].forEach(({ name, command, hoverText }) => {
            new TextComponent(`    ${name}`).setHover("show_text", hoverText).setClick("run_command", command).chat()
        })
    }
}).setName("chatcleaner")

register("command", (...type) => {
    let text = ChatLib.removeFormatting(type.join(" "))
    let foundKey = []
    Object.keys(data).forEach(key => {
        data[key].forEach((v, i) => {
            let textData = ChatLib.removeFormatting(v[1])
            if (textData == text) return foundKey = [key, i]
        })
    })
    if (foundKey.length == 0) return ChatLib.chat(" didnt find that in data")
    data[foundKey[0]][foundKey[1]][2] = !data[foundKey[0]][foundKey[1]][2]
    // ChatLib.chat(data[foundKey[0]][foundKey[1]][2])
    FileLib.write(`${path}/chatCleaner`, "data.json", JSON.stringify(data, null, 4))
    ChatLib.command(`chatCleaner ${foundKey[0]}`, true)
}).setName("chatcleanertoggle")
