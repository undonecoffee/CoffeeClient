import { modulesList } from "./utils/modulesList.js"

export const moduleName = "CoffeeClient-private"

export const activeModules = modulesList.filter(str => {
    const [cat, file] = str.split("/")
    if (!FileLib.exists(`${moduleName}/features/${cat}`, file)) return false
    if (!FileLib.exists(`${moduleName}/features/${str}`, "settings.json")) return false
    return JSON.parse(FileLib.read(`${moduleName}/features/${str}`, "settings.json")).enabled
})

FileLib.write(`${moduleName}`, "imports.js", activeModules.map(str => `import "./features/${str}/index.js";`).join("\n"))

import "./imports"
import "./settings.js"
