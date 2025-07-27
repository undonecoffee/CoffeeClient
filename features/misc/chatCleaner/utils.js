export const defaults = {
    ability: [
        /^Your pickaxe ability is on cooldown for \d+s\.$/,
        /^This ability is on cooldown for \d+s\.$/,
        /^This item is on cooldown\.$/,
        /^This ability is on cooldown \d+$/,
        /^Your .+ hit \d+ enem(ies|y) for .+ damage\.$/,
    ],
    boss: [/^\[BOSS\] /],
    error: [
        /^There are blocks in the way!$/,
    ],
    blessings: [
        /^(\[(MVP|VIP)(\+)?(\+)?\] )?\w+ has obtained (Superboom TNT|Blessing of \w+|\w+ \w+)!$/,
        /^DUNGEON BUFF! \w+ found a Blessing of \w+ (I|II|III|IV|V)!( \(.+\))?$/, // DUNGEON BUFF! hiimfabyy found a Blessing of Wisdom V! (09s)
        /^DUNGEON BUFF! A Blessing of .+ (I|II|III|IV|V) was found! \(.+\)$/,
        /^     (Also )?Granted you \+\d.+ (and|&) \+\d.+\.$/i,
    ],
}
export function convertToJSON(messages) {
    let fileString = [`{`]
    Object.keys(messages).forEach((key, i) => {
        fileString.push(`    "${key}": [`)
        let firstLength = Object.keys(messages).length
        let length = Object.keys(messages[key]).length
        messages[key].forEach((v, i) => fileString.push(`        ["${v.toString().slice(1, -1).replace(/\\/g, "\\\\")}", true]${i == (length - 1) ? " " : ","}`))
        fileString.push(`    ]${firstLength == (i + 1) ? "" : ","}`)
    })
    fileString.push(`}`)
    return fileString.join("\n")
}
