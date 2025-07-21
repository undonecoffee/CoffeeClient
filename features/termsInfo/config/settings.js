import { modules } from "../../../index.js"
import Settings from "../../../guttedAmaterasu/amaterasu/Settings"
import DefaultConfig from "../../../guttedAmaterasu/amaterasu/DefaultConfig"

const defaultConf = new DefaultConfig("CoffeeClient/features/termsInfo/config", "settingsData.json")
    .addSwitch({
        category: "Term Info",
        configName: "simpleToggle",
        title: "Simple",
        description: "Shows a simple display",
        subcategory: "Simple",
    })

const make = {
    movementTimer: () => {
        defaultConf.addTextParagraph({
            category: "Movement Time",
            configName: "textParagraph",
            title: "Yeah ill fix this when either i need it or ive done everything else",
            description: "just need this here for the category",
            centered: true,
            subcategory: " ",
        })
    },
    positionalAlerts: () => {
        defaultConf.addTextParagraph({
            category: "Pos Alerts",
            configName: "textParagraph",
            title: "Because its too complex, all of the options are in the command",
            description: "/posalerts or /pa to start\nThe default options should be more than enough for everyone",
            centered: true,
            subcategory: " ",
        })
    },
    sectionTimes: () => {
        defaultConf.addSlider({
            category: "Section Times",
            configName: "time",
            title: "Time Shown",
            description: "Time in seconds the section is shown on screen",
            subcategory: " ",
            options: [0.5, 3],
            value: 1.5,
        })
    },
    termInfo: () => {
        defaultConf.addMultiCheckbox({
            category: "Term Info",
            subcategory: "Simple",
            configName: "simple",
            title: "Simple Display Options",
            description: "Gives options on how the simple display will look",
            placeHolder: "Click", // This is the text that will be display on the dropdown component
            shouldShow(data) {
                return data.simpleToggle
            },
            options: [
                {
                    title: "Show Gate",
                    configName: "gate",
                    value: false,
                },
                {
                    title: "show total",
                    configName: "total",
                    value: false,
                },
            ],
        })
    },
    termTimes: () => {
        defaultConf.addTextParagraph({
            category: "Term Times",
            configName: "textParagraph",
            title: "Term times will look like this by default",
            description: "&3Numbers &7took &e2.61s &7| &cFC: &e 410 &7| &6avg: &e170 &7| &abest: &e120",
            centered: true,
            subcategory: " ",
        })
        defaultConf.addMultiCheckbox({
            category: "Term Times",
            subcategory: " ",
            configName: "termTimes",
            title: "Term Times Options",
            description: "Adds each selected option to the term times message",
            placeHolder: "Click", // This is the text that will be display on the dropdown component
            options: [
                {
                    title: "First Click",
                    configName: "firstClick",
                    value: true,
                },
                {
                    title: "Average Click",
                    configName: "averageClick",
                    value: true,
                },
                {
                    title: "Best Click",
                    configName: "bestClick",
                    value: true,
                },
                {
                    title: "Number Of Clicks",
                    configName: "numberOfClicks",
                    value: false,
                },
            ],
        })
    },
}

if (modules.termsInfo.movementTimer.toggled) make.movementTimer()
if (modules.termsInfo.positionalAlerts.toggled) make.positionalAlerts()
if (modules.termsInfo.sectionTimes.toggled) make.sectionTimes()
if (modules.termsInfo.termInfo.toggled) make.termInfo()
if (modules.termsInfo.termTimes.toggled) make.termTimes()

const config = new Settings("   ", defaultConf)

export default () => config.settings
