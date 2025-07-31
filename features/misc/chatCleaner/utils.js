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
    random: [
        // watchdog
        [/^\[WATCHDOG ANNOUNCEMENT\]$/, "&c[WATCHDOG ANNOUNCEMENT]"],
        [/^Watchdog has banned .+ players in the last 7 days\.$/, "&cWatchdog line 2"],
        [/^Staff have banned an additional .+ in the last 7 days\.$/, "&cWatchdog line 3"],
        [/^Blacklisted modifications are a bannable offense!$/, "&cWatchdog line 4"],
        // join things
        // [/^Click here to view them!$/, "&aClick here to view them!"],
        [/^\w+ joined the lobby!$/, "&b[MVP+] &7<player>&6 joined the lobby!"],
        // [/^You earned .+ GEXP$/, "&aYou earned <num> GEXP"],
        [/^Latest update: SkyBlock .+/, "&eLatest update: &bSkyBlock &e<version>"],
        [/^Welcome to Hypixel SkyBlock!$/, "&eWelcome to &aHypixel SkyBlock&e!"],

        // random error messages
        [/^Whow! Slow down there!$/, "&cWhow! Slow down there!"],
        [/^This menu is disabled here!$/, "&cThis menu is disabled here!"],
        [/^Woah slow down, you're doing that too fast!$/, "&cWoah slow down, you're doing that too fast!"],
        [/^There are blocks in the way!$/, "&cthere are blocks in the way!"],
        [/^Please wait a few seconds between refreshing!$/, "&cPlease wait a few seconds between refreshing!"],
        // warping
        [/^Warping\.\.\.$/, "&7Warping..."],
        [/^Warping you to your SkyBlock island\.\.\.$/, "&7Warping you to your SkyBlock island..."],
        [/^Sending to server mini\w+\.\.\.$/, "&7Sending to server mini..."],
        [/^You are playing on profile: \w+$/, "&aYou are playing on profile: &e<profile>"],
        [/^Profile ID: [a-f0-9-]{36}$/, "&8Profile ID: <uuid>"],

        // other
        [/^\s*$/, "&7blank lines"],
        // [/^RARE REWARD! \w+ found a .+ in their (Bedrock|Obsidian) Chest!$/, "&dRARE REWARD! <player> found a <item> in their <chest> Chest!"],
        // [/^The New Year's Celebration event is starting in \d days!$/, "&eThe New Year's Celebration event is starting in <days> days!"],
        // [/^Your Auto Recombobulator recombobulated/, "&aYour Auto Recombobulator recombobulated"],
        // [/^Queuing\.\.\. \(Attempt 1\/3\)$/, "&eQueuing... (Attempt 1/3)"],
    ],
    dungeon1: [
        [/^(\[(MVP|VIP)(\+)?(\+)?\] )?\w+ has obtained (Superboom TNT|Blessing of \w+|\w+ \w+)!$/, "Your pickaxe ability is on cooldown for &k12s"],
        [/^DUNGEON BUFF! \w+ found a Blessing of \w+ (I|II|III|IV|V)!( \(.+\))?$/, "Your pickaxe ability is on cooldown for &k12s"],
        [/^DUNGEON BUFF! A Blessing of .+ (I|II|III|IV|V) was found! \(.+\)$/, "Your pickaxe ability is on cooldown for &k12s"],
        [/^     (Also )?Granted you \+\d.+ (and|&) \+\d.+\.$/i, "Your pickaxe ability is on cooldown for &k12s"],
    ],
    dungeon2: [
        [/^(\[(MVP|VIP)(\+)?(\+)?\] )?\w+ has obtained (Superboom TNT|Blessing of \w+|\w+ \w+)!$/, "Your pickaxe ability is on cooldown for &k12s"],
        [/^DUNGEON BUFF! \w+ found a Blessing of \w+ (I|II|III|IV|V)!( \(.+\))?$/, "Your pickaxe ability is on cooldown for &k12s"],
        [/^DUNGEON BUFF! A Blessing of .+ (I|II|III|IV|V) was found! \(.+\)$/, "Your pickaxe ability is on cooldown for &k12s"],
        [/^     (Also )?Granted you \+\d.+ (and|&) \+\d.+\.$/i, "Your pickaxe ability is on cooldown for &k12s"],
    ],
    dungeon3: [
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
        { name: `&3Hide &${settings.hide_random ? "a" : "c"}Random Messages`, command: `/ChatCleaner random`, hoverText: "/ChatCleaner random" },
        { name: `&3Hide &${settings.hide_boss ? "a" : "c"}Boss Messages`, command: `/ChatCleaner boss`, hoverText: "/ChatCleaner boss" },
        { name: `&3Hide &${settings.hide_dungeon1 ? "a" : "c"}Dungeon Messages`, command: `/ChatCleaner dungeon1`, hoverText: "/ChatCleaner dungeon1" },
        { name: `&3Hide &${settings.hide_dungeon2 ? "a" : "c"}More Dungeon Messages`, command: `/ChatCleaner dungeon2`, hoverText: "/ChatCleaner dungeon2" },
        { name: `&3Hide &${settings.hide_dungeon3 ? "a" : "c"}Even More Dungeon Messages`, command: `/ChatCleaner dungeon3`, hoverText: "/ChatCleaner dungeon3" },
    ]
    return finalObj
}
