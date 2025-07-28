import settings from "../config/settings"
import { guis } from "../config/gui"

let ticks = 0

register("chat", () => {
    if (!settings.purple && !settings.green && !settings.yellow_py && !settings.yellow_gy) return
    toggle3.register()
    ticks = 196
}).setCriteria(/\[BOSS\] Storm: (ENERGY HEED MY CALL|THUNDER LET ME BE YOUR CATALYST)!/)

const toggle3 = register("packetReceived", packet => {
    if (ticks > 150 && settings.green) return
    if (packet.func_148890_d() <= 0) ticks--
}).setFilteredClass(Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction")).unregister()
