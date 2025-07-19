// register("renderOverlay", () => new Text("&etest!", 400, 230).setShadow(true).draw())

const path = "CoffeeClient/features/misc/config"

export const guiData = JSON.parse(FileLib.read(path, "guiData.json") || "{}")

let screenWidth = Renderer.screen.getWidth()
let screenHeight = Renderer.screen.getHeight()

const sw = w => parseFloat(((w / 100) * screenWidth).toFixed(5))
const sh = h => parseFloat(((h / 100) * screenHeight).toFixed(5))

const defaults = {
    relicUtils: {
        name: "Relic Utils",
        x: sw(50),
        y: sh(50),
        width: sw(5.8),
        height: sw(1.4),
        scale: 1,
    },
    maskTimer: {
        name: "Spirit &b>&r 20.3s\n&6Phoenix &b>&a Ready\n&cBonzo &b>&c 50.2s",
        x: sw(40),
        y: sh(40),
        width: sw(9),
        height: sw(3.6),
        scale: 1,
    },
}

export const guiHelper = {
    save: () => FileLib.write(path, "guiData.json", JSON.stringify(guiData, null, 4)),
    change: (name, type, value) => {
        guiData[name][type] = value
        guis[name][type] = value
    },
}

export const guis = {}

let defaultAdded = false
Object.keys(defaults).forEach(key => {
    let data = guiData[key]
    if (!data || Object.keys(data).length === 0) {
        data = defaults[key]
        guiData[key] = data
        defaultAdded = true
    }
    guis[key] = {
        editing: false,
        name: data.name,
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height,
        scale: data.scale,
        gui: register("renderOverlay", () => new Text(guis[key].name, guis[key].x, guis[key].y).setScale(guis[key].scale).setShadow(true).draw()),
    }
})

if (defaultAdded) guiHelper.save()

const inBox = (x, y, x1, y1, x2, y2) => x >= x1 && x <= x2 && y >= y1 && y <= y2
const makeRect = (c, x, y, x2, y2) => [c, sw(x), sh(y), (sw(x2) - sw(x)).toFixed(5), (sh(y2) - sh(y)).toFixed(5)]

let last = []
const mouseUpdate = register("step", () => {
    let [x, y] = [Client.getMouseX(), Client.getMouseY()]
    if (last[0] == x && last[1] == y) return
    last = [x, y]
    let found = false
    Object.keys(guis).forEach(key => {
        let x1 = guis[key].x - 2
        let y1 = guis[key].y - 2
        let x2 = x1 + guis[key].width
        let y2 = y1 + guis[key].height
        if (inBox(x, y, x1, y1, x2, y2)) {
            found = true
            hovered = key
            //
        }
    })
    if (!found && lastDrag < Date.now() - 200) hovered = null
}).setFps(30).unregister()

let hovered = null
const drawBackgrounds = register("renderOverlay", () => {
    new Text(`Left click to drag\nScroll to change size\nArrow keys to move by pixel\nWASD to move 10 pixels`, sw(50), sh(15)).setShadow(true).setScale(1.5).setAlign("center").draw()
    Object.keys(guis).forEach(key => {
        if (key !== hovered) Renderer.drawRect(0x44000000, guis[key].x - 2, guis[key].y - 2, guis[key].width, guis[key].height)
        else Renderer.drawRect(0x77000000, guis[key].x - 2, guis[key].y - 2, guis[key].width, guis[key].height)
        // console.log(`${key}:\n    color:${0x11111111}\n    x:      ${guis[key].x}\n    y:      ${guis[key].y}\n    width:  ${guis[key].width}\n    height: ${guis[key].height}`)
    })
}).unregister()

let lastDrag = Date.now()
const dragged = register("dragged", (dx, dy, x, y, bn) => {
    if (!hovered) return
    lastDrag = Date.now()
    guiHelper.change(hovered, "x", x)
    guiHelper.change(hovered, "y", y)
}).unregister()

const scrolled = register("scrolled", (x, y, dir) => {
    if (!hovered) return
}).unregister()

const mouseClicked = register("guiMouseClick", (x, y, bn) => {
    if (!hovered) return
}).unregister()

const keyClicked = register("guiKey", (keypressed, keycode) => {
    if (!hovered) return
    switch (keycode) {
        case 200:
        case 208:
        case 203:
        case 205:
            return
    }
}).unregister()

let editGuiGui = new Gui()
let inGui = false
register("command", () => {
    screenWidth = Renderer.screen.getWidth()
    screenHeight = Renderer.screen.getHeight()
    setTimeout(() => inGui = true, 100)
    editGuiGui.open()

    drawBackgrounds.register()
    mouseUpdate.register()
    dragged.register()
    scrolled.register()
    mouseClicked.register()
    keyClicked.register()

    Object.keys(guis).forEach(key => {
        guis[key].gui.register()
    })
}).setName("misceditGui")

register("guiClosed", () => {
    if (!inGui) return
    inGui = false
    guiHelper.save()

    drawBackgrounds.unregister()
    mouseUpdate.unregister()
    dragged.unregister()
    scrolled.unregister()
    mouseClicked.unregister()
    keyClicked.unregister()
})
