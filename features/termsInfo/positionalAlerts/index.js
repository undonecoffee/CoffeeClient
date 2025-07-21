// import settings from "../config/index"
// import gui, { moveableGui } from "../../../globalUtils/guiUtils"
// import { inBox } from "../../../globalUtils/utils"
// import file, { showList, showPresetsList, showExtended, texts, ensureCorrectUsage, blankAlert, playSound } from "./utils"
//
// const mainGui = new gui(file, false, false, false, false, false, false)
// const moveGui = new moveableGui(file)
//
// register("command", (main, second, ...args) => {
//     switch (main) {
//         case "presets":
//             switch (second) {
//                 case "toggle":
//                     file.posAlerts.forEach((e, i) => {
//                         if (file.presets[args[0]].toggles.includes(i)) return (e.toggled = true)
//                         e.toggled = false
//                     })
//                     file.save()
//                     let togglesText = file.presets[args[0]].toggles.map(t => `&9${t}&7`).join(", ")
//                     ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 Toggled on alerts &5ID&7: (${togglesText})`)
//                     break
//                 default:
//                     showPresetsList(file.presets)
//                     break
//             }
//             break
//         case "list":
//             showList(file.posAlerts)
//             break
//         case "add":
//             file.posAlerts.push(blankAlert)
//             namesInPos = new Array(file.posAlerts.length).fill(null).map(() => [])
//             file.save()
//             ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&9 added new alert! &5ID&7: &e${namesInPos.length - 1}`)
//             break
//         case "remove":
//             if (second >= file.posAlerts.length) return ChatLib.chat("&0[&cEngineer&4Error&0]&4 Couldnt find the ID of the alert you are trying to remove")
//             ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&9 Removed alert at &5ID: &9${second}`)
//             file.posAlerts.splice(second, 1)
//             file.save()
//             break
//         case "test":
//             if (second > file.posAlerts.length) return ChatLib.chat("&0[&cEngineer&4Error&0]&4 Couldnt find the ID of the alert you are trying to test")
//             playAlert(file.posAlerts[second])
//             break
//         case "toggle":
//             file.posAlerts[second].toggled = !file.posAlerts[second].toggled
//             ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 Toggled "&9${file.posAlerts[second].name}&7" ${file.posAlerts[second].toggled ? "&aon" : "&coff"}`)
//             file.save()
//             break
//         case "edit":
//             if (!ensureCorrectUsage(second, args)) return
//             if (second > file.posAlerts.length) ChatLib.chat("&0[&cEngineer&4Error&0]&4 This ID doenst exist")
//             switch (args[0]) {
//                 case "name":
//                     file.posAlerts[second].name = args.slice(1).join(" ")
//                     ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 name now set to&7:&r ${file.posAlerts[second].name}`)
//                     break
//                 case "p3only":
//                     file.posAlerts[second].p3Only = !file.posAlerts[second].p3Only
//                     ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 Toggled ${file.posAlerts[second].toggled ? "&aon" : "&coff"}&7 p3 only for "&9${file.posAlerts[second].name}&7" `)
//                     break
//                 case "times":
//                     file.posAlerts[second].times = !file.posAlerts[second].times
//                     ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 Toggled ${file.posAlerts[second].times ? "&aon" : "&coff"} show times for "&9${file.posAlerts[second].name}&7" `)
//                     break
//                 case "message":
//                     file.posAlerts[second].message = args.slice(1).join(" ")
//                     ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 Message changed to &9${args.slice(1).join(" ")}`)
//                     break
//                 case "players":
//                     file.posAlerts[second].players = parseInt(args[1])
//                     ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 Players to trigger set to &9${args[1]}`)
//                     break
//                 case "playerpos":
//                     ;[x1, y1, z1, x2, y2, z2] = args.slice(1, 7).map(parseFloat)
//                     Object.assign(file.posAlerts[second].playerPos, { x1, y1, z1, x2, y2, z2 })
//                     ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 Payers position now set to&7: &7(&e${args[1]}&7, &e${args[2]}&7, &e${args[3]}&7) (&e${args[4]}&7, &e${args[5]}&7, &e${args[6]}&7)`)
//                     break
//                 case "selfpos":
//                     ;[x1, y1, z1, x2, y2, z2] = args.slice(1, 7).map(parseFloat)
//                     Object.assign(file.posAlerts[second].selfPos, { x1, y1, z1, x2, y2, z2 })
//                     ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 self position now set to&7: &7(&e${args[1]}&7, &e${args[2]}&7, &e${args[3]}&7) (&e${args[4]}&7, &e${args[5]}&7, &e${args[6]}&7)`)
//                     break
//                 case "sound":
//                     let [name, volume, pitch, timesPlayed, duration] = args.slice(1, 6).map((v, i) => (i !== 0 ? parseFloat(v) : v))
//                     Object.assign(file.posAlerts[second].sound, { name, volume, pitch, timesPlayed, duration })
//                     ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 &7Sound now set to&7: &7(${args[1]}&7) &7(&e${args[2]}&7, &e${args[3]}&7) (&e${args[4]}&7, &e${args[5]}&7)`)
//                     break
//                 case "title":
//                     switch (args[1]) {
//                         case "name":
//                             file.posAlerts[second].title.name = args.slice(2).join(" ")
//                             ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 &7Title name now set to&7:&r ${file.posAlerts[second].name}`)
//                             break
//                         case "pos":
//                             moveGui.moveGuiOn(file.posAlerts[second].title.name, file.posAlerts[second].title)
//                             break
//                         case "time":
//                             file.posAlerts[second].title.time = parseFloat(args[2])
//                             ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&7 &7Title time now set to&7: &e${args[2]}ms`)
//                             break
//                     }
//                     break
//             }
//             file.save()
//             break
//         default:
//             helpMessage()
//             break
//     }
// }).setName("posalerts")
//
// function helpMessage(errorMessage) {
//     ChatLib.chat(texts.helpMessage)
//     if (errorMessage) ChatLib.chat(`\n${errorMessage}`)
// }
// register("command", () => ChatLib.chat(texts.editHelpMessage)).setName("editHelp")
// register("command", id => showExtended(file.posAlerts, id)).setName("extendedAlert")
// register("command", id => ChatLib.chat(texts.commonSounds)).setName("commonsounds")
// register("command", (name, volume, pitch, timesPlayed = 1, duration) => playSound(name, volume, pitch, timesPlayed, duration)).setName("playsound")
//
// let inBoss = false,
//     inP3 = false
// let bossStart = null,
//     p3Start = null
// register("command", () => {
//     times = new Array(file.posAlerts.length).fill([]).map(() => [])
//     file.posAlerts.forEach(e => (e.done = false))
//     file.save()
//     inBoss = true
//     inP3 = true
//     main.register()
//     bossStart = Date.now()
//     p3Start = Date.now()
//     ChatLib.chat(`&0[&cEngineer&6Debug&0]&a reset!`)
// }).setName("reset")
//
// register("chat", () => {
//     file.posAlerts.forEach(e => (e.done = false))
//     file.save()
//     if (file.posAlerts.some(e => !e.p3Only)) main.register()
//     inBoss = true
//     bossStart = Date.now()
// }).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!")
// register("chat", () => {
//     if (!file.posAlerts.some(e => !e.p3Only)) main.register()
//     inP3 = true
//     p3Start = Date.now()
// }).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")
// register("worldUnload", () => {
//     times = new Array(file.posAlerts.length).fill(null).map(() => [])
//     inBoss = false
//     inP3 = false
//     main.unregister()
// })
//
// // bulk of real code
//
// function playAlert(alert) {
//     alert.done = true
//     ChatLib.chat(`&7played alert: ${alert.name}&7 it took &6${alert.players}&7 to trigger`)
//     playSound(alert.sound.name, alert.sound.volume, alert.sound.pitch, alert.sound.timesPlayed, alert.sound.duration)
//     mainGui.text(alert.title.name)
//     mainGui.move(alert.title.x, alert.title.y, alert.title.scale)
//     mainGui.timeOn(alert.title.time)
// }
// let namesInPos = []
// let times = new Array(file.posAlerts.length).fill([]).map(() => [])
// let inSpot = []
//
// const main = register("tick", () => {
//     // if (e.getPing() !== 1) return;
//     namesInPos = new Array(file.posAlerts.length).fill(null).map(() => [])
//     let playerPositions = []
//     inSpot = new Array(file.posAlerts.length).fill(null).map(() => [])
//     World.getAllPlayers().forEach(e => {
//         // ChatLib.chat(`&0[&cEngineer&6Debug&0]&a getAllPlayers() is working!`);
//         if (e.getPing() !== 1) return
//         // ChatLib.chat(`&0[&cEngineer&6Debug&0]&a ${e.getPing()}!`);
//         if (e.isInvisible() || e.name == Player.getName()) return
//         // ChatLib.chat(`&0[&cEngineer&6Debug&0]&7 Pushing player to all positions ${e.name}`);
//         playerPositions.push({ name: e.name, x: e.x, y: e.y, z: e.z })
//     })
//     file.posAlerts.forEach((posAlert, i) => {
//         if (posAlert.done || !posAlert.toggled || !inBoss || (!inP3 && posAlert.p3Only)) return
//         let self = posAlert.selfPos
//         if (!inBox(self.x1, self.x2, self.y1, self.y2, self.z1, self.z2)) return
//         inSpot[i].push(true)
//         playerPositions.forEach(e => {
//             let pos = posAlert.playerPos
//             if (e.y > pos.y2) return
//             if (e.y < pos.y1) return
//             if (e.x < pos.x1 || e.x > pos.x2 || e.z < pos.z1 || e.z > pos.z2) return
//
//             if (!times[i].includes(e.name)) {
//                 times[i].push(e.name)
//                 if (posAlert.message == " ") return
//                 ChatLib.chat(`&0[&cEngineer&bPosAlerts&0]&9 ${e.name}&7 ${posAlert.message} &e[&b${((Date.now() - (posAlert.p3Only ? p3Start : bossStart)) / 1000).toFixed(2)}s&e]`)
//             }
//             namesInPos[i].push(e.name)
//         })
//         if (namesInPos[i].length >= posAlert.players) playAlert(posAlert)
//     })
// })
//
// // let title = ` `
// // let title2 = ` `
// // let title3 = ` `
// // register("tick", () => {
// //     let fuinal = `&7players\n`
// //     namesInPos.forEach((e, i) => {
// //         if (e == false) return fuinal += `&7${i}: &9null\n`
// //         e.forEach((e2, i2) => {
// //             if (i2 == e.length) return fuinal += `&3${e2}`
// //             if (i2 == 0) return fuinal += `&7${i}: &3${e2}&7`
// //             fuinal += `\n     &3${e2}&7, `
// //         });
// //     });
// //     title = fuinal
//
// //     let fuinal2 = `&7in spot\n`
// //     inSpot.forEach((e, i) => {
// //         if (e == false) return fuinal2 += `&7${i}: &cfalse\n`
// //         fuinal2 += `&7${i}: &atrue\n`
// //     });
// //     title2 = fuinal2
//
// //     let fuinal3 = `&7e.done\n`
// //     file.posAlerts.forEach((e, i) => {
// //         if (e.done == false) return fuinal3 += `&7${i}: &cfalse\n`
// //         fuinal3 += `&7${i}: &atrue\n`
// //     });
// //     title3 = fuinal3
//
// //     fuinal4 = ` `
// //     if (inBoss) fuinal4 += `&ainBoss\n `
// //     else fuinal4 += `&cinBoss\n `
// //     if (inP3) fuinal4 += `&ainP3`
// //     else fuinal4 += `&cinP3`
// //     title4 = fuinal4
// // })
//
// // const red = 0xffff0000, blue = 0xff00ff00
//
// // register("renderOverlay", () => new Text(title, 740, 60).setShadow(true).draw())
// // register("renderOverlay", () => new Text(title2, 700, 60).setShadow(true).draw())
// // register("renderOverlay", () => new Text(title3, 660, 60).setShadow(true).draw())
// // register("renderOverlay", () => new Text(title4, 620, 60).setShadow(true).draw())
// // register("renderOverlay", () => {
// //     // Renderer.drawRect(blue, 200, 200, 100, 100)
// // })
//
// import { renderBoxOutlineFromCorners } from "../../../globalUtils/RenderLib"
//
// const render = register("renderWorld", () => {
//     file.posAlerts.forEach(e => {
//         if (!e.toggled) return
//         // ChatLib.chat(`&7(&e${e.playerPos.x1}&7, &e${e.playerPos.y1}&7, &e${e.playerPos.z1}&7) (&e${e.playerPos.x2}&7, &e${e.playerPos.y2}&7, &e${e.playerPos.z2}&7)`)
//         renderBoxOutlineFromCorners(e.playerPos.x1, e.playerPos.y1, e.playerPos.z1, e.playerPos.x2, e.playerPos.y2, e.playerPos.z2, 1, 0, 0, 1)
//         renderBoxOutlineFromCorners(e.selfPos.x1, e.selfPos.y1, e.selfPos.z1, e.selfPos.x2, e.selfPos.y2, e.selfPos.z2, 0, 1, 0, 1)
//         let name = e.name[0][0] == "&" ? e.name.slice(2) : e.name
//         Tessellator.drawString(name, (e.playerPos.x1 + e.playerPos.x2) / 2, e.playerPos.y2 + 0.6, (e.playerPos.z1 + e.playerPos.z2) / 2, -1, false, 0.034, false)
//         Tessellator.drawString(name, (e.selfPos.x1 + e.selfPos.x2) / 2, e.selfPos.y2 + 0.6, (e.selfPos.z1 + e.selfPos.z2) / 2, -1, false, 0.034, false)
//     })
// })
//
// const modules = [{ name: render, setting: "DebugRender" }]
// register("guiClosed", gui => {
//     if (!(gui instanceof Java.type("gg.essential.vigilance.gui.SettingsGui"))) return
//     modules.forEach(({ name, setting }) => (settings[setting] ? name.register() : name.unregister()))
// })
// modules.forEach(({ name, setting }) => (settings[setting] ? name.register() : name.unregister()))
