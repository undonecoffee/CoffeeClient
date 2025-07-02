// import "../autoBless/index.js"
// import "../autoRequeue/index.js"
// import "../chatCleaner/index.js"
// import "../maskTimer/index.js"
// import "../mobHighlight/index.js"
// import "../relicUtils/index.js"
// import "../sheepHider/index.js"
import settings from "./config"

// Now we can use its provided values

// For example only running a feature whenever "testingSwitch" is enabled
register("step", () => {
    // If it's disabled we return (won't keep going further down)
    if (!settings.testingSwitch) return

    // Otherwise (if it's enabled) we say something in chat
    ChatLib.chat("testingSwitch is enabled!")
}).setFps(1)

// Making a custom command

// A lot of people would prefer having custom command system
// here's how we do that in Amaterasu
register("command", (...args) => {
    // If no arguments were passed to the command
    // (meaning only "/mytest" was ran and not "/mytest something here")
    // we open our Amaterasu gui
    settings.getConfig().openGui()
}).setName("mytest")

// We can also use registerListener from here
// as well as all the other options that [Settings] class gives
settings.getConfig().registerListener("testingSwitch", (previousValue, newValue) => {
    ChatLib.chat(`looks like testingSwitch changed | ${previousValue} -> ${newValue} |`)
})
