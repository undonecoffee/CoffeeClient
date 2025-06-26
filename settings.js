import { moduleName, activeModules } from "./index.js"
import { makeBase, makeCategories, makeFeatures, makeConfig } from "./utils/settingsUtils.js"

const colors = {
    reset: () => {
        // ChatLib.chat("reset!")
    },
    bg: 0x00000000,
    base: {
        bg: 0x66000000,
        lines: 0xFF111111,
    },

    category_feature: {
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

// const inBox = (x, y, bx, by, bw, bh) => {
//     if (x < bx) return false
//     if (x > bx + bw) return false
//     if (y < by) return false
//     if (y > by + bh) return false
//     return true
// }

const inBox = (x, y, x1, y1, x2, y2) => {
    if (x < x1) return false
    if (x > x2) return false
    if (y < y1) return false
    if (y > y2) return false
    return true
}

let display = {
    config: {},
    base: makeBase(colors),
    boundingBoxes: {
        cell: makeCells(),
        categories: [],
        featres: [],
        config: [],
    },
    active: {
        categories: [],
        features: {},
        config: {},
    },
    loadcategories: category => {
        // display.active.categories = makecategories(colors, category, display.config)
    },
    loadfeature: features => {},
}

for (let currModule of activeModules) {
    let [category, file] = currModule.split("/")
    let settings = JSON.parse(FileLib.read(`${moduleName}/features/${currModule}`, "settingsjson"))
    display.config[category] ??= { displayName: settings.module.parentName, active: false, features: [] }
    let feature = { name: file, active: false, displayName: settings.module.name, description: settings.module.description, config: [...settings.config] }
    display.config[category].features.push(feature)
}

// display.config[Object.keys(display.config)[0]].active = true
display.loadCategories(Object.keys(display.config)[0])

// console.log("\n\nconfgi:\n")
// console.log(JSON.stringify(display.config, null, 2))
// console.log("\n\ndisplay:\n")
// console.log(JSON.stringify(display.base, null, 2))

const findCell = (x, y) => {
    let cell
    for (let key in display.boundingBoxes.cell) {
        if (!inBox(x, y, ...display.boudingBoxes.cell[key])) continue
        cell = key
    }
    console.log(cell)
    // if (!cell) return
}

// const guiClicked = register("guiMouseClick", (x, y) => {
//     const [x, y] = [Client.getMouseX(), Client.getMouseY()]
//     let bounding = findCell(x, y)
// }).unregister()

// const mouseUpdate = register("step", () => {
//     const [x, y] = [Client.getMouseX(), Client.getMouseY()]
//     let bounding = findCell(x, y)
// }).setFps(30)

// register("step", () => {
//     display.base = makeBase(colors)
// }).setFps(100)

const renderMain = register("renderOverlay", () => {
    display.base.forEach(r => Renderer.drawRect(...r))
    // display.active.categories.forEach(r => Renderer.drawRect(...r.draw))
    // display.base.forEach(r => Renderer.drawRect(...r))
    // new Text("&cCoffee&7Client", 480, 88).setShadow(true).setScale(1.5).setAlign("center").draw()
}).unregister()

// makeRect(colors.bg, 0, 0, 1, 1)

// new Text(mainText, screenWidth / 2, screenHeight / 5)
//     .setShadow(true).setScale(2).setAlign("center").draw()
//
// const [x, y] = [Client.getMouseX(), Client.getMouseY()]

// buttons.forEach(b => {
//     const [bx, by] = b.position
//     if (inBox(x, y, bx, by, 170, 50)) {
//         colors.reset()
//         b.color = colors.hovered
//     } else {
//         b.color = colors.button
//     }
//     Renderer.drawRect(b.color, bx, by, 170, 50)
//     new Text(b.text, bx + 85, by + 17).setShadow(true).setScale(1.5).setAlign("center").draw()
// })

let changed = {}
let mainGui = new Gui()
let inGui = false
register("command", () => {
    setTimeout(() => inGui = true, 200)
    mainGui.open()
    // renderMain.register()
    guiClicked.register()
}).setName("cc")

register("guiClosed", () => {
    if (!inGui) return
    inGui = false
    if (Object.keys(changed).length > 0) ChatLib.chat("&cYou have unsaved changes!")
    // renderMain.unregister()
    guiClicked.unregister()
})
