import settings from "../config/settings"
import { guis } from "../config/gui"
ChatLib.chat("test for anfrew")

let section = 0

let waiting = false
let gateBlown = false
register("chat", (name, action, object, completed, total, event) => {
    if (completed !== total) return
    // ChatLib.chat(`(${completed}/${total})`)
    if (!gateBlown) return waiting = true
    newSection()
}).setCriteria(/^(.+) (activated|completed) a (terminal|device|lever)! \((\d)\/(\d)\)/)

register("chat", () => {
    if (waiting) return newSection()
    gateBlown = true
}).setCriteria(/^The gate has been destroyed!/)

function newSection() {
    waiting = false
    gateBlown = false
    section++
    // ChatLib.chat("now in section " + section)
    if (section == 4) gateBlown = true
    guis.sectionTimes.toggled = true
    guis.sectionTimes.name = `&3${((Date.now() - sectionTime) / 1000).toFixed(2)}s`
    sectionTime = Date.now()
    setTimeout(() => guis.sectionTimes.toggled = false, 2000)
}

register("chat", () => {
    section = 1
    sectionTime = Date.now()
}).setCriteria(/^\[BOSS\] Goldor: Who dares trespass into my domain?/)
