import { fromatMinutes, ticks, time } from "../../../globalUtils/utils"

const defaultData = {
    splitsGui: {
        x: 0.5,
        y: 0.5,
        scale: 1,
        align: "left",
    },
    lastFloor: 0,
}

const path = "EngineerModules/features/splits/splits"
export default new (class file {
    constructor() {
        let data = FileLib.read(path, "data.json")
        data = data ? JSON.parse(data) : {}

        Object.assign(this, defaultData, data)
        this.save()
    }

    save() {
        FileLib.write(path, "data.json", JSON.stringify(this, null, 4))
    }

    save2() {
        ChatLib.chat("jnghuirehngiuerngi")
    }
})()

export const testtitle = `&cTESTTT

`

export const splitNames = ["0", "Open", "Camp", "Portal", "Maxor", "Storm", "Terms", "Goldor", "Necron"]

export const tickPacket = Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction")
export const realTick = packet => packet.func_148890_d() <= 0

export function testPace(pace, last) {
    ChatLib.chat(`&3Pace &b> &3${fromatMinutes(pace.map(Number).reduce((a, b) => a + b))}
&aOpen &b> &a${pace[0]}s\n&cCamp &b> &c${pace[1]}s\n&dPortal &b> &d${pace[2]}s
&9Enter &b> &9${fromatMinutes([pace[0], pace[1], pace[2]].map(Number).reduce((a, b) => a + b))}
&5Maxor &b> &5${pace[3]}s\n&bStorm &b> &b${pace[4]}s\n&6Terms &b> &6${pace[5]}s
&eGoldor &b> &e${pace[6]}s\n&cNecron &b> &c${pace[7]}s\n&4${last} &b> &4${pace[8]}s`)
}

export function findPace(f, s) {
    // probably the best piece of code ive ever written
    return ["Open", "Camp", "Portal", "Maxor", "Storm", "Terms", "Goldor", "Necron", f ? "Dragons" : "Animation"].map(name => s[`${f ? "m7" : "f7"}${["Casual", "PartyFinder", "Custom"][f ? s.m7Profile : s.f7Profile]}${name}`])
} // findPace(file.lastFloor, settings)

export function testSplitsFormat(times, settings) {}

// return pace.toeach((v, i) => samePhase? Math.max(pace, real) : phase > i?  pace : real).sum()

// client: Object.values(Splits).map(s => s.client).reduce((a, b, i) => { if (i > 3) return; a + b}, 0),
export function splitsTitle(Splits, settings, pace, phase) {
    final = []
    if (settings.showPace) {
        //
        const clientArray = Object.values(Splits)
            .map(s => s.client)
            .slice(1, 10)
        const serverArray = Object.values(Splits)
            .map(s => s.server)
            .slice(1, 10)
        final.push(
            `${settings.removeNames ? "&3" : "&3Pace &b> &3"}${
                formatTimeM(
                    {
                        client: pace.map((v, i) => (phase == i + 1 ? Math.max(v * 1000, clientArray[i]) : phase < i + 1 ? v * 1000 : clientArray[i])).reduce((a, b) => a + b),
                        server: pace.map((v, i) => (phase == i + 1 ? Math.max(v * 20, serverArray[i]) : phase < i + 1 ? v * 20 : serverArray[i])).reduce((a, b) => a + b),
                    },
                    settings.onlyTicks,
                )
            }`,
        )
    }

    ;[1, 2, 3].forEach(i => final.push(`${formatName(Splits[i], settings.removeNames)}${formatTime(Splits[i], settings.onlyTicks)}`))

    if (settings.showEnter) {
        const clientArray = Object.values(Splits)
            .map(s => s.client)
            .slice(1, 4)
        const serverArray = Object.values(Splits)
            .map(s => s.server)
            .slice(1, 4)
        final.push(
            `${settings.removeNames ? "&9" : "&9Enter &b> &9"}${
                formatTimeM(
                    {
                        client: pace
                            .slice(0, 3)
                            .map((v, i) => (phase == i + 1 ? Math.max(v * 1000, clientArray[i]) : phase < i + 1 ? v * 1000 : clientArray[i]))
                            .reduce((a, b) => a + b),
                        server: pace
                            .slice(0, 3)
                            .map((v, i) => (phase == i + 1 ? Math.max(v * 20, serverArray[i]) : phase < i + 1 ? v * 20 : serverArray[i]))
                            .reduce((a, b) => a + b),
                    },
                    settings.onlyTicks,
                )
            }`,
        )
    }

    ;[4, 5, 6, 7, 8, 9].forEach(i => final.push(`${formatName(Splits[i], settings.removeNames)}${formatTime(Splits[i], settings.onlyTicks)}`))

    return final.join("\n")
}

const formatName = (split, s) => (split.client == 0 ? "" : s ? split.color : `${split.color}${split.name} &b> ${split.color}`)
const formatTime = (split, s) => (split.client == 0 ? "" : s ? ticks(split.server) : `${time(split.client)} &8(&7${ticks(split.server)}&8)`)
const formatTimeM = (split, s) => (s ? fromatMinutes(split.server / 20) : `${fromatMinutes(split.client, true)} &8(&7${fromatMinutes(split.server / 20)}&8)`)

export const PANICPANIC = () => ChatLib.chat("&4PH&4AS&0E&cS O&4U&0T &4O&0F &cOR&0D&4ER &4W&cAR&0N&0I&4N&cG W&0A&cRN&4IN&0G")

export function blankSplits(floor) {
    return splitNames
        .map((name, i) => ({
            name,
            color: `&${"0acd5b6ecd".split("")[i]}`,
            client: 0,
            server: 0,
        }))
        .concat({
            name: floor ? "Dragons" : "Animation",
            color: floor ? "&4" : "&d",
            client: 0,
            server: 0,
        })
}

export const startMessages = [
    [2, /The Watcher: (Congratulations, you made it through the Entrance.|Ah, you've finally arrived.|Ah, we meet again...|So you made it this far... interesting.|I'm starting to get tired of seeing you around here...|Oh.. hello?|Things feel a little more roomy now, eh?)/],
    [3, /The Watcher: You have proven yourself. You may pass./],
    [4, /Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!/],
    [5, /Storm: Pathetic Maxor, just like expected./],
    [6, /Goldor: Who dares trespass into my domain?/],
    [7, /The Core entrance is opening!/],
    [8, /Necron: (Finally, I heard so much about you.|You went further than any human before, congratulations.)/],
    [9, /Necron: All this, for nothing.../],
    [10, /^\s*☠ Defeated (.+) in 0?([\dhms ]+?)\s*(\(NEW RECORD!\))?$/],
]
