import settings from "../config/settings"
import { guis } from "../config/gui"

const masksTimes = [0, 0, 0] // spirit, phoenix, bonzo
const maskMessages = [
    [/^Second Wind Activated! Your Spirit Mask saved your life!/, 30],
    [/^Your Phoenix Pet saved you from certain death!/, 60],
    [/^Your (⚚ )?Bonzo's Mask saved your life!/, 180],
]
register("chat", msg => maskMessages.forEach(([r, t], i) => r.test(msg) && (masksTimes[i] = t))).setCriteria("${message}")

const bossTriggers = [
    [/^\[BOSS\] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!/, false, true],
    [/^\[BOSS\] Goldor: Who dares trespass into my domain\?/, true, true],
    [/^The Core entrance is opening!/, true, false],
].forEach(([chat, onlyP3, toggled]) => {
    register("chat", () => {
        if (settings.onlyP3 == false && !onlyP3) guis.maskTimer.toggled = true
        if (settings.onlyP3 == true && onlyP3) guis.maskTimer.toggled = true
        if (settings.onlyP3 == true && !toggled) guis.maskTimer.toggled = false
    }).setCriteria(chat)
})

register("step", () => {
    masksTimes.forEach((v, i) => masksTimes[i] -= 0.1)
    let masksDisplay = [` `, ` `, ` `]
    masksDisplay.forEach((v, i) => masksDisplay[i] = masksTimes[i] <= 0 ? "&aReady" : masksTimes[i].toFixed(1))
    guis.maskTimer.name = `Spirit &b>&r ${masksDisplay[0]}\n&6Phoenix &b>&6 ${masksDisplay[1]}\n&cBonzo &b>&c ${masksDisplay[2]}`
}).setFps(10)

register("worldload", () => guis.maskTimer.toggled = false)
