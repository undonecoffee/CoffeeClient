import settings from "./settings.js"
import "./gui.js"

register("step", () => {
    if (!settings.testingSwitch) return
    ChatLib.chat("testingSwitch is enabled!")
}).setFps(1)

register("command", (...args) => settings.getConfig().openGui()).setName("ccmisc")
