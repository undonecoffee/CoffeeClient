import { modules } from "../../../index"
import Settings from "../../../guttedAmaterasu/amaterasu/Settings"
import DefaultConfig from "../../../guttedAmaterasu/amaterasu/DefaultConfig"

const defaultConf = new DefaultConfig("CoffeeClient/features/misc/config", "settingsData.json")

const make = {
    autoBless: () => {
        defaultConf.addSwitch({
            category: "Auto Bless",
            configName: "sendOn_leave",
            title: "Send On Party Leave",
            description: "sends bless chat when someone leaves the party",
        })
        defaultConf.addSwitch({
            category: "Auto Bless",
            configName: "sendOn_kick",
            title: "Send On Party Kick",
            description: "sends bless chat when someone gets kicked form the party",
        })
        defaultConf.addSwitch({
            category: "Auto Bless",
            configName: "echo",
            title: "Echo Blesses",
            description: "Auto send bless when anyone else does",
        })
    },
    autoRequeue: () => {
        defaultConf.addTextParagraph({
            category: "Auto Requeue",
            configName: "textParagraph",
            title: "Change requeue keybind in the minecraft settings for it to work",
            description: "Pressing it will queue/unqueue you into the last dungeon you entered when its off cooldown",
            centered: true,
        })
        defaultConf.addSwitch({
            category: "Auto Requeue",
            configName: "requeueDisplay",
            title: "Requeue Dispaly",
            description: "Shows warp cooldown and if you have a queued requeue",
        })
        defaultConf.addSlider({
            category: "Auto Requeue",
            configName: "requeueTime",
            title: "Requeue Time",
            description: "Time before the run ends when it will attempt to requeue.  -2.0s is recommended",
            options: [-3.2, 0],
            value: -2500,
        })
    },
    chatCleaner: () => {
        defaultConf.addTextParagraph({
            category: "Chat Cleaner",
            configName: "textParagraph",
            title: "/chatcleaner to toggle specific chats",
            description: "",
            centered: true,
        })
        defaultConf.addSwitch({
            category: "Chat Cleaner",
            configName: "clean_join",
            title: "Clean Join messages",
            description: "Makes friend/guild join/leave messages look nicer",
            subcategory: "Clean",
        })
        defaultConf.addSwitch({
            category: "Chat Cleaner",
            configName: "clean_partyChat",
            title: "Clean Party Chat",
            description: "Makes party chat messages look nicer",
            subcategory: "Clean",
        })
        defaultConf.addSwitch({
            category: "Chat Cleaner",
            configName: "hide_ability",
            title: "Hide Ability Messages",
            description: "Hides ability messages like:\n&cWIP",
            subcategory: "Misc",
        })
        defaultConf.addSwitch({
            category: "Chat Cleaner",
            configName: "hide_error",
            title: "Hide Error Messages",
            description: "Hides random error messages like:\n&cWIP",
            subcategory: "Misc",
        })
        defaultConf.addSwitch({
            category: "Chat Cleaner",
            configName: "hide_boss",
            title: "Hide Boss",
            description: "Hides the messages that start with [BOSS]",
            subcategory: "Dungeons",
        })
        defaultConf.addSwitch({
            category: "Chat Cleaner",
            configName: "hide_blessings",
            title: "Hide Blessings",
            description: "Hides the messages when blessings get picked up",
            subcategory: "Dungeons",
        })
    },
    maskTimer: () => {
        defaultConf.addSwitch({
            category: "Mask Timer",
            configName: "onlyP3",
            title: "Only In P3",
            description: "Only shows mask timer in P3",
        })
    },
    mobHighlight: () => {
        defaultConf.addSwitch({
            category: "Mob Highlight",
            configName: "inBoss",
            title: "In Boss",
            description: "Shows mob highlight in boss too",
        })
        defaultConf.addSwitch({
            category: "Mob Highlight",
            configName: "highlightWither",
            title: "Highlight Withers",
            description: "Highlights all wither bosses",
        })
    },
    relicUtils: () => {
        defaultConf.addSwitch({
            category: "Relic Utils",
            configName: "spawnTimer",
            title: "Spawn Timer",
            description: "Shows spawn timer for relics",
        })
        defaultConf.addSwitch({
            category: "Relic Utils",
            configName: "matchColors",
            title: "Match Colors",
            description: "Match colors with the relic you are getting",
        })
        defaultConf.addSwitch({
            category: "Relic Utils",
            configName: "sendInChat",
            title: "Send Times In Chat",
            description: "Sends all relic times in chat\n(you can see the times with subSplits too)",
        })
    },
    sheepHider: () => {
        defaultConf.addSlider({
            category: "Sheep Hider",
            configName: "hideDistance",
            title: "Distance",
            description: "Distance to hide sheep",
            options: [0, 40],
            value: 3,
        })
    },
}

if (modules.misc.autoBless.toggled) make.autoBless()
if (modules.misc.autoRequeue.toggled) make.autoRequeue()
if (modules.misc.chatCleaner.toggled) make.chatCleaner()
if (modules.misc.maskTimer.toggled) make.maskTimer()
if (modules.misc.mobHighlight.toggled) make.mobHighlight()
if (modules.misc.sheepHider.toggled) make.sheepHider()

const config = new Settings(" ", defaultConf)

export default config.settings
