export const colors = {
    // const colors = {
    reset: () => {
        // ChatLib.chat("reset!")
    },
    bg: 0x00000000,
    base: {
        bg: 0x66000000,
        lines: 0xFF111111,
    },

    category: {
        base: {
            base: { outline: 0xFF333333, bg: 0xFF222222 },
            hovered: { outline: 0xFF555555, bg: 0xFF444444 },
        },
        delete: {
            base: { outline: 0xFFFF4C4C, bg: 0xFF2A0909 },
            hovered: { outline: 0xFFFF7878, bg: 0xFF440C0C },
        },
    },
    feature: {
        on: {
            base: { outline: 0xCC009900, bg: 0xCC00BB00 },
            hovered: { outline: 0xCC00BB00, bg: 0xCC009900 },
        },
        off: {
            base: { outline: 0xCC990000, bg: 0xCCBB0000 },
            hovered: { outline: 0xCCBB0000, bg: 0xCC990000 },
        },
    },
    hovered: 0xAA000000,
    button: 0x88000000,
}

export const inBox = (x, y, x1, y1, x2, y2) => {
    if (x < x1) return false
    if (x > x2) return false
    if (y < y1) return false
    if (y > y2) return false
    return true
}
