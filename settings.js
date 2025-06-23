// import { modules } from "./imports.js"

console.log("2")
let mainText = "&7Engineer &cModules"
let mainGui = new Gui()
let inGui = false
register("command", () => {
    setTimeout(() => inGui = true, 200)
    mainGui.open()
    renderMain.register()
    guiClicked.register()
}).setName("em")

register("guiClosed", () => {
    if (!inGui) return
    inGui = false
    renderMain.unregister()
    guiClicked.unregister()
})

const screenWidth = Renderer.screen.getWidth()
const screenHeight = Renderer.screen.getHeight()

const sw = width => Math.floor(size * Renderer.screen.getWidth())
const sh = height => Math.floor(size * Renderer.screen.getHeight())

const resetColors = () => buttons.forEach(button => button.color = 0x88000000)

const inBox = (x, y, bx, by, bw, bh) => (x >= bx && x <= bx + bw && y >= by && y <= by + bh)

let buttons = ["misc", "splits", "terms"].map((cat, i) => ({
    text: `&${"abc"[i]}/${cat}`,
    open: () => ChatLib.command(cat, true),
    color: 0x88000000,
    position: [
        screenWidth / 2.424,
        screenHeight / [3.7, 2.7, 2.13][i],
    ],
}))

const guiClicked = register("guiMouseClick", (x, y) => {
    buttons.forEach(b => {
        const [bx, by] = b.position
        if (inBox(x, y, bx, by, 170, 50)) b.open()
    })
}).unregister()

const renderMain = register("renderOverlay", () => {
    new Text(mainText, screenWidth / 2, screenHeight / 5)
        .setShadow(true).setScale(2).setAlign("center").draw()

    const [x, y] = [Client.getMouseX(), Client.getMouseY()]

    buttons.forEach(b => {
        const [bx, by] = b.position
        b.color = inBox(x, y, bx, by, 170, 50) ? (resetColors(), 0xAA000000) : 0x88000000
        Renderer.drawRect(b.color, bx, by, 170, 50)
        new Text(b.text, bx + 85, by + 17).setShadow(true).setScale(1.5).setAlign("center").draw()
    })
}).unregister()
