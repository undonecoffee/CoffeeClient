// import settings from "../config/index"
// import RenderLib from "./utils"
//
// register("chat", () => {if (!settings.stairLinesToggle) return
//     showStairLinesMaxor.register()
//     scanForTimeIntoP2.register()
// }).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!")
//
// const showStairLinesMaxor = register("renderWorld", () => {
//     RenderLib.drawLine(68.7375, 222.1, 35.2375, 68.7375, 222.1, 35.7625, 0.894, 0.247, 0.298, 1, false)
//     RenderLib.drawLine(68.7625, 222.1, 35.2375, 68.7625, 222.1, 35.7625, 0.247, 0.849, 0.843, 1, false)
// }).unregister()
//
// const scanForTimeIntoP2 = register("Tick", () => {
//     if (Player.getY() > 169) return
//     scanForTimeIntoP2.unregister()
//     showStairLinesMaxor.unregister()
// }).unregister()
//
// register("worldUnload", () => {
//     showStairLinesMaxor.unregister()
//     scanForTimeIntoP2.unregister()
// })
//
// register("command", () => {
//     showStairLinesMaxor.register()
//     scanForTimeIntoP2.register()
// }).setName("showlines")
