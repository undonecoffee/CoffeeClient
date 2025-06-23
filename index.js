// load everything
import "./settings/brain.js"
import { importModules, importString, moduleNumberCheck, CTLoad } from "./globalUtils/importUtils"
import { importConfigs } from "./globalUtils/importUtils"
import "./settings/gui.js"

// Turn off "Auto-update modules" in /ct config to help with ct laod times
const CTLoadTime = 1000 // in milliseconds

// this is trying to import every module ive ever made so a lot of them wont be in the version you are using

const imports = [
    "splits/config",
    "splits/splits",
    "splits/subSplits",
    "splits/pdSplits",
    "splits/brSplits",
    "splits/padTimers",
    "splits/relics",
    "splits/ee3Timer",

    "terms/config",
    "terms/positionalAlerts",
    "terms/termTimes",
    "terms/termInfo",
    "terms/sectionTimes",
    "terms/movementTimer",
    "terms/ssSolver",

    "misc/config",
    "misc/chatCleaner",
    "misc/autoRequeue",
    "misc/relicUtils",
    "misc/mobHighlight",
    "misc/sheepHider",
    "misc/maskTimer",
    "misc/autoBless",
    "misc/commands",
    "misc/SinglePlayer",

    "eman/config",
    "eman/carry",
    "eman/bossInfo",
    "eman/katana",
    "eman/highlight",
]

let modules = importModules(imports)
importConfigs(imports)

FileLib.write("EngineerModules", "imports.js", importString(modules[0]))
if (modules[1] || moduleNumberCheck(modules[0].length)) CTLoad(CTLoadTime)
import "./imports"
