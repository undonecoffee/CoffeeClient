import { modules } from "../../../index.js"
import Settings from "../../../guttedAmaterasu/amaterasu/Settings"
import DefaultConfig from "../../../guttedAmaterasu/amaterasu/DefaultConfig"

const defaultConf = new DefaultConfig("CoffeeClient/features/termsInfo/config", "settingsData.json")

const make = {
    movementTimer: () => {},
    positionalAlerts: () => {},
    sectionTimes: () => {},
    termInfo: () => {},
    termTImes: () => {},
}

if (modules.termsInfo.movementTimer.toggled) make.movementTimer()
if (modules.termsInfo.positionalAlerts.toggled) make.positionalAlerts()
if (modules.termsInfo.sectionTimes.toggled) make.sectionTimes()
if (modules.termsInfo.termInfo.toggled) make.termInfo()
if (modules.termsInfo.termTimes.toggled) make.termTimes()

const config = new Settings("CoffeeClient/features/termsInfo/config", defaultConf)

export default config.settings
