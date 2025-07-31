import settings from "../config/settings"
import { guis } from "../config/gui"

const namesColor = "&6" // colors of the names

const base = {
    section: 0,
    terms: 0,
    levers: 0,
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

    t.display.terms = `${namesColor}Terms &c0&7/&c`
    t.display.levers = `${namesColor}Levers &c0&7/&c2`
    t.display.gate = t.section == 4 ? ` ` : `${namesColor}Gate &cx`
    t.display.total = t.section == 2 ? `&c0&7/&c8` : `&c0&7/&c7`

    t.display.devs = `${namesColor}Device &cx`
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
    if (completed == 1) firstThingInSection = true
    if (!firstThingInSection) t.display.devs = `${namesColor}Device &a✔`

    if (object == "terminal") {
        t.terms++
        const color = t.terms == 1 ? "c" : t.terms < 4 ? "e" : t.terms == 4 ? (t.section == 2 ? "e" : "a") : "a"
        t.display.terms = `${namesColor}Terms &${color}${t.terms}&7/&${color}`
    } else if (object == "lever") {
        t.levers++
        t.display.levers = t.levers == 1 ? `${namesColor}Levers &e1&7/&e2` : `${namesColor}Levers &a2&7/&a2`
    } else if (object == "device") {
        if (lastNumberOfCompleted == completed) {
            //
        } else {
            t.display.devs = `${namesColor}Device &a✔`
        }
    }
    lastNumberOfCompleted = completed
}).setCriteria(/^(.+) (activated|completed) a (terminal|device|lever)! \((\d)\/(\d)\)/).unregister()

const checkGate = register("chat", () => {
    if (t.waiting) return newSection()
    t.gate = true
    t.display.gate = `${namesColor}Gate &a✔`
}).setCriteria(/^The gate has been destroyed!$/)

register("chat", () => startTerms()).setCriteria(/\[BOSS\] Goldor: Who dares trespass into my domain\?/)

register("chat", () => toggleTriggers(false)).setCriteria("The Core entrance is opening!")
register("worldload", () => toggleTriggers(false))

const startTerms = () => {
    toggleTriggers(true)
    t.section = 0
    newSection()
}

const toggleTriggers = toggle => {
    guis.termInfo.toggled = toggle
    ;[chatUpdate, updateGui, checkGate].forEach(name => name[toggle ? "register" : "unregister"]())
}
