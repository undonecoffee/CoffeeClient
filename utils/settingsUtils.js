export function makeRect(color, x, y, x2, y2) {
    const xPos = sw(x)
    const yPos = sh(y)
    const width = sw(x2) - xPos
    const height = sh(y2) - yPos
    Renderer.drawRect(color, xPos, yPos, width, height)
}

export function makeBase(colors) {
    makeRect(colors.background, 0, 0, 100, 100)
    makeRect(colors.base.background, 20, 15, 80, 85)

    // rows
    makeRect(colors.base.lines, 20, 15, 20.2, 85)
    makeRect(colors.base.lines, 79.8, 15, 80, 85)

    makeRect(colors.base.lines, 30, 15, 30.2, 85)
    makeRect(colors.base.lines, 40, 15, 40.2, 85)

    // columns
    makeRect(colors.base.lines, 20, 15, 80, 15.4)
    makeRect(colors.base.lines, 20, 20, 80, 20.4)

    makeRect(colors.base.lines, 20, 84.6, 80, 85)
}

const screenWidth = Renderer.screen.getWidth()
const screenHeight = Renderer.screen.getHeight()

// const sw_helper = (w, size) => (((w / (100 / size)) * screenWidth) + ((screenWidth - (size * screenWidth)) / 2)).toFixed(8)
// const sh_helper = (h, size) => (((h / (100 / size)) * screenHeight) + (screenHeight - (size * screenHeight)) / 2).toFixed(8)
//
// let changedSize = 0.7
// export const sw = w => (sw_helper(w, changedSize))
// export const sh = h => (sh_helper(h, changedSize))

export const sw = w => ((w / 100) * screenWidth).toFixed(8)
export const sh = h => ((h / 100) * screenHeight).toFixed(8)
