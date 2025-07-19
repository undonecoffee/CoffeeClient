import settings from "../config/settings.js"
import { guis, guiHelper } from "../config/gui.js"
// guis.maskTimer.name = " "
guis.maskTimer.toggled = false
// let ticks = 0
// register("step", () => {
//     if (guis.maskTimer.editing == true) return
//     ticks++
//     guis.maskTimer.name = ticks
// }).setFps(10)
// setTimeout(() => guis.maskTimer.scale = 2, 700)
// setTimeout(() => guis.maskTimer.toggle(), 2200)
// setTimeout(() => guis.maskTimer.toggle(), 3000)

// const maskTimerGui = new gui(
//     file,
//     file.maskTimerGui,
//     settings,
//     "maskTimerGui",
//     `Spirit &b>&r 13.2
// &6Phoenix &b>&6 &aReady
// &cBonzo &b>&c 120.3`,
//     false,
//     true,
// )
//
// const masksTimes = [0, 0, 0] // spirit, phoenix, bonzo
//
// const main = register("step", () => {
//     masksTimes.forEach((v, i) => masksTimes[i] -= 0.1)
//     let masksDisplay = [` `, ` `, ` `]
//     masksDisplay.forEach((v, i) => masksDisplay[i] = masksTimes[i] <= 0 ? "&aReady" : masksTimes[i].toFixed(1))
//     maskTimerGui.text(`Spirit &b>&r ${masksDisplay[0]}\n&6Phoenix &b>&6 ${masksDisplay[1]}\n&cBonzo &b>&c ${masksDisplay[2]}`)
// }).setFps(10)
//
// register("worldload", () => {
//     masksTimes[2] = 0
//     main.unregister()
//     maskChat.unregister()
//     maskTimerGui.off()
// })
//
// const maskChat = register("chat", message => {
//     if (message == "Second Wind Activated! Your Spirit Mask saved your life!") masksTimes[0] = 30
//     if (message == "Your Phoenix Pet saved you from certain death!") masksTimes[1] = 60
//     if (message == "Your Bonzo's Mask saved your life!") masksTimes[2] = 180
//     if (message == "Your ⚚ Bonzo's Mask saved your life!") masksTimes[2] = 180
// }).setCriteria("${message}")
//
// const bossChat = register("chat", message => {
//     if (settings.maskTimerOnlyInTerms) return maskChat.register()
//     main.register()
//     maskChat.register()
//     maskTimerGui.on()
// }).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!")
//
// const bossChat2 = register("chat", message => {
//     if (!settings.maskTimerOnlyInTerms) return
//     main.register()
//     maskTimerGui.on()
// }).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")
//
// const bossChat3 = register("chat", message => {
//     main.unregister()
//     maskChat.unregister()
//     maskTimerGui.off()
// }).setCriteria("The Core entrance is opening!")
//
// function checkSettings(setting) {
//     maskTimerGui[setting ? "on" : "off"]()
//     maskChat[setting ? "register" : "unregister"]()
//     bossChat[setting ? "register" : "unregister"]()
//     bossChat2[setting ? "register" : "unregister"]()
//     bossChat3[setting ? "register" : "unregister"]()
// }
// checkSettings(settings.maskTimerToggle)
//
// register("guiClosed", gui => {
//     if (!(gui instanceof Java.type("gg.essential.vigilance.gui.SettingsGui"))) return
//     checkSettings()
// })
//
