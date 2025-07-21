import { modules } from "../../../index.js"
import Settings from "../../../guttedAmaterasu/amaterasu/Settings"
import DefaultConfig from "../../../guttedAmaterasu/amaterasu/DefaultConfig"

const defaultConf = new DefaultConfig("CoffeeClient/features/splits/config", "settingsData.json")

const make = {
    splits: () => {
        defaultConf.addSwitch({
            category: "Splits",
            configName: "only_ticks",
            title: "Only Show Ticks",
            description: "Only shows how long each split took in ticks\n&cNecron &b> &c5.80s",
            subcategory: "display",
        })
        defaultConf.addSwitch({
            category: "Splits",
            configName: "removeNames",
            title: "Remove Names",
            description: "Removes the names of the splits but not the color\n&c5.87s &8(&75.80s&8)",
            subcategory: "display",
        })
        defaultConf.addSwitch({
            category: "Splits",
            configName: "dontReset",
            title: "Dont Reset On World Load",
            description: "Makes it so splits only reset when a new run starts",
            subcategory: "display",
        })
        defaultConf.addSwitch({
            category: "Splits",
            configName: "show_enter",
            title: "Show Enter",
            description: "Shows the enter time\n&9Enter &b> &94m 13.2s &8(&74m 12.2s&8)",
            subcategory: "display",
        })
        defaultConf.addSwitch({
            category: "Splits",
            configName: "show_pace",
            title: "Show Pace",
            description: "Shows a live estimate of the run time\n&3Pace &b> &35m 12.5s &8(&75m 6.8s&8)",
            subcategory: "display",
        })
        defaultConf.addTextParagraph({
            category: "Splits",
            configName: "textParagraph",
            title: `"/pace" to start`,
            description: `&3/pace &7(profile&7) &a12 &c60 &d3 &525.5 &b45.5 &635 &e6.5 &c30.3 &d58&f to edit pace\n&3/pace add &7(name)&f to add profile; &3/pace &7(profile)&f to select`,
            subcategory: "display",
            centered: true,
            shouldShow(data) {
                return data.show_pace
            },
        })
    },
    subSplits: () => {
        defaultConf.addSlider({
            category: "Sub Splits",
            configName: "shownLines",
            title: "Number Of Lines Shown",
            description: "Max number of lines shown on the screen at once",
            subcategory: " ",
            options: [0, 100],
            value: 15,
        })
        defaultConf.addTextParagraph({
            category: "Sub Splits",
            configName: "textParagraph",
            title: " ",
            description: "&f/subsplits to see examples of what each split looks like",
            centered: true,
            subcategory: " ",
        })
        defaultConf.addSwitch({
            category: "Sub Splits",
            configName: "showRoomNames",
            title: "Show Room Names",
            description: "Shows room names instead of room number",
            subcategory: "Open",
        })
        defaultConf.addDropDown({
            category: "Sub Splits",
            configName: "open",
            title: "&aOpen",
            description: "Displays key times on blood rush",
            subcategory: "Open",
            options: [
                "none",
                "by room",
                "by key",
                "all",
            ],
        })
        defaultConf.addDropDown({
            category: "Sub Splits",
            configName: "blood",
            title: "&cBlood",
            description: "Displays each mob on camp",
            subcategory: "Blood",
            options: [
                "none",
                "average",
                "stats",
                "all",
            ],
        })
        defaultConf.addDropDown({
            category: "Sub Splits",
            configName: "portal",
            title: "&dPortal",
            description: "Displays portal spawn time if you are close",
            subcategory: "Portal",
            options: [
                "none",
                "show",
            ],
        })
        defaultConf.addDropDown({
            category: "Sub Splits",
            configName: "maxor",
            title: "&5Maxor",
            description: "Displays crystal times",
            subcategory: "Maxor",
            options: [
                "none",
                "crystals",
                "crystals agro",
                "all",
            ],
        })
        defaultConf.addDropDown({
            category: "Sub Splits",
            configName: "storm",
            title: "&bStorm",
            description: "Displays crush/dps times",
            subcategory: "Storm",
            options: [
                "none",
                "dps",
                "dps / crush",
                "all",
            ],
        })
        defaultConf.addDropDown({
            category: "Sub Splits",
            configName: "terms",
            title: "&6Terms",
            description: "Displays section/each term",
            subcategory: "Terms",
            options: [
                "none",
                "section",
                "each term",
                "all movements",
            ],
        })
        defaultConf.addDropDown({
            category: "Sub Splits",
            configName: "goldor",
            title: "&eGoldor",
            description: "displays leap in times",
            subcategory: "Goldor",
            options: [
                "none",
                "leaps",
                "first hit",
                "all",
            ],
        })
        defaultConf.addDropDown({
            category: "Sub Splits",
            configName: "necron",
            title: "&cNecron",
            description: "idk what this would show. \nneed to look into it more",
            subcategory: "Necron",
            options: [
                "none",
            ],
        })
        defaultConf.addDropDown({
            category: "Sub Splits",
            configName: "p5_relics",
            title: "&5P5 &7(&5relics&7)",
            description: "shows each relic time\nshows nothing on f7",
            subcategory: "P5 Relics",
            options: [
                "none",
                "total",
                "each",
                "all",
            ],
        })
        defaultConf.addDropDown({
            category: "Sub Splits",
            configName: "p5_dragons",
            title: "&5P5 &7(&5Dragons&7)",
            description: "shows each dragon kill time\nshows nothing on f7",
            subcategory: "P5 Dragons",
            options: [
                "none",
                "total",
                "each",
                "all",
            ],
        })
    },
    padTimers: () => {
        defaultConf.addSwitch({
            category: "Pad Timers",
            configName: "ticks",
            title: "Show In Ticks",
            subcategory: " ",
            description: "Shows time left before having to pad in ticks rather than seconds",
        })
        defaultConf.addMultiCheckbox({
            category: "Pad Timers",
            subcategory: " ",
            configName: "padTimers",
            title: "Pad Timers",
            description: "Displays a timer for each pad selected",
            placeHolder: "Click", // This is the text that will be display on the dropdown component
            options: [
                {
                    title: "Purple Pad",
                    configName: "purple",
                    value: false,
                },
                {
                    title: "Yellow Pad (py)",
                    configName: "yellow_py",
                    value: false,
                },
                {
                    title: "Green Pad",
                    configName: "green",
                    value: false,
                },
                {
                    title: "Yellow Pad (gy)",
                    configName: "yellow_gy",
                    value: false,
                },
            ],
        })
    },
    pdSplits: () => {
        defaultConf.addSwitch({
            category: "Pre Dev Splits",
            configName: "somehting",
            title: "idk what i want this to be but i want a config thing for it",
            subcategory: " ",
            description: " ",
        })
    },
}

if (modules.splits.splits.toggled) make.splits()
if (modules.splits.subSplits.toggled) make.subSplits()
if (modules.splits.padTimers.toggled) make.padTimers()
if (modules.splits.pdSplits.toggled) make.pdSplits()

const config = new Settings("CoffeeClient/features/splits/config", defaultConf)

export default config.settings
