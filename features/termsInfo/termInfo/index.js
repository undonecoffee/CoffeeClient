import settings from "../config/index"
import gui from "../../../globalUtils/guiUtils"
import file from "./utils"

const termInfoGui = new gui(
    file,
    file.termInfoGui,
    settings,
    "termInfoGui",
    `&6Terms &c2&7/&c5
&6Levers &e1&7/&e2
&6Device &cx
&6Gate &a✔`,
    false,
    true,
)

const base = {
    terms: 0,
    levers: 0,
    devs: { first: false, second: false, third: false, fourth: false },
    gate: false,
    waiting: false,
    section: 0,
    display: {
        terms: `&c0&7/&c`,
        levers: `&c0&2/&c`,
        devs: `&cx`,
        gate: `&cx`,
        sectionTerms: 4,
    },
}

const t = { ...base }

function newSection() {
    t.section++
    t.terms = 0
    t.levers = 0
    t.gate = false
    t.waiting = false

    if (settings.simpleToggle) {
        t.display.terms = ` `
        t.display.levers = ` `
        t.display.gate = ` `
        t.display.devs = ` `
        t.display.sectionTerms = t.section == 2 ? `&c0&7/&c8` : `&c0&7/&c7`
        return
    }

    if (t.section == 2) t.display.sectionTerms = 5
    else t.display.sectionTerms = 4

    t.display.terms = `&6Terms &c0&7/&c`
    t.display.levers = `&6Levers &c0&7/&c2`
    t.display.gate = t.section == 4 ? ` ` : `&6Gate &cx`
    const sectionConditions = {
        2: Data.i2,
        3: Data.i3,
        4: t.devs.fourth,
    }

    t.display.devs = sectionConditions[t.section] ? `&6Device &a✔` : `&6Device &cx`
}

const toggle1 = register("step", () =>
    termInfoGui.text(
        `${t.display.terms}${t.display.sectionTerms}
${t.display.levers}
${t.display.devs}
${t.display.gate}`,
    )).setFps(10).unregister()

const toggle3 = register("chat", (name, action, object, completed, total, event) => {
    if (Data.simple) { // using sectionTerms because its the only one im not setting to empty
        let color = completed <= 3 ? `&c` : completed <= 5 ? `&e` : completed <= 8 ? `&a` : ` `
        t.display.sectionTerms = `${color}${completed}&7/&a${total}`
        if (completed == total) {
            if (!t.gate) return t.waiting = true
            newSection()
        }
        return
    }
    switch (object) {
        case "terminal":
            t.terms++

            t.display.terms = t.terms == 4 ?
                (t.display.sectionTerms == 4 ? "&6Terms &a4&7/&a" : t.display.sectionTerms == 5 ? "&6Terms &e4&7/&e" : "") :
                t.terms == 1 ?
                "&6Terms &c1&7/&c" :
                t.terms == 2 ?
                "&6Terms &e2&7/&e" :
                t.terms == 3 ?
                "&6Terms &e3&7/&e" :
                t.terms == 5 ?
                "&6Terms &a5&7/&a" :
                "&cERROR ERROR ERROR ERROR"
            break
        case "lever":
            t.levers++
            t.display.levers = t.levers == 1 ? "&6Levers &e1&7/&e2" : t.levers == 2 ? "&6Levers &a2&7/&a2" : ""
            break
        case "device":
            if ((Date.now() - startTime) < 3000) return
            if ((Date.now() - startTime) < 9000) return t.devs.fourth = true
            t.display.devs = `&6Device &a✔`
            break

        default:
            break
    }
    if (completed == total) {
        if (!t.gate) return t.waiting = true
        newSection()
    }
}).setCriteria(/(.+) (activated|completed) a (terminal|device|lever)! \((\d)\/(\d)\)/).unregister()

const toggle4 = register("chat", () => {
    if (t.waiting) return newSection()
    t.gate = true
    if (!Data.simple) t.display.gate = `&6Gate &a✔`
}).setCriteria("The gate has been destroyed!").unregister()

let startTime

const toggleMain = register("chat", () => {
    if (!Data.simple) Object.assign(t, JSON.parse(JSON.stringify(base)))

    if (settings.assumeI2) t.devs.second = true
    if (settings.assumeI3) t.devs.third = true

    toggleTriggers(true)
    newSection()

    startTime = Date.now()
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?").unregister()

const toggle2 = register("chat", () => toggleTriggers(false)).setCriteria("The Core entrance is opening!").unregister()
const toggle5 = register("worldload", () => {
    t.devs.second = false
    toggleTriggers(false)
})

function toggleTriggers(bool) {
    termInfoGui[bool ? "on" : "off"]()
    const triggers = [toggle1, toggle2, toggle3, toggle4, toggle5]
    triggers.forEach(trigger => bool ? trigger.register() : trigger.unregister())
}

function checkSettings(setting) {
    if (!setting) termInfoGui.off()
    toggleMain[setting ? "register" : "unregister"]()
}
checkSettings(settings.sectionTimesToggle)

register("guiClosed", gui => {
    if (!(gui instanceof Java.type("gg.essential.vigilance.gui.SettingsGui"))) return
    checkSettings(settings.termInfoToggle)
})
