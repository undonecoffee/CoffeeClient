// import "./guttedAmaterasu/secretMainGui.js"
import "./features/misc/config/index.js"
import { formattedModules } from "./importUtils.js"

let rawModules = FileLib.read("CoffeeClient", "imports.js")

let realModules = {}

rawModules.trim().split("\n").forEach(line => {
    let match = line.match(/features\/([^/]+)\/([^/]+)\//)
    if (match) (realModules[match[1]] ??= []).push(match[2])
})

let filteredAndFormattedModules = []
for (let category in formattedModules) {
    if (category in realModules) {
        console.log(formattedModules.categories[category])
        //
    }
}

export function save(modules) {
    let rawModules = []
    for (let category in modules) {
        for (let feature of modules[category]) {
            rawModules.push(`import "./features/${category}/${feature}/index"`)
            //
        }
    }
    FileLib.write("CoffeeClient", "imports.js", rawModules.join("\n"))
}
