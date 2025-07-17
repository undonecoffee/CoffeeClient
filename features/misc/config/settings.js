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
}

if (modules.misc.autoBless.toggled) make.autoBless()
// if (modules.misc.autoRequeue.toggled) make.autoBless()
// if (modules.misc.chatCleaner.toggled) make.autoBless()
// if (modules.misc.maskTimer.toggled) make.autoBless()
// if (modules.misc.mobHightlight.toggled) make.autoBless()
// if (modules.misc.relicUtils.toggled) make.autoBless()
// if (modules.misc.sheepHider.toggled) make.autoBless()

const config = new Settings("CoffeeClient/features/misc/config", defaultConf)

export default config.settings
