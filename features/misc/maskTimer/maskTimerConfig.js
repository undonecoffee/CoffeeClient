// look at "EngineerModules/GlobalUtils/template.js" for how to format this file

let categoryName = [`Mask Timer`]
let guis = [`maskTimerGui`]
let categoryDescription = [`"Mask Timer", "&6Mask Timer\n&8Version 1.0\n\n&7Author:&b undonecoffee"`]
let dependencies = [``]
let settings = [`//
    //Mask Timer
    //

    @SwitchProperty({
        name: "&9Toggle",
        description: "Toggles the module &aOn&7/&cOff&7.",
        category: "Mask Timer",
    }) maskTimerToggle = false;

    @SwitchProperty({
        name: "&9Only Show In Terms",
        category: "Mask Timer",
    }) maskTimerOnlyInTerms = false;
     
    @ButtonProperty({name: "&rMove Mask Timer Hui",
        placeholder: "Move",
    category: "Mask Timer"})
    moveMaskTimer() {this.maskTimerGui.open()};
    
`]
