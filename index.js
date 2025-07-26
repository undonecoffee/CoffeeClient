const formattedModules = {
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

let realModules = { categories: [] }

FileLib.read("CoffeeClient", "imports.js").trim().split("\n").forEach(line => {
    let match = line.match(/^(\/\/ )?import ".\/features\/(\w+)\/(\w+)\/index"/)
    if (!match) return
    let toggled = match[1] ? false : true
    let category = match[2]
    let feature = match[3]

    if (feature == "config") {
        if (toggled) return realModules.categories.push(category)
    }
    if (!realModules.categories.includes(category)) return

    realModules[category] ??= {}
    realModules[category][feature] = toggled
})

function filterAndFormat() {
    let ffm = { categories: {} }
    for (let category in formattedModules.categories) {
        if (realModules.categories.includes(category)) {
            ffm.categories[category] = formattedModules.categories[category]
            ffm[category] = {}
            for (let feature in formattedModules[category]) {
                if (!ffm[category]) continue
                // console.log()
                ffm[category][feature] = {
                    displayName: formattedModules[category][feature],
                    toggled: realModules[category] ? realModules[category][feature] : false,
                }
            }
        }
    }
    return ffm
}

export const modules = filterAndFormat()
// console.log(JSON.stringify(modules, null, 4))
// console.log(JSON.stringify(realModules, null, 4))
// console.log(JSON.stringify(formattedModules, null, 4))

export function save(modules) {
    let rawText = []
    for (let category in modules) {
        if (category == "categories") {
            rawText.push(`// configs:`)
            for (let categoryConfigKey in formattedModules.categories) {
                if (modules.categories.hasOwnProperty(categoryConfigKey)) {
                    rawText.push(`import "./features/${categoryConfigKey}/config/index"`)
                    //
                } else {
                    rawText.push(`// import "./features/${categoryConfigKey}/config/index"`)
                    //
                }
                // console.log(categoryConfig)
            }
            rawText.push(``)
            continue
        }
        rawText.push(`// ${category}:`)
        for (let feature in modules[category]) {
            rawText.push(
                modules[category][feature].toggled ?
                    `import "./features/${category}/${feature}/index"` :
                    `// import "./features/${category}/${feature}/index"`,
            )
        }
        // rawText.push(``)
    }
    // console.log(rawText.join("\n"))
    FileLib.write("CoffeeClient", "imports.js", rawText.join("\n"))
}
save(modules)

import "./guttedAmaterasu/secretMainGui.js"
import "./imports.js"
