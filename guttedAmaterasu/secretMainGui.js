import { realCategories } from "../index.js"
const colors = {
    bg: 0x33000000,
    base: { bg: 0xFF333333, outline: 0xFF222222 },
    on: { base: { outline: 0xFF333333, bg: 0xFF222222 }, hovered: { outline: 0xFF555555, bg: 0xFF444444 } },
    off: { base: { outline: 0xFFFF4C4C, bg: 0xFF2A0909 }, hovered: { outline: 0xFFFF7878, bg: 0xFF440C0C } },
}

const screenWidth = Renderer.screen.getWidth()
const screenHeight = Renderer.screen.getHeight()

const sw = w => ((w / 100) * screenWidth).toFixed(5)
const sh = h => ((h / 100) * screenHeight).toFixed(5)

const makeRect = (color, x, y, x2, y2) => [color, sw(x), sh(y), (sw(x2) - sw(x)).toFixed(5), (sh(y2) - sh(y)).toFixed(5)]

const inBox = (x, y, x1, y1, x2, y2) => x >= x1 && x <= x2 && y >= y1 && y <= y2

let display = {
    text: {
        categories: [],
        features: [],
    },
    draw: {
        categories: [],
        features: [],
    },
    bounding: {
        categories: {},
        features: {},
    },
}

const findPos = (length, i) => {
    console.log(startX + (i * 15))
}

function makeCategories(i, x) {
    let x2 = x + 13
    return [
        makeRect(colors.base.bg, x, 20, x2, 30),
        // row
        makeRect(colors.base.outline, x, 20, x2, 20.4),
        makeRect(colors.base.outline, x, 29.6, x2, 30),
        // col
        makeRect(colors.base.outline, x, 20, x + 0.2, 30),
        makeRect(colors.base.outline, x2 - 0.2, 20, x2, 30),
    ]
}

function makeGui() {
    let totalWidth = 15 * Object.keys(realCategories).length
    let startX = (100 - totalWidth) / 2
    Object.entries(realCategories).forEach(([k, v], i) => {
        let x = startX + (i * 15)
        display.draw.categories.push([...makeCategories(i, x)])
        display.bounding.categories[k] = [sw(x), sh(20), sw(x + 13), sh(30)]
        display.text.categories.push([`&7${v}`, sw(x + 6.5), sh(23.4), 2])
    })
}
makeGui()

const findCell = (x, y) => Object.entries(display.bounding.categories).find(([k, v]) => inBox(x, y, v[0], v[1], v[2], v[3]))?.[0]

// console.log(JSON.stringify(display.bounding.categories, null, 4))

const mouseUpdate = register("step", () => {
    const [x, y] = [Client.getMouseX(), Client.getMouseY()]
    let currCell = findCell(x, y)
    if (!currCell) return
    console.log(currCell)
    // for (let v of display.active[currCell].bounding) {
    //     if (!inBox(x, y, ...v.base)) continue
    //     console.log("in: " + currCell)
    //     if (!inBox(x, y, ...v.delete)) continue
    //     console.log("inside of delete")
    // }
}).setFps(30).unregister()

const renderMain = register("renderOverlay", () => {
    Renderer.drawRect(0x44000000, 0, 0, screenWidth, screenHeight)
    new Text(`Left click to open`, sw(50), sh(10)).setShadow(true).setScale(1.5).setAlign("center").draw()
    new Text(`Right click to toggle`, sw(50.2), sh(14)).setShadow(true).setScale(1.5).setAlign("center").draw()
    display.draw.categories.forEach(v => v.forEach(r => Renderer.drawRect(...r)))
    display.draw.features.forEach(v => v.forEach(r => Renderer.drawRect(...r)))
    display.text.categories.forEach(v => new Text(v[0], v[1], v[2]).setShadow(true).setScale(v[3]).setAlign("center").draw())
    display.text.features.forEach(v => new Text(v[0], v[1], v[2]).setShadow(true).setScale(v[3]).setAlign("center").draw())
}).unregister()

let changed = {}
let mainGui = new Gui()
let inGui = false
register("command", () => {
    setTimeout(() => inGui = true, 100)
    mainGui.open()
    renderMain.register()
    // guiClicked.register()
    mouseUpdate.register()
}).setName("cc")

register("guiClosed", () => {
    if (!inGui) return
    inGui = false
    if (Object.keys(changed).length > 0) ChatLib.chat("&cYou have unsaved changes!")
    renderMain.unregister()
    // guiClicked.unregister()
    mouseUpdate.unregister()
})

setTimeout(() => ChatLib.command("cc", true), 300)
register("command", () => ChatLib.command("ct load", true)).setName("c")
