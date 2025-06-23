import settings from "../config/index"
import gui from "../../../globalUtils/guiUtils"
import file from "./utils"
// import from "./utils";

// const subSplitsGui = new gui(file, file.subSplitsGui, settings, "subSplitsGui", "&a&l&nSub Splits", true, true)

// let phase
// let splits = blankSplits()

// const updateSplits = register("step", () => {
//     Splits[phase].client = (Date.now() - splitStart)
//     splitsGui.text(splitsTitle(Splits, settings, pace, phase))
// }).setFps(17)


// function newPhase() {

// }



// // BLOOD RUSH

let openSplitStart
const keyTimes = [0, 0]

const openStart = register("chat", () => openStart2.register()).setCriteria("Starting in 1 second.").unregister();

const openStart2 = register("PacketReceived", () => {
    openStart.unregister()
    openStart2.unregister()
    openSplitStart = Date.now()
    openKeyDrop.register()
}).setFilteredClass(Java.type("net.minecraft.network.play.server.S34PacketMaps")).unregister()


const openKeyDrop = register("tick", () => {
    World.getAllEntities().forEach(entity => {
        const name = entity.name.removeFormatting()
        if (name == "Wither Key" || name == "Blood Key") {
            keyTimes[0] = ((Date.now() - (openSplitStart + 700))/1000).toFixed(2)
            openKeyDrop.unregister()
            openKeyGot.register()
            openSplitStart = Date.now()
        }
    })
}).unregister()

const openKeyGot = register("chat", () => {
    keyTimes[1] = ((Date.now() - openSplitStart)/1000).toFixed(2)
    openKeyGot.unregister()
    openWitherDoor.register()
    openBloodDoor.register()
    openSplitStart = Date.now()
}).setCriteria(/^(\[(MVP|VIP)(\+)?(\+)?\] )?\w+ has obtained \w+ Key!$/).unregister()

const openWitherDoor = register("chat", () => {
    ChatLib.chat(`&0[&cBloodRush&bSplits&0]&r ${(parseFloat(keyTimes[0]) + parseFloat(keyTimes[1]) + (Date.now() - openSplitStart)/1000).toFixed(2)}s &e[&b${keyTimes[0]} &7|&a ${keyTimes[1]} &7|&c ${((Date.now() - openSplitStart)/1000).toFixed(2)}&e]`)
    openWitherDoor.unregister()
    openBloodDoor.unregister()
    openKeyDrop.register()
    openSplitStart = Date.now()
}).setCriteria(/^\w+ opened a WITHER door!$/).unregister()

const openBloodDoor = register("chat", () => {
    ChatLib.chat(`&0[&cBloodRush&bSplits&0]&r ${(parseFloat(keyTimes[0]) + parseFloat(keyTimes[1]) + (Date.now() - openSplitStart)/1000).toFixed(2)}s &e[&b${keyTimes[0]} &7|&a ${keyTimes[1]} &7|&c ${((Date.now() - openSplitStart)/1000).toFixed(2)}&e]`)
    openWitherDoor.unregister()
    openBloodDoor.unregister()
}).setCriteria(/^The BLOOD DOOR has been opened!$/).unregister()

///////////

function unregisterAll() {
    // open
    openStart.unregister()
    openStart2.unregister()
    openKeyDrop.unregister()
    openKeyGot.unregister()
    openWitherDoor.unregister()
    openBloodDoor.unregister()

    // camp
}


register("worldLoad", () => {
    unregisterAll()
    if (settings.brSubSplit == 2) openStart.register()
})

register("guiClosed", gui => {
    if (!(gui instanceof Java.type("gg.essential.vigilance.gui.SettingsGui"))) return;
    switch (settings.brSubSplit) {
        case 0: 
            openStart.unregister()
            openStart2.unregister()
            openKeyDrop.unregister()
            openKeyGot.unregister()
            openWitherDoor.unregister()
            openBloodDoor.unregister()
            break;
        case 2: 
            openStart.register();
            break
    }
})