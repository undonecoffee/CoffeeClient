import { modules } from "../../../index.js"
import Settings from "../../../guttedAmaterasu/amaterasu/Settings"
import DefaultConfig from "../../../guttedAmaterasu/amaterasu/DefaultConfig"

const defaultConf = new DefaultConfig("CoffeeClient/features/splits/config", "settingsData.json")

const make = {
    padTimers: () => {},
    pdSplits: () => {},
    splits: () => {},
    subSplits: () => {},
}

if (modules.splits.padTimers.toggled) make.padTimers()
if (modules.splits.pdSplits.toggled) make.pdSplits()
if (modules.splits.splits.toggled) make.splits()
if (modules.splits.subSplits.toggled) make.subSplits()

const config = new Settings("CoffeeClient/features/splits/config", defaultConf)

export default config.settings
