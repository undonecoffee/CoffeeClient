// const coords = {
//     s1: [
//         [/*x1, x2*/ 109, 111,
//         /*y1, y2*/ 112.5, 114,
//         /*z1, z2*/ 72, 77,
//         /*name*/ "1st term"],
//
//         [/*x1, x2*/ 58.7, 60.3,
//         /*y1, y2*/ 118, 120,
//         /*z1, z2*/ 79, 81,
//         /*name*/ "2nd term"],
//
//         [/*x1, x2*/ 90, 94,
//         /*y1, y2*/ 112, 112,
//         /*z1, z2*/ 92, 94,
//         /*name*/ "3rd term"],
//
//         [/*x1, x2*/ 45, 50,
//         /*y1, y2*/ 109, 109,
//         /*z1, z2*/ 139, 141,
//         /*name*/ "4th term"],
//
//         [/*x1, x2*/ 59.2, 61.7,
//         /*y1, y2*/ 132, 132,
//         /*z1, z2*/ 132.2, 138.3,
//         /*name*/ "dev"]
//     ],
//     s2: [
//         [/*x1, x2*/ 68, 70,
//         /*y1, y2*/ 109, 109,
//         /*z1, z2*/ 121, 126,
//         /*name*/ "1st term"],
//
//         [/*x1, x2*/ 58.7, 60.3,
//         /*y1, y2*/ 120, 120.3,
//         /*z1, z2*/ 124.7, 127.3,
//         /*name*/ "2nd term"],
//
//         [/*x1, x2*/ 45, 50,
//         /*y1, y2*/ 109, 109,
//         /*z1, z2*/ 121, 124,
//         /*name*/ "3rd term"],
//
//         [/*x1, x2*/ 38, 40,
//         /*y1, y2*/ 109, 109,
//         /*z1, z2*/ 139, 141,
//         /*name*/ "4th term"],
//
//         [/*x1, x2*/ 39, 41,
//         /*y1, y2*/ 124, 124,
//         /*z1, z2*/ 125, 128,
//         /*name*/ "5th term"],
//
//         [/*x1, x2*/ 59.2, 61.7,
//         /*y1, y2*/ 132, 132,
//         /*z1, z2*/ 138.5, 140,
//         /*name*/ "High ee2"],
//
//         [/*x1, x2*/ 55, 59,
//         /*y1, y2*/ 109, 109,
//         /*z1, z2*/ 130, 132,
//         /*name*/ "low ee2"]
//     ],
//     s3: [
//         [/*x1, x2*/ -2, 2.7,
//         /*y1, y2*/ 108.5, 110,
//         /*z1, z2*/ 111, 114,
//         /*name*/ "1st term"],
//
//         [/*x1, x2*/ -2, 2,
//         /*y1, y2*/ 119, 119.4,
//         /*z1, z2*/ 92, 95,
//         /*name*/ "2nd term"],
//
//         [/*x1, x2*/ 15, 19,
//         /*y1, y2*/ 119, 126,
//         /*z1, z2*/ 90, 97,
//         /*name*/ "3rd term"],
//
//         [/*x1, x2*/ -2, 2,
//         /*y1, y2*/ 108.5, 110,
//         /*z1, z2*/ 76, 80,
//         /*name*/ "4th term"],
//
//         [/*x1, x2*/ -2, 4,
//         /*y1, y2*/ 120, 120,
//         /*z1, z2*/ 76, 79,
//         /*name*/ "dev"],
//
//         [/*x1, x2*/ 1.3, 3,
//         /*y1, y2*/ 108.5, 109,
//         /*z1, z2*/ 103, 105,
//         /*name*/ "low ee3"],
//
//         [/*x1, x2*/ 18, 18.7,
//         /*y1, y2*/ 108.5, 121.5,
//         /*z1, z2*/ 91.3, 92,
//         /*name*/ "high ee3"]
//     ],
//     s4: [
//         [/*x1, x2*/ 39.7, 42.3,
//         /*y1, y2*/ 108.5, 109,
//         /*z1, z2*/ 31.7, 34.5,
//         /*name*/ "1st term"],
//
//         [/*x1, x2*/ 43, 46,
//         /*y1, y2*/ 119.7, 123,
//         /*z1, z2*/ 30, 34.3,
//         /*name*/ "2nd term"],
//
//         [/*x1, x2*/ 64.7, 68.3,
//         /*y1, y2*/ 108.5, 109,
//         /*z1, z2*/ 31.7, 34.3,
//         /*name*/ "3rd term"],
//
//         [/*x1, x2*/ 70, 74,
//         /*y1, y2*/ 113, 116.5,
//         /*z1, z2*/ 44, 48,
//         /*name*/ "4th term"],
//
//         [/*x1, x2*/ 62.83, 64.17,
//         /*y1, y2*/ 127, 127,
//         /*z1, z2*/ 34.83, 36.17,
//         /*name*/ "dev"],
//
//         [/*x1, x2*/ 40.3, 68.7,
//         /*y1, y2*/ 111, 154.2,
//         /*z1, z2*/ 53.7, 117.7,
//         /*name*/ "inside core"],
//
//         [/*x1, x2*/ 51.3, 57.7,
//         /*y1, y2*/ 106, 132.2,
//         /*z1, z2*/ 50, 53.7,
//         /*name*/ "ouside core"]
//     ]
// }
//
// // const endPos = coords.s3[3]
// // const levers = 2
// // let leversGot = 0
//
// // function inBox(){
// //     let [x, y, z] = [Player.getRenderX(), Player.getRenderY(), Player.getRenderZ()]
// //     if (x < endPos[0] || x > endPos[1]) return false
// //     else if (y < endPos[2] || y > endPos[3]) return false
// //     else if (z < endPos[4] || z > endPos[5]) return false
// //     return true
// // }
//
// // let startTime
// // const leapToggle = register("chat", () => {
// //     leversGot = 0
// //     checkPos.register()
// //     startTime = Date.now()
// //     ChatLib.chat(`&0[&cEngineer&bClient&0]&a started movement timer!`)
// // }).setCriteria(/You have teleported to (.+)!/)
//
// // const checkLevers = register("soundPlay", () => {
// //     if (levers == 0) return
// //     leversGot += 1
// //     if (leversGot > levers) return
// //     if (leversGot < levers) return ChatLib.chat(`&blever took: &e[&a${((Date.now() - startTime) / 1000).toFixed(3)}s&e]`)
// //     ChatLib.chat(`&b&aAll levers took: &e[&a${((Date.now() - startTime) / 1000).toFixed(3)}s&e]`)
// // }).setCriteria("random.click")
//
// // const checkPos = register("tick", () =>{ if (!inBox()) return
// //     ChatLib.chat(`&0[&cEngineer&bClient&0] &rgetting to ${endPos[6]} took &b${((Date.now() - startTime) / 1000).toFixed(2)}s&r`)
// //     checkPos.unregister()
// // }).unregister()
//
//
//
//
//
//
//
//
// // s1:
// // 109, 111, 112.5, 114, 72, 77, 1st term
// // 108, 111, 118, 120, 79, 81, 2nd term
// // 90, 94, 112, 112, 92, 94, 3rd term
// // 90, 94, 119.7, 123, 98, 103, 4th term
// // 107, 111, 120, 120, 93, 95, dev
//
// // s2:
// // 68, 70, 109, 109, 122, 126, 1st term
// // 58.7, 60.3, 120, 120.3, 124.7, 127.3, 2nd term
// // 44, 51, 109, 109, 121, 124, 3rd term
// // 38, 40,109, 109,139, 141, 4th term
// // 39, 41, 124, 124, 125, 128, 5th term
// // 59.2, 61.7, 132, 132, 132.2, 138.3, "dev" (high ee2)
// // 55, 59, 109, 109, 129, 131, low ee2
//
// // s3:
// // -2, 2.7, 108.5, 110, 111, 114, 1st term
// // -2, 2, 119, 119.4, 92, 95, 2nd term
// // 15, 19, 119, 126, 90, 97, 3rd term
// // -2, 2, 108.5, 110, 76, 80, 4th term
// // -2, 4, 120, 120, 76, 79, dev
// // 1.3, 3, 108.5, 109, 103, 105, low ee3
// // 18, 18.7, 108.5, 121.5, 91.3, 92, high ee3
//
// // s4:
// // 39.7, 42.3, 108.5, 109, 31.7, 34.5, 1st term
// // 43, 46, 119.7, 123, 30, 34.3, 2nd term
// // 64.7, 68.3, 108.5, 109, 31.7, 34.3, 3rd term
// // 70, 74, 113, 116.5, 44, 48, 4th term
// // 62.83, 64.17, 127, 127, 34.83, 36.17, dev
// // 40.3, 68.7, 111, 154.2, 53.699, 117.7, inside core
// // 51.3, 57.7, 106, 132.2, 50, 53.7, ouside core
//
//
//
// // let currentNumber = 0
//
// // register("command", (toggleNumber) => {
// //     if (toggleNumber) {
// //         endPos = coords[parseInt(toggleNumber)]
// //         ChatLib.chat(`Changed movement timer to position ${coords[parseInt(toggleNumber)][6]}`)
// //         return
// //     }
// //     let chatText = new Message([new TextComponent(`&7Current location: &6${coords[currentNumber][6]}`)])
// //     for(i = 0; i < coords.length; i++){
// //         ChatLib.chat(coords.length)
// //         final.push([
// //             new TextComponent(`%5ID&7: &6${i} &9name&7: &6${coords[i][6]}`)
// //             .setClick("run_command", `/movementtimer ${i}`)
// //             .setHover("show_text", `/movementtimer ${i}`)
// //         ])
// //     }
// //     chatText.chat()
// // }).setName("movementtimer")
//
// // function makeChat() {
// //     let final = []
//
//
// //     return final
// // }
//
// // S3 ////////////////////////////////////////////////////////////////////////////////////////////
//
// // S4 ////////////////////////////////////////////////////////////////////////////////////////////
//
// // const endPos = [
// // /x1, x2/ -1.3, 2.4,
// // /y1, y2/ 108.5,109,
// // /z1, z2/ 110.7,113.3,
// // /name/ 1st term s3"]

