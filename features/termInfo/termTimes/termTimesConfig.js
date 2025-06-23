// look at "EngineerModules/GlobalUtils/template.js" for how to format this file

let categoryName = [`Term Times`]
let guis = [``]
let categoryDescription = [`"Term Times", "&6Term Times\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\n&3Numbers &7took &e2.61s &7| &cFC: &e410 &7| &7avg: &e170 &7| &abest: &e120\n\n&3Panes &7took &e1.5s &7| &cFC: &e325 &7| &7avg: &e130 &7| &abest: &e90\n\n\n\n\n\n\n&4&kOOOOOO&c DOES NOT WORK &4&kOOOOOO\n\n\n\n\n"`]
let dependencies = [``]
let settings = [`//
    //TermInfo
    //

    @SwitchProperty({
        name: "&9Toggle",
        description: "Toggles the module &aOn&7/&cOff&7.",
        category: "Term Times",
    }) termTimesToggle = false;

    @SwitchProperty({
        name: "&3Send Times In Chat",
        description: "Sends your party a list of term times",
        category: "Term Times",
    }) normalChatToggle = false;

    @SwitchProperty({
        name: "&3Show Prediction",
        description: "Gives a prediction of how long your term will take",
        category: "Term Times",
    }) predictionToggle = false;

    @SwitchProperty({
        name: "&3Send Prediction In Chat",
        description: "Sends your party a prediction of how long your term will take",
        category: "Term Times",
    }) predictionChatToggle = false;
    
`]
