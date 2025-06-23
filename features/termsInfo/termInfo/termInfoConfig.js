// look at "EngineerModules/GlobalUtils/template.js" for how to format this file

let categoryName = [`Term Info`]
let guis = [`termInfoGui`]
let categoryDescription = [`"Term Info", "&6Term Info\n&8Version 1.0\n\n&7Author:&b undonecoffee"`]
let dependencies = [`"&9Assume i3", "&cShow advanced options"/"&9Assume i4", "&cShow advanced options"`]
let settings = [`//
    //TermInfo
    //

    @SwitchProperty({
        name: "&9Toggle",
        description: "Toggles the module &aOn&7/&cOff&7.",
        category: "Term Info",
    }) termInfoToggle = false;

    @ButtonProperty({name: "&rMove term info gui",
        placeholder: "Move",
    category: "Term Info"})
    moveTermInfo() {this.termInfoGui.open()};

    @SwitchProperty({
        name: "&9Simple",
        description: "Shows ",
        category: "Term Info",
    }) simpleToggle = false;

    @SwitchProperty({
        name: "&cShow advanced options",
        category: "Term Info",
    }) showAdvancedOptions = false;

    @SwitchProperty({
        name: "&9Assume i2",
        description: "Assumes 2nd dev will be done in 1st section",
        category: "Term Info",
    }) assumeI2 = false;

    @SwitchProperty({
        name: "&9Assume i3",
        description: "Assumes 3rd dev will be done in under 3s",
        category: "Term Info",
    }) assumeI3 = false;

    @SwitchProperty({
        name: "&9Assume i4",
        description: "Assumes 4th dev be done in under 9s",
        category: "Term Info",
    }) assumeI4 = false;
    
`]
