import settings from "../config/settings"
import { termNames } from "./utils"

// let openTime, inTerm
register("packetReceived", (packet, event) => {
    const windowTitle = packet.func_179840_c().func_150254_d().removeFormatting()

    let terminalName = termNames.find(([_, regex]) => regex.test(windowTitle))?.[0]
    if (!terminalName) return console.log(`\n    not a term: ${windowTitle}\n`)
    openTime = Date.now()
    console.log(`\nWindowName: ${windowTitle}\n`)
}).setFilteredClass(Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow"))

// register("packetReceived", (packet, event) => {
//     const windowId = packet.func_149175_c()
//
//     if (windowId !== this.lastWindowID) return
//     if (slot > this.maxSlot) {
//         this.shouldSolve = true
//         return
//     }
//     if (Settings().TerminalInvwalk && (this.terminalID !== 5)) cancel(event)
//     this.currentItems.push([windowId, slot, itemStack, ctItem])
// }).setFilteredClass(Java.type("net.minecraft.network.play.server.S2FPacketSetSlot"))

// register("packetReceived", () => {
//     ChatLib.chat(`${Prefix} &aTerminal &c${this.currentTitle} &acompleted in &c${(Date.now() - this.initialOpen) / 1000}s`)
// }).setFilteredClass(Java.type("net.minecraft.network.play.server.S2EPacketCloseWindow"))
