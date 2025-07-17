// register("renderOverlay", () => new Text("&etest!", 400, 230).setShadow(true).draw())

const path = "CoffeeClient/features/misc/config"

export const guiData = JSON.parse(FileLib.read(path, "guiData.json") || "{}")

let screenWidth = Renderer.screen.getWidth()
let screenHeight = Renderer.screen.getHeight()

const sw = w => ((w / 100) * screenWidth).toFixed(5)
const sh = h => ((h / 100) * screenHeight).toFixed(5)

const defaults = {
    relicUtils: {
        name: "Relic Utils",
        x: sw(50),
        y: sh(50),
        width: sw(5),
        height: sw(2),
        scale: 1,
    },
    maskTimer: {
        name: "Spirit &b>&r 20.3s\n&6Phoenix &b>&a Ready\n&cBonzo &b>&c 50.2s",
        x: sw(40),
        y: sh(40),
        width: sw(10),
        height: sw(10),
        scale: 1,
    },
}

export const guiHelper = { save: () => FileLib.write(path, "guiData.json", JSON.stringify(guiData, null, 4)) }

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

const mouseUpdate = register("step", () => {
    const [x, y] = [Client.getMouseX(), Client.getMouseY()]
}).setFps(30).unregister()

const drawBackgrounds = register("renderOverlay", () => {
    Object.keys(guis).forEach(key => {
        console.log(`${key}:\n    color:${0x11111111}\n    x:${guis[key].x}\n    y:${guis[key].y}\n    width:${guis[key].width}\n    height:${guis[key].height}`)
        // Renderer.drawRect(0x11111111, guis[key].x, guis[key].y, guis[key].guiWidth, guis[key].guiHeight)
    })
}).unregister()

let editGuiGui = new Gui()
let inGui = false
register("command", () => {
    screenWidth = Renderer.screen.getWidth()
    screenHeight = Renderer.screen.getHeight()
    setTimeout(() => inGui = true, 100)
    editGuiGui.open()
    mouseUpdate.register()
    drawBackgrounds.register()

    Object.keys(guis).forEach(key => {
        guis[key].gui.register()
    })
}).setName("misceditGui")

register("guiClosed", () => {
    if (!inGui) return
    inGui = false
    mouseUpdate.unregister()
    drawBackgrounds.unregister()
})
