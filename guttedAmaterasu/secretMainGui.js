import { modules, save } from "../index"

const colors = {
    bg: 0x33000000,
    base: { base: { bg: 0xFF333333, outline: 0xFF222222 }, hovered: { bg: 0xFF222222, outline: 0xFF111111 } },
    on: { base: { outline: 0xFF009922, bg: 0xFF007722 }, hovered: { outline: 0xFF00BB33, bg: 0xFF009922 } },
    off: { base: { outline: 0xFFAF4C4C, bg: 0xFF5A0909 }, hovered: { outline: 0xFFFF7878, bg: 0xFF440C0C } },
}

let screenWidth = Renderer.screen.getWidth()
let screenHeight = Renderer.screen.getHeight()

const sw = w => ((w / 100) * screenWidth).toFixed(5)
const sh = h => ((h / 100) * screenHeight).toFixed(5)

const makeRect = (c, x, y, x2, y2) => [c, sw(x), sh(y), (sw(x2) - sw(x)).toFixed(5), (sh(y2) - sh(y)).toFixed(5)]
const makeBox = (c, x1, y1, x2, y2) => [
    makeRect(c.bg, x1, y1, x2, y2),
    makeRect(c.outline, x1, y1, x2, y1 + 0.4),
    makeRect(c.outline, x1, y2 - 0.4, x2, y2),
    makeRect(c.outline, x1, y1, x1 + 0.2, y2),
    makeRect(c.outline, x2 - 0.2, y1, x2, y2),
]

let display = {
    categories: { names: {}, bounding: [], cells: [], text: [], draw: [] },
    editGui: { names: {}, bounding: [], text: [], draw: [] },
}

function init() {
    let totalWidth = 15 * Object.keys(modules.categories).length
    let startX = (100 - totalWidth) / 2
    display.features = {}
    Object.keys(modules.categories).forEach((category, i) => {
        let x = startX + (i * 15)
        display.categories.names[category] = i
        display.categories.bounding[i] = [sw(x), sh(20), sw(x + 13), sh(30)]
        let heightNeeded = 37 + (Object.keys(modules[category]).length * 5.3)
        display.categories.cells[i] = [sw(x), sh(20), sw(x + 13), sh(heightNeeded), category]
        display.categories.text[i] = [`&7${modules.categories[category]}`, sw(x + 6.5), sh(23.6), 2]
        display.categories.draw[i] = [...makeBox(colors.base.base, x, 20, x + 13, 30)]

        display.editGui.names[category] = i
        display.editGui.bounding[i] = [sw(x + 1), sh(30), sw(x + 12), sh(36)]
        display.editGui.text[i] = [`&7Edit Gui`, sw(x + 6.5), sh(32), 1.5]
        display.editGui.draw[i] = [...makeBox(colors.base.base, x + 1, 30, x + 12, 36)]

        display.features[category] = { names: {}, bounding: [], text: [], draw: [] }
        Object.keys(modules[category]).forEach((feature, index) => {
            display.features[category].names[feature] = index
            let y = 37 + (index * 5.3)
            display.features[category].bounding.push([sw(x + 1), sh(y), sw(x + 12), sh(y + 5)])
            let name = modules[category][feature].displayName
            display.features[category].text.push([name, sw(x + 6.5), sh(y + 1.7), 1])
            let color = modules[category][feature].toggled ? colors.on.base : colors.off.base
            display.features[category].draw.push([...makeBox(color, x + 1, y, x + 12, y + 5)])
        })
    })
}

const setColor = (draw, color) => {
    draw[0][0] = color.bg
    draw[1][0] = color.outline
    draw[2][0] = color.outline
    draw[3][0] = color.outline
    draw[4][0] = color.outline
}

const reset = () => {
    last.cell = current.cell
    last.category = current.category
    last.feature = current.feature
    last.found = current.found
    Object.values(display.categories.names).forEach(index => setColor(display.categories.draw[index], colors.base.base))
    Object.values(display.editGui.names).forEach(index => setColor(display.editGui.draw[index], colors.base.base))
    Object.keys(display.features).forEach(key => {
        Object.keys(display.features[key].names).forEach(featureName => {
            let index = display.features[key].names[featureName]
            let color = modules[key][featureName].toggled ? colors.on.base : colors.off.base
            setColor(display.features[key].draw[index], color)
        })
    })
}

const inBox = (x, y, x1, y1, x2, y2) => x >= x1 && x <= x2 && y >= y1 && y <= y2
const findCell = (x, y) => display.categories.cells.find(v => inBox(x, y, v[0], v[1], v[2], v[3]))?.[4]

const guiClicked = register("guiMouseClick", (x, y, mouse) => {
    const [x, y] = [Client.getMouseX(), Client.getMouseY()]
    let cell = findCell(x, y)
    if (!cell) return
    let curr

    let bounding_editGui = display.editGui.bounding[display.categories.names[cell]]
    if (inBox(x, y, ...bounding_editGui)) curr = "editGui"

    Object.keys(display.features[cell].names).forEach((key, i) => {
        let bounding = display.features[cell].bounding[i]
        if (inBox(x, y, ...bounding)) curr = key
    })

    if (curr == "editGui") ChatLib.command(`${cell}EditGui`, true)
    else if (curr) mouse == 0 ? ChatLib.command(`cc${cell}`, true) : toggleFeature(cell, curr)
    else ChatLib.command(`cc${cell}`, true)
}).unregister()

function toggleFeature(category, feature) {
    let index = display.features[category].names[feature]
    let toggled = modules[category][feature].toggled
    let color = toggled ? colors.off.hovered : colors.on.hovered
    setColor(display.features[category].draw[index], color)
    modules[category][feature].toggled = !toggled
    changed.includes(feature) ? changed.splice(changed.indexOf(feature), 1) : changed.push(feature)
    // display.features[current.cell].draw[index][0][0] = colors.off.base.bg
    // setColor(display.features[current.cell].draw[index], color)
    // } else {
    //     let index = display[current.category].names[current.cell]
    //     setColor(display[current.category].draw[index], colors.base.hovered)
}

let last = { cell: null, category: null, feature: null, found: false }
let current = { cell: null, category: null, feature: null, found: false }

const mouseUpdate = register("step", () => {
    const [x, y] = [Client.getMouseX(), Client.getMouseY()]
    let cell = findCell(x, y)
    current.cell = cell
    current.found = false
    if (!cell) return last.cell && reset()

    let bounding_category = display.categories.bounding[display.categories.names[cell]]
    if (inBox(x, y, ...bounding_category)) {
        current.category = "categories"
        current.feature = null
        current.found = true
    }

    let bounding_editGui = display.editGui.bounding[display.categories.names[cell]]
    if (inBox(x, y, ...bounding_editGui)) {
        current.category = "editGui"
        current.feature = null
        current.found = true
    }

    Object.keys(display.features[cell].names).forEach((key, i) => {
        let bounding = display.features[cell].bounding[i]
        if (inBox(x, y, ...bounding)) {
            current.category = "feature"
            current.feature = key
            current.found = true
        }
    })
    if (
        last.cell == current.cell &&
        last.category == current.category &&
        last.feature == current.feature
    ) {
        if (!current.found) return reset()
        return
    } else {
        reset()
        if (!last.category) return
        if (current.category == "feature") {
            if (!current.feature) return
            if (!modules[current.cell][current.feature]) return
            let index = display.features[current.cell].names[current.feature]
            let color = modules[current.cell][current.feature].toggled ? colors.on.hovered : colors.off.hovered
            setColor(display.features[current.cell].draw[index], color)
        } else {
            let index = display[current.category].names[current.cell]
            setColor(display[current.category].draw[index], colors.base.hovered)
        }
    }
}).setFps(30).unregister()

const renderMain = register("renderOverlay", () => {
    Renderer.drawRect(0x44000000, 0, 0, screenWidth, screenHeight)
    new Text(`Left click to open`, sw(50), sh(10)).setShadow(true).setScale(1.5).setAlign("center").draw()
    new Text(`Right click to toggle`, sw(50.2), sh(14)).setShadow(true).setScale(1.5).setAlign("center").draw()
    ;[display.categories, display.editGui, ...Object.values(display.features)].forEach(obj => {
        obj.draw.forEach(v => v.forEach(r => Renderer.drawRect(...r)))
        obj.text.forEach(v => new Text(v[0], v[1], v[2]).setShadow(true).setScale(v[3]).setAlign("center").draw())
    })
}).unregister()

let changed = []
let mainGui = new Gui()
let inGui = false
register("command", () => {
    screenWidth = Renderer.screen.getWidth()
    screenHeight = Renderer.screen.getHeight()
    init()
    setTimeout(() => inGui = true, 100)
    mainGui.open()
    renderMain.register()
    guiClicked.register()
    mouseUpdate.register()
}).setName("cc")

register("guiClosed", () => {
    if (!inGui) return
    inGui = false
    if (changed.length > 0) {
        changedAnimation()
        save(modules)
    }
    renderMain.unregister()
    guiClicked.unregister()
    mouseUpdate.unregister()
})

function changedAnimation() {
    changedOverlay.register()
    World.playSound("note.pling", 1, 0.7)
    setTimeout(() => {
        changedOverlay.unregister()
    }, 1800)
}

const changedOverlay = register("renderOverlay", () => {
    new Text("&cUnsaved Changed!", sw(50), sh(55)).setScale(3).setShadow(true).setAlign("center").draw()
    new Text("&eCT Load to save them!", sw(50), sh(61)).setScale(2).setShadow(true).setAlign("center").draw()
}).unregister()
