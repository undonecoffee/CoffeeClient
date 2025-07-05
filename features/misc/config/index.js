// import "../autoBless/index.js"
// import "../autoRequeue/index.js"
// import "../chatCleaner/index.js"
// import "../maskTimer/index.js"
// import "../mobHighlight/index.js"
// import "../relicUtils/index.js"
// import "../sheepHider/index.js"
import settings from "./config"

register("step", () => {
    if (!settings.testingSwitch) return
    ChatLib.chat("testingSwitch is enabled!")
}).setFps(1)

register("command", (...args) => settings.getConfig().openGui()).setName("ccmisc")
