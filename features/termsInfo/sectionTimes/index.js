import settings from "../config/settings"
import { guis } from "../config/gui"

let section = 0

let waiting = false
let gateBlown = false
let sectionTime = Date.now()
register("chat", (name, action, object, completed, total, event) => {
    if (completed !== total) return
    if (!gateBlown) waiting = true
    else newSection()
}).setCriteria(/^(.+) (activated|completed) a (terminal|device|lever)! \((\d)\/(\d)\)/)

register("chat", () => {
    // ChatLib.chat(`waiting = ${waiting}, blown = ${gateBlown}`)
    if (waiting) return newSection()
    gateBlown = true
}).setCriteria(/^The gate has been destroyed!/)

function newSection() {
    sectionTime = Date.now()
    waiting = false
    gateBlown = false
    section++
    if (section == 4) gateBlown = true
    if (guis.sectionTimes.editing) return
    guis.sectionTimes.toggled = true
    guis.sectionTimes.name = `&3${((Date.now() - sectionTime) / 1000).toFixed(2)}s`
    setTimeout(() => guis.sectionTimes.toggled = false, 1500)
}

register("chat", () => newSection()).setCriteria(/^\[BOSS\] Goldor: Who dares trespass into my domain\?/)

register("worldLoad", () => {
    waiting = false
    gateBlown = false
    section = 0
})
