// register("renderOverlay", () => new Text("&etest!", 400, 230).setShadow(true).draw())

const path = "CoffeeClient/features/misc/config"

export const guiData = JSON.parse(FileLib.read(path, "guiData.json") || "{}")

let screenWidth = Renderer.screen.getWidth()
let screenHeight = Renderer.screen.getHeight()

const sw = w => parseFloat(((w / 100) * screenWidth).toFixed(5))
const rsw = w => parseFloat(((w / screenWidth) * 100).toFixed(5))
const sh = h => parseFloat(((h / 100) * screenHeight).toFixed(5))
const rsh = h => parseFloat(((h / screenHeight) * 100).toFixed(5))

// every overlay for this category is displayed here
register("renderOverlay", () =>
    Object.keys(guis).forEach(key => {
        if (guis[key].toggled) new Text(guis[key].name, guis[key].x, guis[key].y).setScale(guis[key].scale).setShadow(true).draw()
    }))

const defaults = {
    relicUtils: {
        name: "Relic Utils",
        x: 50,
        y: 50,
        width: 5.8,
        height: 2.1,
        scale: 1,
    },
    maskTimer: {
        name: "Spirit &b>&r 20.3s\n&6Phoenix &b>&a Ready\n&cBonzo &b>&c 50.2s",
        x: 40,
        y: 40,
        width: 8.9,
        height: 6,
        scale: 1,
    },
}

// bugs fixed in other version but i want a commit for it

let saved = {}
export const guiHelper = {
    save: () => FileLib.write(path, "guiData.json", JSON.stringify(guiData, null, 4)),
    setEditing: editing => {
        Object.keys(guis).forEach(key => {
            guis[key].editing = editing
            if (editing) {
                saved[key] = {}
                saved[key].name = guis[key].name
                saved[key].toggled = guis[key].toggled
                guis[key].name = defaults[key].name
                guis[key].toggled = true
            } else {
                guis[key].name = saved[key].name
                guis[key].toggled = saved[key].toggled
            }
        })
    },
    change: (name, type, value) => {
        if (type == "x") guiData[name][type] = rsw(value)
        else if (type == "y") guiData[name][type] = rsh(value)
        else guiData[name][type] = value
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
        toggled: true,
        name: data.name,
        x: sw(data.x),
        y: sh(data.y),
        width: sw(data.width),
        height: sh(data.height),
        scale: data.scale,
    }
})

if (defaultAdded) guiHelper.save()

const inBox = (x, y, x1, y1, x2, y2) => x >= x1 && x <= x2 && y >= y1 && y <= y2
const makeRect = (c, x, y, x2, y2) => [c, sw(x), sh(y), (sw(x2) - sw(x)).toFixed(5), (sh(y2) - sh(y)).toFixed(5)]

let last = []
const mouseUpdate = register("step", () => {
    let [x, y] = [Client.getMouseX(), Client.getMouseY()]
    if (last[0] == x && last[1] == y) return
    if (lastDrag > Date.now() - 200) return
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
        }
    })
    if (!found) hovered = null
}).setFps(30).unregister()

let hovered = null
const drawBackgrounds = register("renderOverlay", () => {
    new Text(`Left click to drag\nScroll to change size\nArrow keys to move by pixel\nWASD to move 10 pixels`, sw(50), sh(15)).setShadow(true).setScale(1.5).setAlign("center").draw()
    Object.keys(guis).forEach(key => {
        if (key !== hovered) Renderer.drawRect(0x44000000, guis[key].x - 2, guis[key].y - 2, guis[key].width * guis[key].scale, guis[key].height * guis[key].scale)
        else Renderer.drawRect(0x77000000, guis[key].x - 2, guis[key].y - 2, guis[key].width * guis[key].scale, guis[key].height * guis[key].scale)
    })
}).unregister()

let lastDrag = Date.now()
let initDrag = [0, 0]
const dragged = register("dragged", (dx, dy, x, y, bn) => {
    if (!hovered) return
    if (lastDrag < Date.now() - 100) initDrag = [guis[hovered].x - x, guis[hovered].y - y]
    lastDrag = Date.now()
    guiHelper.change(hovered, "x", x + initDrag[0])
    guiHelper.change(hovered, "y", y + initDrag[1])
}).unregister()

const scrolled = register("scrolled", (x, y, dir) => {
    if (!hovered) return
    let curr = guis[hovered].scale
    guiHelper.change(hovered, "scale", dir == 1 ? curr + 0.05 : curr - 0.05)
}).unregister()

const mouseClicked = register("guiMouseClick", (x, y, bn) => {
    if (!hovered) return
    if (bn == 2) guiHelper.change(hovered, "scale", 1)
}).unregister()

const keyClicked = register("guiKey", (keypressed, keycode) => {
    if (!hovered) return
    const moveMap = {
        200: ["up", "y", -1],
        208: ["down", "y", 1],
        203: ["left", "x", -1],
        205: ["right", "x", 1],
        17: ["w", "y", -10],
        31: ["s", "y", 10],
        30: ["a", "x", -10],
        32: ["d", "x", 10],
    }
    if (moveMap[keycode]) {
        const [name, axis, delta] = moveMap[keycode]
        guiHelper.change(hovered, axis, guis[hovered][axis] + delta)
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

    guiHelper.setEditing(true)
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

    guiHelper.setEditing(false)
})
