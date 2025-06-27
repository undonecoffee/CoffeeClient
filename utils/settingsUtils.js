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
    active: (colors, category, config) => {
        let final = []

        let keys = Object.keys(config)

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            // if (key == category)
            let temp = {
                bounding: [
                    [],
                ],
                draw: [],
            }
            final.push(temp)
        }
        return final
    },
    bounding,
}

export function makeFeatures(colors, categories) {
}

export function makeConfig(colors, categories) {
}
// const sw_helper = (w, size) => (((w / (100 / size)) * screenWidth) + ((screenWidth - (size * screenWidth)) / 2)).toFixed(8)
// const sh_helper = (h, size) => (((h / (100 / size)) * screenHeight) + ((screenHeight - (size * screenHeight)) / 2)).toFixed(8)
//
// let changedSize = 0.4
// export const sw = w => (sw_helper(w, changedSize))
// export const sh = h => (sh_helper(h, changedSize))

// let changingX = 0
// let changingY = 600
//
// const sw = w => (((w / 100) * screenWidth) + changingX).toFixed(5)
// const sh = h => (((h / 100) * screenHeight) + changingY).toFixed(5)
//
// register("step", () => {
//     if (changingY <= 0) return changingY = 0
//     changingY -= screenHeight * 0.02
// }).setFps(100)

// console.log(((parseFloat(sw(80)) + parseFloat(sw(20))) / 2).toFixed(5))
// console.log(((parseFloat(sh(15)) + parseFloat(sh(20))) / 2).toFixed(5))
