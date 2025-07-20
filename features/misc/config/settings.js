import { modules } from "../../../index.js"
import Settings from "../../../guttedAmaterasu/amaterasu/Settings"
import DefaultConfig from "../../../guttedAmaterasu/amaterasu/DefaultConfig"

const defaultConf = new DefaultConfig("CoffeeClient/features/misc/config", "settingsData.json")

const make = {
    autoBless: () => {
        defaultConf.addButton({
            category: "Auto Bless",
            configName: "autobless",
            title: "autovleswdjsk",
            description: "description test",
            onClick(setting) {
                ChatLib.chat("button clicked i think")
            },
        })
    },
    maskTimer: () => {
        defaultConf.addButton({
            category: "maskTimer",
            configName: "maskTimer",
            title: "autovleswdjsk",
            description: "description test",
            onClick(setting) {
                ChatLib.chat("button clicked i think")
            },
        })
    },
}

if (modules.misc.autoBless.toggled) make.autoBless()
if (modules.misc.autoRequeue.toggled) make.autoRequeue()
if (modules.misc.chatCleaner.toggled) make.chatCleaner()
if (modules.misc.maskTimer.toggled) make.maskTimer()
if (modules.misc.mobHighlight.toggled) make.mobHighlight()
if (modules.misc.relicUtils.toggled) make.relicUtils()
if (modules.misc.sheepHider.toggled) make.sheepHider()

const config = new Settings("CoffeeClient/features/misc/config", defaultConf)

export default config.settings
