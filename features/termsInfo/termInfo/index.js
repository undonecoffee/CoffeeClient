import settings from "../config/settings"
import { guis } from "../config/gui"

const base = {
    section: 0,
    terms: 0,
    levers: 0,
    devs: [false, false, false, false],
    gate: false,
    waiting: false,
    display: { terms: `&c0&7/&c`, levers: `&c0&2/&c`, devs: `&cx`, gate: `&cx` },
}

const t = { ...base }

function newSection() {
    firstThingInSection = false
    t.section++
    ChatLib.chat(`section: ${t.section}`)
    t.terms = t.levers = 0
    t.gate = t.waiting = false

    t.display.terms = `&6Terms &c0&7/&c`
    t.display.levers = `&6Levers &c0&7/&c2`
    t.display.gate = t.section == 4 ? ` ` : `&6Gate &cx`
    t.display.total = t.section == 2 ? `&c0&7/&c8` : `&c0&7/&c7`

    t.display.devs = t.devs[t.section] ? `&6Device &a✔` : `&6Device &cx`
}

const updateGui = register("step", () => {
    if (guis.termInfo.editing) return
    if (settings.simpleToggle) guis.termInfo.name = t.display.total
    else guis.termInfo.name = `${t.display.terms}${t.section == 2 ? "5" : "4"}\n${t.display.levers}\n${t.display.devs}\n${t.display.gate}`
}).setFps(10).unregister()

/*
    fjsdklfdjlo
check armorstands
check time
check 2/7
check class

*/

let firstThingInSection = false
let lastNumberOfCompleted = 0
const chatUpdate = register("chat", (name, action, object, completed, total, event) => {
    if (completed == total) return t.gate ? newSection() : t.waiting = true
    let totalColor = completed <= 3 ? "c" : completed <= 6 ? "e" : total == 8 && completed == 7 ? "e" : "a"
    t.display.total = `&${totalColor}${completed}&7/&${totalColor}${total}`
    if (completed == 1) firstThingInSection == true
    if (!firstThingInSection) t.display.devs = `&6Device &a✔`

    if (object == "terminal") {
        t.terms++
        const color = t.terms == 1 ? "c" : t.terms < 4 ? "e" : t.terms == 4 ? (t.section == 2 ? "e" : "a") : "a"
        t.display.terms = `&6Terms &${color}${t.terms}&7/&${color}`
    } else if (object == "lever") {
        t.levers++
        t.display.levers = t.levers == 1 ? "&6Levers &e1&7/&e2" : "&6Levers &a2&7/&a2"
    } else if (object == "device") {
        if (lastNumberOfCompleted == completed)
            ChatLib.chat(`out of place dev done done ${lastNumberOfCompleted} == ${completed}`)
        else {
            ChatLib.chat(`currdev done ${lastNumberOfCompleted} == ${completed}`)
            t.display.devs = `&6Device &a✔`
        }
    }
    lastNumberOfCompleted = completed
}).setCriteria(/^(.+) (activated|completed) a (terminal|device|lever)! \((\d)\/(\d)\)/).unregister()
// (3/7)

const checkGate = register("chat", () => {
    if (t.waiting) return newSection()
    t.gate = true
    t.display.gate = `&6Gate &a✔`
}).setCriteria(/^The gate has been destroyed!$/)

let startTime

register("chat", () => {
    toggleTriggers(true)
    newSection()

    startTime = Date.now()
}).setCriteria(/\[BOSS\] Goldor: Who dares trespass into my domain\?/)

register("chat", () => toggleTriggers(false)).setCriteria("The Core entrance is opening!")
register("worldload", () => toggleTriggers(false))

const toggleTriggers = toggle => {
    guis.termInfo.toggled = toggle
    ;[chatUpdate, updateGui, checkGate].forEach(name => name[toggle ? "register" : "unregister"]())
}
