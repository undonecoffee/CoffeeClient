import settings from "../config/settings"

//
// const base = {
//     terms: 0,
//     levers: 0,
//     devs: [false, false, false, false],
//     gate: false,
//     waiting: false,
//     section: 0,
//     display: {
//         terms: `&c0&7/&c`,
//         levers: `&c0&2/&c`,
//         devs: `&cx`,
//         gate: `&cx`,
//         sectionTerms: 4,
//     },
// }
//
// const t = { ...base }
//
// function newSection() {
//     t.section++
//     t.terms = 0
//     t.levers = 0
//     t.total = 0
//     t.gate = false
//     t.waiting = false
//
//     t.display.terms = `&6Terms &c0&7/&c`
//     t.display.levers = `&6Levers &c0&7/&c2`
//     t.display.gate = t.section == 4 ? ` ` : `&6Gate &cx`
//     t.display.sectionTerms = t.section == 2 ? 5 : 4
//
//     t.display.devs = t.devs[t.section] ? `&6Device &a✔` : `&6Device &cx`
// }
//
// const updateGui = register("step", () => {
//     if (settings().simpleToggle) {
//         //
//         guis.termInfo.name = `${t.display.terms}`
//     } else {
//         guis.termInfo.name = `${t.display.terms}${t.display.sectionTerms}\n${t.display.levers}\n${t.display.devs}\n${t.display.gate}`
//     }
// }).setFps(10).unregister()
//
// const devCoords = [[100, 200], [100, 200], [100, 200], [100, 200]]
// const checkDevs = register("step", () => {
//     const armorStands = World.getAllEntities().filter(e => e.name.removeFormatting() === "Device Complete").map(e => [e.getX(), e.getZ()])
//     devCoords.forEach(([x1, z1], i) => {
//         if (t.devs[i]) return
//         armorStands.forEach(([x2, z2]) => {
//             if (x1 == x2 && z1 == z2) return t.devs[i] = true
//         })
//     })
// }).setFps(3).unregister()
//
// const chatUpdate = register("chat", (name, action, object, completed, total, event) => {
//     switch (object) {
//         case "terminal":
//             t.terms++
//
//             t.display.terms = t.terms == 4 ?
//                 (t.display.sectionTerms == 4 ? "&6Terms &a4&7/&a" : t.display.sectionTerms == 5 ? "&6Terms &e4&7/&e" : "") :
//                 t.terms == 1 ?
//                 "&6Terms &c1&7/&c" :
//                 t.terms == 2 ?
//                 "&6Terms &e2&7/&e" :
//                 t.terms == 3 ?
//                 "&6Terms &e3&7/&e" :
//                 t.terms == 5 ?
//                 "&6Terms &a5&7/&a" :
//                 "&cERROR ERROR ERROR ERROR"
//             break
//         case "lever":
//             t.levers++
//             t.display.levers = t.levers == 1 ? "&6Levers &e1&7/&e2" : t.levers == 2 ? "&6Levers &a2&7/&a2" : ""
//             break
//         case "device":
//             if ((Date.now() - startTime) < 3000) return
//             if ((Date.now() - startTime) < 9000) return t.devs.fourth = true
//             t.display.devs = `&6Device &a✔`
//             break
//
//         default:
//             break
//     }
//     if (completed == total) {
//         if (!t.gate) return t.waiting = true
//         newSection()
//     }
// }).setCriteria(/(.+) (activated|completed) a (terminal|device|lever)! \((\d)\/(\d)\)/)
//
// register("chat", () => {
//     if (t.waiting) return newSection()
//     t.gate = true
//     t.display.gate = `&6Gate &a✔`
// }).setCriteria("The gate has been destroyed!")
//
// let startTime
//
// register("chat", () => {
//     if (!settings.simple) Object.assign(t, JSON.parse(JSON.stringify(base)))
//
//     if (settings.assumeI2) t.devs.second = true
//     if (settings.assumeI3) t.devs.third = true
//
//     toggleTriggers(true)
//     newSection()
//
//     startTime = Date.now()
// }).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")
//
// register("chat", () => toggleTriggers(false)).setCriteria("The Core entrance is opening!")
// // register("worldload", () => toggleTriggers(false))
