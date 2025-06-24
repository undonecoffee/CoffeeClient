// import settings from "../config/index"
// ChatLib.chat("jfasdklfjdlkajf")
//
// const newRunKeybind = new KeyBind("Requeue", Keyboard.KEY_NONE, "AutoRequeue")
// let startTime = 0
// let onCooldown = false
// let dontGo = false
// let command = "joininstance catacombs_floor_seven"
//
// register("chat", floor => {
//     if (onCooldown) return
//     if (floor) command = `joininstance master_catacombs_floor_seven`
//     else command = `joininstance catacombs_floor_seven`
//     startTime = Date.now()
//     onCooldown = true
// }).setCriteria(/^-*>newLine<-(?:\[[^\]]+\] )(?:\w+) entered (MM )?The Catacombs, Floor VII!->newLine<-*$/)
//
// register("chat", () => {
//     ChatLib.chat("&0[&cAuto&bRequeue&0] Stopped requeuing")
//     dontGo = true
// }).setCriteria(/.+!dt.+/)
//
// register("worldLoad", () => {
//     if (Date.now() - startTime < 10000) ChatLib.chat(`took ${((Date.now() - startTime) / 1000).toFixed(2)} seconds to load`)
// })
//
// let entertime = 0
// register("chat", () => {
//     if (dontGo) return
//     // ChatLib.command(command)
//     ChatLib.chat("trying to requeue")
//     entertime = Date.now()
// }).setCriteria(/\[BOSS\] Necron: All this, for nothing.../)
//
// register("chat", () => {
//     if (dontGo) return
//     ChatLib.chat(`took ${((Date.now() - entertime) / 1000).toFixed(2)} seconds to end`)
// }).setCriteria(/\[BOSS\] Necron: All this, for nothing.../)
//
// let queueRun = false
//
// register("tick", () => {
//     if (newRunKeybind.isPressed()) {
//         if (onCooldown) queueRun = true
//         else {
//             ChatLib.command(command)
//             queueRun = false
//         }
//     }
//     if (!onCooldown) return
//     if (30 - (Date.now() - startTime ?? 0) / 1000 < 0) {
//         onCooldown = false
//         if (queueRun == true) {
//             ChatLib.command(command)
//             queueRun = false
//         }
//     }
// })
//
// register("packetReceived", packet => {
//     const title = ChatLib.removeFormatting(packet.func_179840_c().func_150254_d())
//
//     if (title.match(/^Undersized party!$/)) Client.scheduleTask(0, () => Player.getContainer().click(13, false, "middle"))
//     if (title.match(/^Creating instance....!$/)) Client.scheduleTask(0, () => Player.getContainer().click(31, false, "middle"))
// }).setFilteredClass(Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow"))
