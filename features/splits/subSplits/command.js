register("command", (split, setting) => {
    if (!split) return ChatLib.chat(splits.default)
    if (!splits.hasOwnProperty(split)) return ChatLib.chat(`couldnt find "${split}" in splits`)
    if (!splits[split].hasOwnProperty(setting)) return ChatLib.chat(`couldnt find "${setting}" in "${split}"`)
    ChatLib.chat(splits[split][setting])
}).setName("subsplits").setAliases("ss")

const splits = {
    defualt: `/ss &aopen &7(room, key, all)
/ss &cblood &7(avg, stats, all)
/ss &dportal
/ss &5maxor &7(crystals, agro, all)
/ss &bstorm &7(dps, crush, all)
/ss &6terms &7(section, terms, all)
/ss &6goldor &7(leaps, first, all)
/ss &cnecron
/ss &5relics &7(total, each, all)
/ss &5dragons &7(total, each, all)`,
    open: {
        room: `&a&lBlood Rush
&cRoom 1 &b> &c3.53s &8(&73.50s&8)
&cRoom 2 &b> &c6.37s &8(&76.26s&8)
&cRoom 3 &b> &c3.53s &8(&72.20s&8)
&cRoom 4 &b> &c3.53s &8(&74.65s&8)
&6Avg &b> &65.63s &8(&74.60s&8)`,
        key: `&a&lBlood Rush

&5Hallway:
&7key &b> &7 1.52s &8(&71.50s&8)
&cDoor &b> &c 0.52s &8(&70.50s&8)

&5Layers:
&7key &b> &7 1.52s &8(&71.50s&8)
&cDoor &b> &c 0.52s &8(&70.50s&8)
        
&5Pit:
&7key &b> &7 1.52s &8(&71.50s&8)
&cDoor &b> &c 0.52s &8(&70.50s&8)

&5Dino:
&7key &b> &7 1.52s &8(&71.50s&8)
&cDoor &b> &c 0.52s &8(&70.50s&8)

&5Mossy: 
&7key &b> &7 1.52s &8(&71.50s&8)
&cDoor &b> &c 0.52s &8(&70.50s&8)

&6Total:
&7key avg &b> &7 1.52s &8(&71.50s&8)
&cdoor avg &b> &c 0.52s &8(&70.50s&8)
        `,
        all: `&a&lBlood Rush
&5Hallway:
&7droped &b> &7 1.52s &8(&71.50s&8)
&8pickup &b> &8 0.21s &8(&70.20s&8)
&copened &b> &c 0.06s &8(&70.05s&8)
&4lowered &b> &4 0.52s &8(&70.50s&8)
&6room total &b> &6 2.31s &8(&72.25s&8)

&5Layers:
&7droped &b> &7 1.52s &8(&71.50s&8)
&8pickup &b> &8 0.21s &8(&70.20s&8)
&copened &b> &c 0.06s &8(&70.05s&8)
&4lowered &b> &4 0.52s &8(&70.50s&8)
&6room total &b> &6 2.31s &8(&72.25s&8)

&5Pit:
&7droped &b> &7 1.52s &8(&71.50s&8)
&8pickup &b> &8 0.21s &8(&70.20s&8)
&copened &b> &c 0.06s &8(&70.05s&8)
&4lowered &b> &4 0.52s &8(&70.50s&8)
&6room total &b> &6 2.31s &8(&72.25s&8)

&5Dino:
&7droped &b> &7 1.52s &8(&71.50s&8)
&8pickup &b> &8 0.21s &8(&70.20s&8)
&copened &b> &c 0.06s &8(&70.05s&8)
&4lowered &b> &4 0.52s &8(&70.50s&8)
&6room total &b> &6 2.31s &8(&72.25s&8)

&5Mossy: 
&7droped &b> &7 1.52s &8(&71.50s&8)
&8pickup &b> &8 0.21s &8(&70.20s&8)
&copened &b> &c 0.06s &8(&70.05s&8)
&4lowered &b> &4 0.52s &8(&70.50s&8)
&6room total &b> &6 2.31s &8(&72.25s&8)
        
&7total droped avg &b> &7 1.52s &8(&71.50s&8)
&8total pickup avg &b> &8 0.21s &8(&70.20s&8)
&ctotal opened avg &b> &c 0.06s &8(&70.05s&8)
&4total lowered avg &b> &4 0.52s &8(&70.50s&8)
&6total room avg &b> &6 2.31s &8(&72.25s&8)

        `,
    },
    blood: {
        avg: ``,
        stats: ``,
        all: ``,
    },
    portal: ``,
    maxor: {
        crystals: ``,
        agro: ``,
        all: ``,
    },
    maxor: {
        crystals: ``,
        agro: ``,
        all: ``,
    },
    storm: {
        dps: ``,
        crush: ``,
        all: ``,
    },
    terms: {
        section: ``,
        terms: ``,
        all: ``,
    },
    goldor: {
        leaps: ``,
        first: ``,
        all: ``,
    },
    relics: {
        total: ``,
        each: ``,
        all: ``,
    },
    dragons: {
        total: ``,
        each: ``,
        all: ``,
    },
}

let title = `${splits.open.key}`
// register("renderOverlay", () => new Text(title, 600, 50).setShadow(true).draw())
