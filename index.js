// import "./features/misc/config/index"
// import "./features/splits/config/index"
// import "./features/termsInfo/config/index"
//
// import "./features/autoBoss/config/index"
// import "./features/autoClear/config/index"
// import "./features/autoP3/config/index"

// let temp = FileLib.read("CoffeeClient", "imports.js")
// console.log(temp)

// const modules = {
//     misc: {
//         name: "Misc",
//         features: [],
//     },
//     termsInfo: {
//         name: "Terms Info",
//         features: [],
//     },
//     splits: {
//         name: "Splits",
//         features: [],
//     },
//     autoP3: {
//         name: "Auto P3",
//         features: [],
//     },
//     autoClear: {
//         name: "Auto Clear",
//         features: [],
//     },
//     autoBoss: {
//         name: "Auto Boss",
//         features: [],
//     },
// }
// import "./guttedAmaterasu/secretMainGui"

// export function saveChanges(){
//     let importFileText []
// }
let imports = {
    categories: { misc: "Misc", termsInfo: "Terms Info", splits: "Splits", autoP3: "Auto P3", autoClear: "Auto Clear", autoBoss: "Auto Boss" },
    misc: {
        autoBless: "Auto Bless",
        autoRequeue: "Auto Requeue",
        chatCleaner: "Chat Cleaner",
        maskTimer: "Mask Timer",
        mobHighlight: "Mob Highlight",
        relicUtils: "Relic Utils",
        sheepHider: "Sheep Hider",
    },
    termsInfo: [],
    splits: [],
    autoP3: [],
    autoClear: [],
    autoBoss: [],
}

let temp2 = {}
imports.forEach(name => {
    if (FileLib.exists("CoffeeClient", `features/${name}`)) {
    }
})
export const realCategories = temp2
