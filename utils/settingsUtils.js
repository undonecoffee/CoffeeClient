const screenWidth = Renderer.screen.getWidth()
const screenHeight = Renderer.screen.getHeight()

const sw = w => ((w / 100) * screenWidth).toFixed(5)
const sh = h => ((h / 100) * screenHeight).toFixed(5)

const makeRect = (color, x, y, x2, y2) => [color, sw(x), sh(y), (sw(x2) - sw(x)).toFixed(5), (sh(y2) - sh(y)).toFixed(5)]

export function makeBase(colors) {
    return [
        makeRect(colors.bg, 0, 0, 100, 100),
        makeRect(colors.base.bg, 20, 15, 80, 85),

        // rows
        makeRect(colors.base.lines, 20, 15, 80, 15.4),
        makeRect(colors.base.lines, 20, 20, 80, 20.4),

        makeRect(colors.base.lines, 20, 84.6, 80, 85),

        // columns
        makeRect(colors.base.lines, 20, 15, 20.23, 85),
        makeRect(colors.base.lines, 79.8, 15, 80, 85),

        makeRect(colors.base.lines, 30, 20, 30.2, 85),
        makeRect(colors.base.lines, 40, 20, 40.2, 85),
        // categories bounding box
        // makeRect(colors.category.base.bg, 20, 20, 30, 85),
        // features bounding box
        // makeRect(colors.category.base.bg, 30, 20, 40, 85),
        // config bounding box
        // makeRect(colors.category.base.bg, 40, 20, 80, 85),
    ]
}

export function makeCells() {
    return {
        categories: [sw(20), sh(20), sw(30), sh(85)],
        features: [sw(30), sh(20), sw(40), sh(85)],
        config: [sw(40), sh(20), sw(80), sh(85)],
    }
}

export const makeCategories = {
    init: (colors, config) => {
        let temp = {
            bounding: [],
            draw: [],
            text: [],
        }
        Object.entries(config).forEach(([k, v], i) => {
            v.active = i === 0
            let color = v.active ? colors.category.hovered : colors.category.base
            let y = 21 + (6 * i)
            temp.bounding.push([sw(20.5), sh(y), sw(29.7), sh(y + 5)])
            temp.draw.push([
                // background
                makeRect(color.bg, 20.5, y, 29.7, y + 5),
                // rows
                makeRect(color.outline, 20.5, y, 29.7, y + 0.2),
                makeRect(color.outline, 20.5, y + 4.8, 29.7, y + 5),
                // columns
                makeRect(color.outline, 20.5, y, 20.6, y + 5),
                makeRect(color.outline, 29.6, y, 29.7, y + 5),
            ])
            temp.text.push([
                v.displayName,
                sw(25.1),
                sh(y + 1.8),
            ])
        })
        return temp
    },
}

export function makeFeatures(colors, categories) {
}

export function makeConfig(colors, categories) {
}

// normal
// const sw = w => ((w / 100) * screenWidth).toFixed(5)
// const sh = h => ((h / 100) * screenHeight).toFixed(5)

// let changingX = 0
// let changingY = 0
//
// const sw = w => (((w / 100) * screenWidth) + changingX).toFixed(5)
// const sh = h => (((h / 100) * screenHeight) + changingY).toFixed(5)
//
// export function animation() {
//     changingY = screenHeight / 2
//     animationRegister.register()
// }
//
// const animationRegister = register("step", () => {
//     if (changingY <= 0) {
//         animationRegister.unregister()
//         changingY = 0
//         return
//     }
//     changingY -= 8
// }).setFps(100).unregister()
