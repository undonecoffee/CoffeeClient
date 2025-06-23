import "./settings.js"

// this is trying to import every module ive ever made so a lot of them wont be in the version you are using

const imports = [
    "splits/splits",
    "splits/subSplits",
    "splits/pdSplits",
    "splits/brSplits",
    "splits/padTimers",
    "splits/relics",
    "splits/ee3Timer",

    "termsInfo/positionalAlerts",
    "termsInfo/termTimes",
    "termsInfo/termInfo",
    "termsInfo/sectionTimes",
    "termsInfo/movementTimer",
    "termsInfo/ssSolver",

    "misc/chatCleaner",
    "misc/autoRequeue",
    "misc/relicUtils",
    "misc/mobHighlight",
    "misc/sheepHider",
    "misc/maskTimer",
    "misc/autoBless",
    "misc/commands",
    "misc/SinglePlayer",

    "autoClear/autoMap"
    "autoClear/autoRoutes"
    "autoClear/autoPuzzles"
    "autoClear/autoCamp"
    "autoClear/auto0s"

    "autoBoss/preTerms",
    "autoBoss/postTerms",
    "autoBoss/p4",
    "autoBoss/p5",

    "autoP3/autoTerms",
    "autoP3/routes",

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
