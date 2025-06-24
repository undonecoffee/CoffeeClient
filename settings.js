import { moduleName, activeModules } from "./index.js"
import { makeBase, makeRect, sw, sh } from "./utils/settingsUtils.js"

const colors = {
    reset: () => {
        // ChatLib.chat("reset!")
    },
    background: 0x00000000, // dark gray background
    base: {
        background: 0x66000000,
        lines: 0xBB000000, // dark gray lines
    },
    hovered: 0xAA000000,
    button: 0x88000000,
}

const inBox = (x, y, bx, by, bw, bh) => (x >= bx && x <= bx + bw && y >= by && y <= by + bh)

function addConfig(...args) {
}

let display = {
    config: {},
    addCategory: (fileName, displayName) => {
        display.categories[fileName] = {
            name: fileName,
            displayName: displayName,
            features: [],
        }
    },
    addFeature: (fileName, displayName) => {
    },
    addConfig: (fileName, ...args) => addConfig(fileName, ...args),
}

let buttons = ["misc", "splits", "terms"].map((cat, i) => ({
    text: `&${"abc"[i]}/${cat}`,
    open: () => ChatLib.command(cat, true),
    color: colors.button,
}))

const guiClicked = register("guiMouseClick", (x, y) => {
    buttons.forEach(b => {
        const [bx, by] = b.position
        if (inBox(x, y, bx, by, 170, 50)) b.open()
    })
}).unregister()

const mouseUpdate = register("step", () => {
    const [x, y] = [Client.getMouseX(), Client.getMouseY()]
    buttons.forEach((b, i) => {
        const [bx, by] = b.position = [sw(10 + i * 20), sh(10 + i * 10)]
        if (inBox(x, y, bx, by, 170, 50)) {
            colors.reset()
            b.color = colors.hovered
        } else {
            b.color = colors.button
        }
    })
}).setFps(30)

const renderMain = register("renderOverlay", () => {
    makeBase(colors)
}).unregister()

// makeRect(colors.background, 0, 0, 1, 1)

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

let mainGui = new Gui()
let inGui = false
register("command", () => {
    setTimeout(() => inGui = true, 200)
    mainGui.open()
    renderMain.register()
    guiClicked.register()
}).setName("cc")

register("guiClosed", () => {
    if (!inGui) return
    inGui = false
    renderMain.unregister()
    guiClicked.unregister()
})
