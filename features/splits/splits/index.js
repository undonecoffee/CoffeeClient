// import settings from "../config/index"
// import { guis, path } from "../config/gui"
// import file, { blankSplits, findPace, PANICPANIC, splitsTitle, startMessages, testPace, testSplitsFormat, tickPacket } from "./utils"
//
// const splitsGui = new gui(file, file.splitsGui, settings, "splitsGui", testSplitsFormat(findPace(file.lastFloor, settings), settings), false, true)
//
// register("command", (command, ...splits) => {
//     if (command == "next") return newPhase(phase + 1)
//     if (command == "reset") return reset()
//     if (command !== "m7" && command !== "f7") return ChatLib.chat(JSON.stringify(pace, null, 4))
//     testPace(splits, command == "m7" ? "Dragons" : "Animation")
// }).setName("pace")
//
// const romanToNum = { I: "one", II: "two", III: "three", IV: "four", V: "five", VI: "six", VII: "seven" }
//
// let lastFloor = JSON.parse(FileLib.read(`${path}/autoRequeue`, "data.json"))?.lastEntered || "joininstance catacombs_floor_seven"
// register("chat", (masterMode, floor) => {
//     floor = romanToNum[floor]
//     FileLib.write(`${path}/autoRequeue`, "data.json", `{ "lastEntered": "${command}" }`)
// }).setCriteria(/^-*>newLine<-(?:\[[^\]]+\] )(?:\w+) entered (MM )?The Catacombs, Floor (.+)!->newLine<-*$/)
//
// let Splits = blankSplits(file.lastFloor)
// let pace = findPace(file.lastFloor, settings)
// let phase = 0
// let splitStart = Date.now()
//
// export function newPhase(phaseMeantToBeLoaded) {
//     updatePhase(phaseMeantToBeLoaded)
//     phase++
//     splitStart = Date.now()
//     if (phase == 10) reset()
// }
//
// function reset() {
//     Splits = blankSplits(file.lastFloor)
//     phase = 0
//     serverTicks = 0
//     updateSplits.unregister()
//     phaseTriggers1.register()
//     phaseTriggers2.unregister()
//     phaseTriggers3.unregister()
//     if (settings.notWorldLoad) return
//     splitsGui.off()
// }
// register("worldLoad", () => reset())
//
// const updateSplits = register("step", () => {
//     Splits[phase].client = Date.now() - splitStart
//     splitsGui.text(splitsTitle(Splits, settings, pace, phase))
// }).setFps(17).unregister()
//
// let serverTicks = 0
//
// const runStartRegister = register("PacketReceived", () => {
//     newPhase(1)
//     updateSplits.register()
//     phaseTriggers1.unregister()
//     phaseTriggers2.register()
//     phaseTriggers3.register()
//     phaseTriggers3.register()
//     Splits[phase].server += 5
//     serverTicks += 5
//     runStartRegister.unregister()
//     normalTicks.register()
//     setTimeout(() => mapTicks.register(), 10)
// }).setFilteredClass(Java.type("net.minecraft.network.play.server.S34PacketMaps")).unregister()
//
// const normalTicks = register("packetReceived", packet => {
//     if (packet.func_148890_d() > 0) return
//     mapTicks.unregister()
//     Splits[phase].server++
// }).setFilteredClass(Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction")).unregister()
//
// const mapTicks = register("PacketReceived", () => {
//     if (serverTicks < 45) Splits[phase].server += 5
//     serverTicks += 5
// }).setFilteredClass(Java.type("net.minecraft.network.play.server.S34PacketMaps")).unregister()
//
// const phaseTriggers1 = register("chat", () => {
//     runStartRegister.register()
//     reset()
// }).setCriteria("Starting in 1 second.")
//
// const phaseTriggers2 = register("chat", message =>
//     startMessages.forEach(e => {
//         if (message.match(e[1])) newPhase(e[0])
//     })).setCriteria(/\[BOSS\] (.+)/)
//
// const phaseTriggers3 = register("chat", () => newPhase(7)).setCriteria("The Core entrance is opening!")
//
// splitsTitle(Splits, settings, pace, phase)
