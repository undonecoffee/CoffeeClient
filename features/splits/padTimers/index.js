// import settings from "../config/settings"
//
// let ticks = 0
//
// register("chat", () => {
//     if (!settings.pruplePad && !settings.greenPad && !settings.yellowPad) return
//     toggle3.register()
//     ticks = 196
// }).setCriteria(/\[BOSS\] Storm: (ENERGY HEED MY CALL|THUNDER LET ME BE YOUR CATALYST)!/)
//
// const purple = t => ChatLib.chat(`Pad &dpurple&r ${t}`)
// const green = t => ChatLib.chat(`Pad &agreen&r ${t}`)
//
// const toggle3 = register("packetReceived", packet => {
//     if (packet.func_148890_d() <= 0) ticks--
//     if (ticks % 5 !== 0) return
//     if (ticks > 150) return
//     if (ticks >= 100) {
//         switch (settings.pruplePad) {
//             case ticks == 150:
//                 purple(`&b in 2.5s`)
//                 break
//             case ticks == 140:
//                 purple(`&b in 2.0s`)
//                 break
//             case ticks == 130:
//                 purple(`&b in 1.5s`)
//                 break
//             case ticks == 120:
//                 purple(`&b in 1.0s`)
//                 break
//             case ticks == 110:
//                 purple(`&b in 0.5s`)
//                 break
//             case ticks == 100:
//                 purple(`&eNOW!`)
//                 break
//         }
//     } else {switch (settings.greenPad) {
//             case ticks == 75:
//                 green(`&b in 2.5s`)
//                 break
//             case ticks == 65:
//                 green(`&b in 2.0s`)
//                 break
//             case ticks == 55:
//                 green(`&b in 1.5s`)
//                 break
//             case ticks == 45:
//                 green(`&b in 1.0s`)
//                 break
//             case ticks == 35:
//                 green(`&b in 0.5s`)
//                 break
//             case ticks == 25:
//                 green(`&eNOW!`)
//                 break
//         }}
//     if (ticks < 25) toggle3.unregister()
// }).setFilteredClass(Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction")).unregister()
