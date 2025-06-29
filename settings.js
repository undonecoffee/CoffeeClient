import { moduleName, activeModules } from "./index.js"
import { makeBase, makeCategories, makeFeatures, makeConfig, makeCells } from "./utils/settingsUtils.js"
// import { animation } from "./utils/settingsUtils.js"

const colors = {
    reset: () => {
        // ChatLib.chat("reset!")
    },
    bg: 0x00000000,
    base: {
        bg: 0x66000000,
        lines: 0xFF111111,
    },

    category: {
        base: { outline: 0xFF333333, bg: 0xFF222222 },
        hovered: { outline: 0xFF555555, bg: 0xFF444444 },
    },
    feature: {
        on: {
            base: { outline: 0xCC009900, bg: 0xCC00BB00 },
            hovered: { outline: 0xCC00BB00, bg: 0xCC009900 },
        },
        off: {
            base: { outline: 0xCC990000, bg: 0xCCBB0000 },
            hovered: { outline: 0xCCBB0000, bg: 0xCC990000 },
        },
    },
    hovered: 0xAA000000,
    button: 0x88000000,
}

let display = {
    config: {},
    base: makeBase(colors),
    active: {
        cells: makeCells(),
        categories: {
            bounding: [],
            draw: [],
            text: [],
        },
        features: {
            bounding: [],
            draw: [],
            text: [],
        },
        config: {
            bounding: [],
            draw: [],
            text: [],
        },
    },
    // loads bounding only once because it never changes
    categories: {
        init: () => {
            display.active.categories = makeCategories.init(colors, display.config)
            // console.log(display.active.categories.draw[0])
        },
        load: category => {
            // let { active, bounding } = makeCategories(colors, category, display.config)
            // display.active.categories = active
            // display.boundingBoxes.categories = bounding
        },
        hover: i => {
            // hover logic here
        },
        click: i => {
            // click logic here
        },
    },
    features: {
        load: category => {
            display.active.features = makeFeatures.load(category)
        },
    },
}

for (let currModule of activeModules) {
    let [category, file] = currModule.split("/")
    let settings = JSON.parse(FileLib.read(`${moduleName}/features/${currModule}`, "settings.json"))
    display.config[category] ??= { displayName: settings.module.parentDisplayName, active: false, features: [] }
    let feature = { name: file, active: false, displayName: settings.module.name, description: settings.module.description, config: [...settings.config] }
    display.config[category].features.push(feature)
}

// display.config[Object.keys(display.config)[0]].active = true

display.categories.init()
// console.log("\n\nconfgi:\n")
// console.log(JSON.stringify(display.config, null, 2))
console.log("\n\ndisplay:\n")
console.log(JSON.stringify(display.active, null, 2))
// console.log(JSON.stringify(display.config, null, 2))

const inBox = (x, y, x1, y1, x2, y2) => {
    if (x < x1) return false
    if (x > x2) return false
    if (y < y1) return false
    if (y > y2) return false
    return true
}

// const findCell = (x, y) => Object.entries(display.active.cells).find(([, box]) => inBox(x, y, ...box))?.[0]

// let currCell = undefined
// const findCell = (x, y) =>
//     Object.entries(display.active.cells).forEach(([k, v], i) => {
//         if (inBox(x, y, v[0], v[1], v[2], v[3])) return currCell = k
//     })

let currCell
const findCell = (x, y) => Object.entries(display.active.cells).find(([k, v]) => inBox(x, y, v[0], v[1], v[2], v[3]))?.[0]

// if (inBox(x, y, ...entries[i][1])) return entries[i][0]
// const guiClicked = register("guiMouseClick", (x, y) => {
//     const [x, y] = [Client.getMouseX(), Client.getMouseY()]
//     let bounding = findCells(x, y)
// }).unregister()

const mouseUpdate = register("step", () => {
    const [x, y] = [Client.getMouseX(), Client.getMouseY()]
    let currCell = findCell(x, y)
    if (!currCell) return
    // console.log(currCell)
    display.active[currCell].bounding.forEach(v => {
        // console.log("found from: " + v)
    })
}).setFps(30).unregister()

register("step", () => {
    display.base = makeBase(colors)
    display.categories.init()
}).setFps(100)

const renderMain = register("renderOverlay", () => {
    display.base.forEach(r => Renderer.drawRect(...r))
    new Text("&cCoffee&7Client", 480, 88).setShadow(true).setScale(1.5).setAlign("center").draw()
    ;["categories"].forEach(key => display.active[key].draw.forEach(v => v.forEach(r => Renderer.drawRect(...r)))) //
     // , "features", "config"
    // , "features", "config"
    ;["categories"].forEach(key => display.active[key].text.forEach(v => new Text(...v).setShadow(true).setScale(1).setAlign("center").draw()))
    //     // display.active.categories.forEach(r => Renderer.drawRect(...r))
    // new Text("&cCoffee&7Client", 480, 88).setShadow(true).setScale(1.5).setAlign("center").draw()
    // display.active.categories.forEach(r => Renderer.drawRect(...r.draw))
    // display.base.forEach(r => Renderer.drawRect(...r))
    // new Text("&cCoffee&7Client", 480, 88).setShadow(true).setScale(1.5).setAlign("center").draw()
}).unregister()

// makeRect(colors.bg, 0, 0, 1, 1)

// new Text(mainText, screenWidth / 2, screenHeight / 5)
//     .setShadow(true).setScale(2).setAlign("center").draw()
//
// const [x, y] = [Client.getMouseX(), Client.getMouseY()]

let changed = {}
let mainGui = new Gui()
let inGui = false
register("command", () => {
    setTimeout(() => inGui = true, 200)
    mainGui.open()
    renderMain.register()
    // guiClicked.register()
    mouseUpdate.register()
    // animation()
}).setName("cc")

register("guiClosed", () => {
    if (!inGui) return
    inGui = false
    if (Object.keys(changed).length > 0) ChatLib.chat("&cYou have unsaved changes!")
    renderMain.unregister()
    // guiClicked.unregister()
    mouseUpdate.unregister()
})
