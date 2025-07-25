import settings from "../config/settings"
import { guis } from "../config/gui"

register("command", (object, completed, total) => {
    let totalColor = completed <= 3 ? "c" : completed <= 6 ? "e" : total == 8 && completed == 7 ? "e" : "a"
    t.display.total = `&${totalColor}${completed}&7/&${totalColor}${total}`
    let showObject = ""
    if (object == "s" || object == "start") {
        newSection()
        toggleTriggers(true)
        return
    } else if (object == "n") return newSection()
    else if (object == "t" || object == "term") showObject = "terminal"
    else if (object == "l") showObject = "lever"
    else if (object == "g") showObject = "gate"
    else if (object == "d" || object == "dev") showObject = "device"
    else showObject = object
    helper[showObject]()
}).setName("sim")

setTimeout(() => {
    ChatLib.command("sim s", true)
    ChatLib.command("sim t", true)
}, 500)

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
    t.section++
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
    if (settings.simpleToggle) {
        //
        guis.termInfo.name = t.display.total
    } else {
        guis.termInfo.name = `${t.display.terms}${t.section == 2 ? "5" : "4"}\n${t.display.levers}\n${t.display.devs}\n${t.display.gate}`
    }
}).setFps(10).unregister()

// const devCoords = [[100, 200], [100, 200], [100, 200], [100, 200]]

const checkDevs = register("step", () => {
    // const armorStands = World.getAllEntities().filter(e => e.name.removeFormatting() === "Device Complete").map(e => [e.getX(), e.getZ()])
    // devCoords.forEach(([x1, z1], i) => {
    //     if (t.devs[i]) return
    //     armorStands.forEach(([x2, z2]) => {
    //         if (x1 == x2 && z1 == z2) return t.devs[i] = true
    //     })
    // })
}).setFps(3).unregister()

const chatUpdate = register("chat", (name, action, object, completed, total, event) => {
    if (completed == total) return t.gate ? newSection() : t.waiting = true
    let totalColor = completed <= 3 ? "c" : completed <= 6 ? "e" : total == 8 && completed == 7 ? "e" : "a"
    t.display.total = `&${totalColor}${completed}&7/&${totalColor}${total}`

    if (object == "terminal") {
        helper.term()
        //
    } else if (object == "lever") {
        helper.lever()
        //
    } else if (object == "device") {
        helper.dev()
        //
    }
}).setCriteria(/^(.+) (activated|completed) a (terminal|device|lever)! \((\d)\/(\d)\)/).unregister()

const helper = {
    terminal: () => {
        t.terms++
        const color = t.terms == 1 ? "c" : t.terms < 4 ? "e" : t.terms == 4 ? (t.section == 2 ? "e" : "a") : "a"
        t.display.terms = `&6Terms &${color}${t.terms}&7/&${color}`
    },
    lever: () => {
        t.levers++
        t.display.levers = t.levers == 1 ? "&6Levers &e1&7/&e2" : "&6Levers &a2&7/&a2"
    },
    device: () => {
        //
        console.log("dev")
    },
    gate: () => {
        if (t.waiting) return newSection()
        t.gate = true
        t.display.gate = `&6Gate &a✔`
    },
}

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
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")

register("chat", () => toggleTriggers(false)).setCriteria("The Core entrance is opening!")
register("worldload", () => toggleTriggers(false))

const toggleTriggers = toggle => {
    guis.termInfo.toggled = toggle
    ;[chatUpdate, updateGui, checkDevs, checkGate].forEach(name => name[toggle ? "register" : "unregister"]())
}
