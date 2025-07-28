// import settings from "../config/settings"
// import { terminals } from "./utils"
//
// let openTime = 0
// register("packetReceived", (packet, event) => {
//     const windowTitle = packet.func_179840_c().func_150254_d().removeFormatting()
//     let terminalFound = false
//
//     for (let i of Object.entries(Terminals)) {
//         ;[term, { id, regex, slotCount }] = i
//         let match = windowTitle.match(regex)
//         if (!match) continue
//         terminalFound = true
//         break
//     }
//
//     if (!terminalFound) return
//     openTime = Date.now()
// }).setFilteredClass(Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow"))
//
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
//
// register("packetReceived", () => {
//     if (!this.inTerm) return
//     this.inTerm = false
//     ChatLib.chat(`${Prefix} &aTerminal &c${this.currentTitle} &acompleted in &c${(Date.now() - this.initialOpen) / 1000}s`)
//     this._reloadTerm()
// }).setFilteredClass(Java.type("net.minecraft.network.play.server.S2EPacketCloseWindow"))
