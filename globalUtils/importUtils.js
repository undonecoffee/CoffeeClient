

export function importModules(imports){
    let modules = [[],false]
    for (let i = 0; i < imports.length; i++) {
        let str = imports[i].split("/")
        let [fileDestination, fileName] = [str[0], str[1]]
        let fileExists = false
        if (FileLib.exists(`EngineerModules/features/${fileDestination}`, fileName)) {
            modules[0].push(`${fileDestination}/${fileName}`)
            fileExists = true
        } 
        // try to find updated zip folders, if not return
        if (FileLib.exists("./", `${fileName}.zip`))                         {foundZip("/", fileName, fileDestination, fileExists); modules[1] = true}
        if (FileLib.exists("./EngineerModules", `${fileName}.zip`))          {foundZip("/EngineerModules", fileName, fileDestination, fileExists); modules[1] = true}
        if (FileLib.exists("./EngineerModules/features", `${fileName}.zip`)) {foundZip("/EngineerModules/features", fileName, fileDestination, fileExists); modules[1] = true}
    }
    
    return modules
}

function foundZip(FoundIn, fileName, fileDestination, otherFileExists) {
    // Deletes old file if it exists
    if (otherFileExists) {
        ChatLib.chat(`&aremoved old version of &3${fileName}`)
        FileLib.delete(`EngineerModules/features/${fileDestination}`, fileName)}
    FileLib.unzip(`config/ChatTriggers/modules${FoundIn}/${fileName}.zip`, `config/ChatTriggers/modules/EngineerModules/features/${fileDestination}`)
    FileLib.delete(`.${FoundIn}`, `${fileName}.zip`)
    return true
}

export function moduleNumberCheck(currentNumberOfModules) {
    // getting number of old modules
    let pt1 = `{\n    "name": "&cEngineerModules",\n    "creator": "undonecoffee, Legendary_JG",\n    "version": "3.`
    let pt2 = `",\n    "entry": "index.js"\n}`
    let str = FileLib.read("EngineerModules", "metadata.json").split(`"3.`)
    str = str[1].split(`",`)
    let oldModules = parseInt(str[0])
    FileLib.write("EngineerModules", "metadata.json", pt1 + currentNumberOfModules + pt2)
    if (oldModules !== currentNumberOfModules) return true
    return false
}

export function importString(existingModules) {
    let importString = ""
    for (let i = 0; i < existingModules.length; i++) 
        importString += `import "./features/${existingModules[i]}/index"\n` 
    return importString
}

export function CTLoad(time){ChatLib.chat(`\n\n&4&k|||||||&c  Automatically CT loading to load updates  &4&k|||||||\n
&cIf it is ct loading before the first one is done you will need to increase the time at the top of index.js\n\n`)
    setTimeout(() => ChatLib.command("ct load", true), time);
}

function error(error){return `\n
[EngineerError]
no config for ${error}
you need a ${error}Config.js in the ${error} folder for every other config to import into\n\n`} 

let firstround = false

export function importConfigs(imports) {
    let configs = {}
    for (let i = 0; i < imports.length; i++) { // go through every import attempt to check if there is a config
        let str = imports[i].split("/")
        let fileName = str[1] + "Config.js"
        if (!FileLib.exists(`EngineerModules/features/${imports[i]}`, fileName)) continue
        let fileText = FileLib.read(`EngineerModules/features/${imports[i]}`, fileName)
        let matches = fileText.match(/`\s*([\s\S]*?)\s*`/g)?.map(m => m.slice(1, -1).trim()) || []; // get everything between the [` `] as an array
        if (!FileLib.exists(`EngineerModules/features/${str[0]}/config`, `index.js`)) throw new TypeError(error(str[0]))
        if (!configs[str[0]]) configs[str[0]] = []
        firstround = true
        if (configs[str[0]].length === 0) configs[str[0]] = matches.map((v, i) => setText(i, v, true));
        else configs[str[0]] = configs[str[0]].map((item, i) => setText(i, matches[i], false, item));
    }; if (!configs) throw new TypeError(`\n\n?????????\n\n`)

    Object.keys(configs).forEach(v => configString(configs[v], v));
    // Object.keys(configs).forEach(v => ChatLib.chat(configs[v][1]));
}

function setText(i, v, first, item) {
    
    if (first) { if (v == "") return ""
    switch (i) {case 0: return `\n            "${v}"`
        case 2: return `this.setCategoryDescription(${v})`
        case 1: return splitAndFormat(false, v, "\n    "," = new Gui()")
        case 3: return splitAndFormat(false, v, "\n        this.addDependency(",")")
        case 4: return `\n    ${v}`
        case 5: return v}
    }; if (v == "") return item
    switch (i) {case 0: return `${item},\n            "${v}"`;
        case 2: return `${item}\n        this.setCategoryDescription(${v})`
        case 1: return splitAndFormat(item, v, "\n    "," = new Gui()")
        case 3: return splitAndFormat(item, v, "\n        this.addDependency(",")")
        case 4: return `${item}\n    ${v}`
        // case 5: ChatLib.chat(v); return splitAndFormat(item, v, "\n        this.hidePropertyIf(",")")
    }
    return item
}

function splitAndFormat(prefix, v, b, a) { 
    let final = prefix || ""
    v.split("/").forEach(v => final += `${b}${v}${a}`)
    return final
}

function configString(configs, name) {
    if (!FileLib.exists(`EngineerModules/features/${name}/config`, `index.js`)) throw new TypeError(error(name))
    FileLib.write(`EngineerModules/features/${name}/config`, `index.js`, 
`import {
    @ParagraphProperty,
    @ButtonProperty,
    @CheckboxProperty,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    @SliderProperty,
    @NumberProperty,
    @DecimalSliderProperty,
    Color,
} from "../../../globalUtils/Vigilance";

@Vigilant("${name}", "EngineerModules", {
    getCategoryComparator: () => (a, b) => {
        const categories = [${configs[0]}
        ];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Settings {${configs[1]}
    constructor() {
        this.initialize(this);
        ${configs[2]}
        ${configs[3]}
        ${configs[5]}
    }
    ${configs[4]}
}

export default new Settings();

import settings from "./index"
register("command", () => settings.openGUI()).setName("${name}")`
)}