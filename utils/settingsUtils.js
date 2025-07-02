const screenWidth = Renderer.screen.getWidth()
const screenHeight = Renderer.screen.getHeight()

const sw = w => ((w / 100) * screenWidth).toFixed(5)
const sh = h => ((h / 100) * screenHeight).toFixed(5)

const makeRect = (color, x, y, x2, y2) => [color, sw(x), sh(y), (sw(x2) - sw(x)).toFixed(5), (sh(y2) - sh(y)).toFixed(5)]

export function makeConfig(moduleName, activeModules) {
    let temp = {}
    for (let currModule of activeModules) {
        let [category, file] = currModule.split("/")
        let settings = JSON.parse(FileLib.read(`${moduleName}/features/${currModule}`, "settings.json"))

        temp[category] ??= {
            displayName: settings.module.parentDisplayName,
            active: false,
            features: [],
        }

        temp[category].features.push({
            name: file,
            active: false,
            displayName: settings.module.name,
            description: settings.module.description,
            config: [...settings.config],
        })
    }
    return temp
}

export function makeBase(colors) {
    return {
        text: [
            ["&cCoffee&7Client", sw(50), sh(16.8), 1.5],
        ],
        draw: [
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
        ],
    }
}

export function makeCells() {
    return {
        categories: [sw(20), sh(20), sw(30), sh(85)],
        features: [sw(30), sh(20), sw(40), sh(85)],
        config: [sw(40), sh(20), sw(80), sh(85)],
    }
}

const makeBorder = (color, coords) => coords.map(c => makeRect(color, ...c))

export const category = {
    init: (colors, config) => {
        let temp = {
            bounding: [],
            draw: [],
            text: [],
        }
        Object.entries(config).forEach(([k, v], i) => {
            v.active = i === 0
            let color = v.active ? colors.category.base.hovered : colors.category.base.base
            let color2 = v.active ? colors.category.delete.hovered : colors.category.delete.base
            let y = 21 + (6 * i)
            temp.bounding.push([
                [sw(20.5), sh(y), sw(29.7), sh(y + 5)],
                // [sw(20.5), sh(y), sw(29.7), sh(y + 5)],
            ])
            temp.draw.push([
                [
                    // background
                    makeRect(color.bg, 20.5, y, 29.7, y + 5),
                    ...makeBorder(color.outline, [
                        [20.5, y, 29.7, y + 0.2],
                        [20.5, y + 4.8, 29.7, y + 5],
                        [20.5, y, 20.6, y + 5],
                        [29.6, y, 29.7, y + 5],
                    ]),
                ],
                [
                    // background
                    makeRect(color2.bg, 28.7, y + 0.2, 29.6, y + 1.7),
                    ...makeBorder(color2.outline, [
                        [28.7, y + 0.2, 29.6, y + 0.3],
                        [28.7, y + 1.8, 29.6, y + 1.9],
                        [28.7, y + 0.2, 28.75, y + 1.9],
                        [29.63, y + 0.2, 29.6, y + 1.9],
                    ]),
                ],
            ])
            temp.text.push([
                [v.displayName, sw(25.1), sh(y + 1.8)],
                ["&cx", sw(29.15), sh(y + 0.15)],
            ])
        })
        return temp
    },
    resetColors: (colors, active) => {
        for (let key of active) {
        }
    },
}
