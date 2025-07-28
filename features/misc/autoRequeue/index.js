import settings from "../config/settings"
import { guis, path } from "../config/gui"

const newRunKeybind = new KeyBind("Requeue", Keyboard.KEY_NONE, "CoffeeClient")
let startTime = 0
let onCooldown = false
let dontGo = false
let command = JSON.parse(FileLib.read(`${path}/autoRequeue`, "data.json")).lastEntered

const romanToNum = { I: "one", II: "two", III: "three", IV: "four", V: "five", VI: "six", VII: "seven" }

register("chat", (masterMode, floor) => {
    floor = romanToNum[floor]
    command = `joininstance${masterMode ? " master_" : " "}catacombs_floor_${floor}`
    startTime = Date.now()
    onCooldown = true
    ChatLib.chat(command)
    FileLib.write(`${path}/autoRequeue`, "data.json", `{ "lastEntered": "${command}" }`)
}).setCriteria(/^-*>newLine<-(?:\[[^\]]+\] )(?:\w+) entered (MM )?The Catacombs, Floor (.+)!->newLine<-*$/)

register("chat", () => {
    ChatLib.chat("&0[&cAuto&bRequeue&0]&7 Stopped requeuing")
    dontGo = true
}).setCriteria(/^Party > (?:\[[^\]]+\] )(?:\w+): !dt( )?$/)

let said = false
register("worldLoad", () => {
    if (Date.now() - startTime < 10000 && !said) {
        ChatLib.chat(`&0[&cAuto&bRequeue&0]&7 dungeon took ${((Date.now() - startTime) / 1000).toFixed(2)}s to load`)
        said = !said
    }
})

let queueRun = false

register("step", () => {
    if (guis.requeue.editing) return
    if (newRunKeybind.isPressed()) queueRun = onCooldown ? !queueRun : (ChatLib.command(command), false)
    if (!onCooldown || !queueRun) return guis.requeue.toggled = false
    guis.requeue.toggled = settings.requeueDisplay
    const time = (30 - (Date.now() - startTime ?? 0) / 1000).toFixed(2)
    guis.requeue.name = `&eCooldown: &a${time}`
    if (30 - (Date.now() - startTime ?? 0) / 1000 < 0) {
        onCooldown = false
        if (queueRun) {
            ChatLib.command(command)
            queueRun = false
        }
    }
}).setFps(13)

let requeueTime = 0
register("chat", () => {
    if (dontGo) return
    if (command !== "joininstance catacombs_floor_seven") return
    setTimeout(() => {
        requeueTime = Date.now()
        ChatLib.command(command)
        // ChatLib.chat("trying to requeue")
        ChatLib.chat(settings.requeueTime)
    }, 1000)
}).setCriteria(/^\[BOSS\] Necron: All this, for nothing.../)

// register("chat", () => {
//     if (dontGo) return
//     ChatLib.chat(`took ${((Date.now() - entertime) / 1000).toFixed(2)} seconds to end`)
// }).setCriteria(/\[BOSS\] Necron: All this, for nothing.../)
//
// register("packetReceived", packet => {
//     const title = ChatLib.removeFormatting(packet.func_179840_c().func_150254_d())
//
//     if (title.match(/^Undersized party!$/)) Client.scheduleTask(0, () => Player.getContainer().click(13, false, "middle"))
//     if (title.match(/^Creating instance....!$/)) Client.scheduleTask(0, () => Player.getContainer().click(31, false, "middle"))
// }).setFilteredClass(Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow"))
