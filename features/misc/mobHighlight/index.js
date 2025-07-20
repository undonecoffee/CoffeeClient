// import settings from "../config/index"
//
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// const CHEATMODE = false      // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
// // DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER DO NOT USE I HATE CHEATER
//
// const renderBoxOutlineFromCorners = (x0, y0, z0, x1, y1, z1, r, g, b, a, lineWidth=2, phase=true) => {Tessellator.pushMatrix()
//     GL11.glLineWidth(lineWidth);Tessellator.begin(3);Tessellator.depthMask(false);Tessellator.disableTexture2D();Tessellator.enableBlend()
//
//     if (phase) Tessellator.disableDepth()
//     Tessellator.colorize(r, g, b, a)
//
//     Tessellator.pos(x0, y0, z0).tex(0, 0);Tessellator.pos(x0, y0, z1).tex(0, 0);Tessellator.pos(x0, y1, z1).tex(0, 0);Tessellator.pos(x1, y1, z1).tex(0, 0)
//     Tessellator.pos(x1, y1, z0).tex(0, 0);Tessellator.pos(x0, y1, z0).tex(0, 0);Tessellator.pos(x0, y0, z0).tex(0, 0);Tessellator.pos(x1, y0, z0).tex(0, 0)
//     Tessellator.pos(x1, y0, z1).tex(0, 0);Tessellator.pos(x0, y0, z1).tex(0, 0);Tessellator.pos(x0, y1, z1).tex(0, 0);Tessellator.pos(x0, y1, z0).tex(0, 0)
//     Tessellator.pos(x1, y1, z0).tex(0, 0);Tessellator.pos(x1, y0, z0).tex(0, 0);Tessellator.pos(x1, y0, z1).tex(0, 0);Tessellator.pos(x1, y1, z1).tex(0, 0)
//     Tessellator.draw()
//
//     if (phase) Tessellator.enableDepth()
//
//     Tessellator.enableTexture2D();Tessellator.disableBlend();Tessellator.depthMask(true);Tessellator.popMatrix()
// }
//
// const renderBoxOutline = (x, y, z, w, h, r, g, b, a, lineWidth=2, phase=true) => {
//     renderBoxOutlineFromCorners(x-w/2, y, z-w/2, x+w/2, y+h, z+w/2, r, g, b, a, lineWidth, phase)
// }
//
// // https://regex101.com/r/mlyWIK/2
// const starMobRegex = /^§6✯ (?:§.)*(.+)§r.+§c❤$|^(Shadow Assassin)$/
//
// let starMobs = []
// const findMobs = register("tick", () => {
//     let star = []
//     World.getAllEntities().forEach(entity => {
//         const match = entity.getName().match(starMobRegex)
//         if (!match) return false
//         const mob = {
//             entity: entity, isFel: false,
//             x: entity.getX(), y: entity.getY(), z: entity.getZ()
//         }
//         const [_, mobName, sa] = match
//         let height = 1.9
//         if (!sa) {
//             if (/^(?:\w+ )*Fels$/.test(mobName)) {
//                 height = 1
//                 mob.y = mob.y - 2
//                 mob.isFel = true
//             }
//             else if (/^(?:\w+ )*Withermancer$/.test(mobName)) height = 2.8
//         } else { height = -1.9; mob.y = mob.y + 1 }
//         mob.height = height
//         star.push(mob)
//     })
//     starMobs = star
// })
//
// const renderMobs = register("renderWorld", () => {
//     if (!starMobs.length) return
//     starMobs.forEach(mob => {
//         if (mob.isFel) renderBoxOutline(mob.x, mob.y - Math.ceil(mob.height), mob.z, 0.8, mob.height, 1, 0, 0, 1, 2, CHEATMODE)
//         else renderBoxOutline(mob.x, mob.y - Math.ceil(mob.height), mob.z, 0.8, mob.height, 0, 1, 1, 1, 2, CHEATMODE)
//     })
// })
//
// register("worldload", () => { if (!settings.highlightToggle) return
//     renderMobs.register()
//     findMobs.register()
// })
// register("chat", () => { if (!settings.highlightToggle) return
//     renderMobs.unregister()
//     findMobs.unregister()
// }).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!");

