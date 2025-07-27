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
export const getComponets = () => {
    return {
        default: [
            { name: `&3Clean Join Messages`, command: `/ChatCleaner join`, hoverText: "/ChatCleaner join" },
            { name: `&3Clean Party Chat`, command: `/ChatCleaner party`, hoverText: "/ChatCleaner party" },
            { name: `&3Hide Ability Messages`, command: `/ChatCleaner ability`, hoverText: "/ChatCleaner ability" },
            { name: `&3Hide Error Messages`, command: `/ChatCleaner error`, hoverText: "/ChatCleaner error" },
            { name: `&3Hide Boss Messages`, command: `/ChatCleaner boss`, hoverText: "/ChatCleaner boss" },
            { name: `&3Hide Blessing Messages`, command: `/ChatCleaner blessings`, hoverText: "/ChatCleaner blessings" },
        ],
    }
}
