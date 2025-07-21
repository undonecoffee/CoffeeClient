setTimeout(() => ChatLib.command("cctermsinfo", true), 700)
register("command", () => ChatLib.command("ct load", true)).setName("c")
register("command", () => ChatLib.command("ct load", true)).setName("ctl")
register("command", () => ChatLib.command("ct load", true)).setName("ctd")
export const formattedModules = {
    categories: {
        misc: "Misc",
        termsInfo: "Terms Info",
        splits: "Splits",
        autoP3: "Auto P3",
        autoClear: "Auto Clear",
        autoBoss: "Auto Boss",
    },
    misc: {
        autoBless: "Auto Bless",
        autoRequeue: "Auto Requeue",
        chatCleaner: "Chat Cleaner",
        maskTimer: "Mask Timer",
        mobHighlight: "Mob Highlight",
        relicUtils: "Relic Utils",
        sheepHider: "Sheep Hider",
    },
    termsInfo: {
        movementTimer: "Movement Timer",
        positionalAlerts: "Positional Alerts",
        sectionTimes: "Section Times",
        termInfo: "Term Info",
        termTimes: "Term Times",
    },
    splits: {
        splits: "Splits",
        subSplits: "Sub Splits",
        padTimers: "Pad Timers",
        pdSplits: "PreDev Splits",
    },
    autoClear: {
        autoMap: "Auto Map",
        auto0s: "Auto 0s",
        autoCamp: "Auto Camp",
        autoPuzzles: "Auto Puzzles",
        autoRoutes: "Auto Routes",
    },
    autoBoss: {
        autoTerms: "Auto Terms",
        p3routes: "P3 Routes",
        preTerms: "Pre Terms",
        postTerms: "Post Terms",
        p5: "P5",
    },
}
