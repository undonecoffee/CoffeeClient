export const defaults = {
    ability: [
        [/^Your pickaxe ability is on cooldown for \d+s\.$/, "Your pickaxe ability is on cooldown for &k12&fs."],
        [/^This ability is on cooldown for \d+s\.$/, "This Ability is on cooldown for &k12&fs."],
        [/^This item is on cooldown\.$/, "This item is on cooldown."],
        [/^This ability is on cooldown \d+$/, "&cthis ability is on cooldown."],
        [/^Your .+ hit \d+ enem(ies|y) for .+ damage\.$/, "&7Your implosion hit &c12&7 enemies for &c1,252, &7damage."],
    ],
    boss: [
        [/^\[BOSS\] /, "Your pickaxe ability is on cooldown for &k12s"],
    ],
    error: [
        [/^There are blocks in the way!$/, "Your pickaxe ability is on cooldown for &k12s"],
    ],
    blessings: [
        [/^(\[(MVP|VIP)(\+)?(\+)?\] )?\w+ has obtained (Superboom TNT|Blessing of \w+|\w+ \w+)!$/, "Your pickaxe ability is on cooldown for &k12s"],
        [/^DUNGEON BUFF! \w+ found a Blessing of \w+ (I|II|III|IV|V)!( \(.+\))?$/, "Your pickaxe ability is on cooldown for &k12s"],
        [/^DUNGEON BUFF! A Blessing of .+ (I|II|III|IV|V) was found! \(.+\)$/, "Your pickaxe ability is on cooldown for &k12s"],
        [/^     (Also )?Granted you \+\d.+ (and|&) \+\d.+\.$/i, "Your pickaxe ability is on cooldown for &k12s"],
    ],
}
export function convertToJSON(messages) {
    let fileString = [`{`]
    Object.keys(messages).forEach((key, i) => {
        fileString.push(`    "${key}": [`)
        let firstLength = Object.keys(messages).length
        let length = Object.keys(messages[key]).length
        messages[key].forEach(([regex, display], i) => {
            fileString.push(`        [
            "${regex.toString().slice(1, -1).replace(/\\/g, "\\\\")}",
            "${display}",
            true
        ]${i == (length - 1) ? " " : ","}`)
        })
        // messages[key].forEach((v, i) => fileString.push(`        ["${v.toString().slice(1, -1).replace(/\\/g, "\\\\")}", true]${i == (length - 1) ? " " : ","}`))
        fileString.push(`    ]${firstLength == (i + 1) ? "" : ","}`)
    })
    fileString.push(`}`)
    return fileString.join("\n")
}
export const getComponets = (data, settings) => {
    let finalObj = {}
    Object.keys(data).forEach(key => {
        let finalArray = []
        data[key].forEach(([regex, display, toggled], i) => {
            finalArray.push({ name: `&${toggled ? "a" : "c"}Toggled&r ${display}`, command: `/ChatCleanerToggle ${display}`, hoverText: `/ChatCleanerToggle ${display}` })
        })
        finalObj[key] = finalArray
    })
    finalObj.default = [
        { name: `&3Hide &${settings.hide_ability ? "a" : "c"}Ability Messages`, command: `/ChatCleaner ability`, hoverText: "/ChatCleaner ability" },
        { name: `&3Hide &${settings.hide_error ? "a" : "c"}Error Messages`, command: `/ChatCleaner error`, hoverText: "/ChatCleaner error" },
        { name: `&3Hide &${settings.hide_boss ? "a" : "c"}Boss Messages`, command: `/ChatCleaner boss`, hoverText: "/ChatCleaner boss" },
        { name: `&3Hide &${settings.hide_blessings ? "a" : "c"}Blessing Messages`, command: `/ChatCleaner blessings`, hoverText: "/ChatCleaner blessings" },
    ]
    return finalObj
}
