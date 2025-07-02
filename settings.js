import { moduleName, activeModules } from "./index.js"
import { makeConfig, makeBase, category, makeCells } from "./utils/settingsUtils.js"
import { colors, inBox } from "./utils/settingsUtils2.js"

let display = {
    config: makeConfig(moduleName, activeModules),
    base: makeBase(colors),
    active: {
        cells: makeCells(),
        categories: { bounding: [], draw: [], text: [] },
        features: { bounding: [], draw: [], text: [] },
        config: { bounding: [], draw: [], text: [] },
    },
    categories: {
        lastHovered: null,
        init: () => display.active.categories = category.init(colors, display.config),
        resetColors: () => display.active.categories = category.resetColors(colors, display.active.categories),
        hover: (i, type) => {
            display.categories.resetColors()
        },
        click: (i, type) => {},
    },
}

display.categories.init()

const findCell = (x, y) => Object.entries(display.active.cells).find(([k, v]) => inBox(x, y, v[0], v[1], v[2], v[3]))?.[0]

const guiClicked = register("guiMouseClick", (x, y) => {
    const [x, y] = [Client.getMouseX(), Client.getMouseY()]
    let bounding = findCell(x, y)
}).unregister()

const mouseUpdate = register("step", () => {
    const [x, y] = [Client.getMouseX(), Client.getMouseY()]
    let currCell = findCell(x, y)
    if (!currCell) return
    for (let v of display.active[currCell].bounding) {
        if (!inBox(x, y, ...v.base)) continue
        console.log("in: " + currCell)
        if (!inBox(x, y, ...v.delete)) continue
        console.log("inside of delete")
    }
    display.active[currCell].bounding.forEach((v, i) => {
    })
}).setFps(30).unregister()

register("step", () => {
    display.base = makeBase(colors)
    display.categories.init()
}).setFps(100)

const renderMain = register("renderOverlay", () => {
    for (let r of display.base.draw) Renderer.drawRect(...r)
    for (let r of display.base.text) new Text(r[0], r[1], r[2]).setShadow(true).setScale(r[3]).setAlign("center").draw()

    let places = ["categories", "features", "config"]

    for (let key of places) {
        for (let v of display.active[key].draw) for (let r of v) for (let x of r) Renderer.drawRect(...x)
        for (let v of display.active[key].text) for (let r of v) new Text(...r).setShadow(true).setScale(1).setAlign("center").draw()
    }
    //     // display.active.categories.forEach(r => Renderer.drawRect(...r))
    // new Text("&cCoffee&7Client", 480, 88).setShadow(true).setScale(1.5).setAlign("center").draw()
    // display.active.categories.forEach(r => Renderer.drawRect(...r.draw))
    // display.base.forEach(r => Renderer.drawRect(...r))
    // new Text("&cCoffee&7Client", 480, 88).setShadow(true).setScale(1.5).setAlign("center").draw()
}).unregister()

let changed = {}
let mainGui = new Gui()
let inGui = false
register("command", () => {
    setTimeout(() => inGui = true, 200)
    mainGui.open()
    renderMain.register()
    guiClicked.register()
    mouseUpdate.register()
}).setName("cc")

register("guiClosed", () => {
    if (!inGui) return
    inGui = false
    if (Object.keys(changed).length > 0) ChatLib.chat("&cYou have unsaved changes!")
    renderMain.unregister()
    guiClicked.unregister()
    mouseUpdate.unregister()
})
