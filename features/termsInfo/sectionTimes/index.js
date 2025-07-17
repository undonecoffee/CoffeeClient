import settings from "../config/index"
import gui from "../../../globalUtils/guiUtils"
import file from "./utils"

const sectionTimesGui = new gui(file, file.sectionTimesGui, settings, "sectionTimesGui", "&33.26s", true, true)

let section = 0

let waiting = false
let gateBlown = false
// return waiting = true
const TermCompleteToggle = register("chat", (name, action, object, completed, total, event) => {
    if (completed !== total) return
    ChatLib.chat(`(${completed}/${total})`)
    if (!gateBlown) {
        waiting = true
        return
    }
    newSection()
})
    .setCriteria(/(.+) (activated|completed) a (terminal|device|lever)! \((\d)\/(\d)\)/)
    .unregister()

// return newSection()
const gateCheck = register("chat", () => {
    if (waiting) return newSection()
    gateBlown = true
})
    .setCriteria("The gate has been destroyed!")
    .unregister()

function newSection() {
    waiting = false
    gateBlown = false
    section++
    ChatLib.chat("now in section " + section)
    if (section == 4) gateBlown = true
    sectionTimesGui.on()
    sectionTimesGui.text(`&3${((Date.now() - sectionTime) / 1000).toFixed(2)}s`)
    sectionTime = Date.now()
    setTimeout(() => sectionTimesGui.off(), 2000)
}

const toggle1 = register("chat", () => {
    section = 1
    TermCompleteToggle.register()
    gateCheck.register()
    sectionTime = Date.now()
})
    .setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")
    .unregister()

const toggle2 = register("chat", () => {
    TermCompleteToggle.unregister()
    gateCheck.unregister()
})
    .setCriteria("The Core entrance is opening!")
    .unregister()

const toggle3 = register("worldload", () => {
    section = 0
    sectionTimesGui.off()
    TermCompleteToggle.unregister()
    gateCheck.unregister()
})

function checkSettings(setting) {
    if (!setting) sectionTimesGui.off()
    TermCompleteToggle[setting ? "register" : "unregister"]()
    gateCheck[setting ? "register" : "unregister"]()
    toggle1[setting ? "register" : "unregister"]()
    toggle2[setting ? "register" : "unregister"]()
    toggle3[setting ? "register" : "unregister"]()
}
checkSettings(settings.sectionTimesToggle)

register("guiClosed", (gui) => {
    if (!(gui instanceof Java.type("gg.essential.vigilance.gui.SettingsGui"))) return
    checkSettings(settings.sectionTimesToggle)
})

