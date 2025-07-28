import settings from "../config/settings"
import { termNames } from "./utils"

let openTime, inTerm, terminalName
register("packetReceived", (packet, event) => {
    const windowTitle = packet.func_179840_c().func_150254_d().removeFormatting()

    terminalName = termNames.find(([_, regex]) => regex.test(windowTitle))?.[0]
    if (!terminalName) return
    if (!inTerm) {
        inTerm = true
        openTime = Date.now()
        console.log(`\nterminal started: ${windowTitle}\n`)
    }
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

register("packetReceived", () => {
    if (!inTerm) return
    console.log(`\n${terminalName} completed in ${(Date.now() - openTime) / 1000}s\n`)
    // console.log(`\n&3${terminalName} &acompleted in &c${(Date.now() - openTime) / 1000}s\n`)
    inTerm = false
}).setFilteredClass(Java.type("net.minecraft.network.play.server.S2EPacketCloseWindow"))

register("packetSent", () => {
    if (!inTerm) return
    inTerm = false
}).setFilteredClass(Java.type("net.minecraft.network.play.client.C0DPacketCloseWindow"))
