import settings from "../config/settings"
import { renderBoxOutline } from "./utils"

// most of this was just taken from bloom but made legit and in one module
// https://regex101.com/r/mlyWIK/2
const starMobRegex = /^§6✯ (?:§.)*(.+)§r.+§c❤$|^(Shadow Assassin)$/

let starMobs = []
const findMobs = register("tick", () => {
    let star = []
    World.getAllEntities().forEach(entity => {
        const match = entity.getName().match(starMobRegex)
        if (!match) return false
        const mob = { entity: entity, isFel: false, x: entity.getX(), y: entity.getY(), z: entity.getZ() }
        const [_, mobName, sa] = match
        let height = 1.9
        if (!sa) {
            if (/^(?:\w+ )*Fels$/.test(mobName)) {
                height = 1
                mob.y = mob.y - 2
                mob.isFel = true
            } else if (/^(?:\w+ )*Withermancer$/.test(mobName)) { height = 2.8 }
        } else {
            height = -1.9
            mob.y = mob.y + 1
        }
        mob.height = height
        star.push(mob)
    })
    starMobs = star
})

const wall = false
const renderMobs = register("renderWorld", () => {
    if (!starMobs.length) return
    starMobs.forEach(mob => {
        if (mob.isFel) renderBoxOutline(mob.x, mob.y - Math.ceil(mob.height), mob.z, 0.8, mob.height, 1, 0, 0, 1, 2, wall)
        else renderBoxOutline(mob.x, mob.y - Math.ceil(mob.height), mob.z, 0.8, mob.height, 0, 1, 1, 1, 2, wall)
    })
})

register("worldload", () => {
    renderMobs.register()
    findMobs.register()
})
register("chat", () => {
    if (!settings.inBoss) return
    renderMobs.unregister()
    findMobs.unregister()
}).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!")
