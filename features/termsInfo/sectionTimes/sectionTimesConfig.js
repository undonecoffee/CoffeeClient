// look at "EngineerModules/GlobalUtils/template.js" for how to format this file

let categoryName = [`Section Times`]
let guis = [`sectionTimesGui`]
let categoryDescription = [`"Section Times", "&6Section Times\n&8Version 1.0\n\n&7Author:&b undonecoffee"`]
let dependencies = [``]
let settings = [`//
    //Section Times
    //

    @SwitchProperty({
        name: "&9Toggle",
        description: "Toggles the module &aOn&7/&cOff&7.",
        category: "Section Times",
    }) sectionTimesToggle = false;

    @ButtonProperty({name: "Move Section Times Gui",
        placeholder: "Move",
    category: "Section Times"})
    movesectionTimesGui() {this.sectionTimesGui.open()};
    
`]
