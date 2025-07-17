// import {
//     @ParagraphProperty,
//     @ButtonProperty,
//     @CheckboxProperty,
//     @ColorProperty,
//     @PercentSliderProperty,
//     @SelectorProperty,
//     @SwitchProperty,
//     @TextProperty,
//     @Vigilant,
//     @SliderProperty,
//     @NumberProperty,
//     @DecimalSliderProperty,
//     Color,
// } from "../../../globalUtils/Vigilance";
//
// @Vigilant("terms", "EngineerModules", {
//     getCategoryComparator: () => (a, b) => {
//         const categories = [
//             "Positional Alerts",
//             "Term Times",
//             "Term Info",
//             "Section Times",
//             "Movement Timer"
//         ];
//         return categories.indexOf(a.name) - categories.indexOf(b.name);
//     }
// })
// class Settings {
//     termInfoGui = new Gui()
//     sectionTimesGui = new Gui()
//     constructor() {
//         this.initialize(this);
//         this.setCategoryDescription("Positional Alerts", "&6Positional Alerts\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\n&c Run /posalerts to get started")
//         this.setCategoryDescription("Term Times", "&6Term Times\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\n&3Numbers &7took &e2.61s &7| &cFC: &e410 &7| &7avg: &e170 &7| &abest: &e120\n\n&3Panes &7took &e1.5s &7| &cFC: &e325 &7| &7avg: &e130 &7| &abest: &e90\n\n\n\n\n\n\n&4&kOOOOOO&c DOES NOT WORK &4&kOOOOOO\n\n\n\n\n")
//         this.setCategoryDescription("Term Info", "&6Term Info\n&8Version 1.0\n\n&7Author:&b undonecoffee")
//         this.setCategoryDescription("Section Times", "&6Section Times\n&8Version 1.0\n\n&7Author:&b undonecoffee")
//         this.setCategoryDescription("Movement Timer", "&6Movement Timer\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\nTime from leap to location you set\n&8Commands\n&3/mt x1, x2, y1, y2, z1, z2&8 to set location\n&3/mt start &8simulates start of terms")
//
//         this.addDependency("&9Assume i3", "&cShow advanced options")
//         this.addDependency("&9Assume i4", "&cShow advanced options")
//         undefined
//     }
//
//     //Positional Alerts
//
//     @SwitchProperty({
//         name: "Debug Render",
//         description: "Renders names and outlines of the alerts",
//         category: "Positional Alerts",
//     }) DebugRender = false;
//     //
//     //TermInfo
//     //
//
//     @SwitchProperty({
//         name: "&9Toggle",
//         description: "Toggles the module &aOn&7/&cOff&7.",
//         category: "Term Times",
//     }) termTimesToggle = false;
//
//     @SwitchProperty({
//         name: "&3Send Times In Chat",
//         description: "Sends your party a list of term times",
//         category: "Term Times",
//     }) normalChatToggle = false;
//
//     @SwitchProperty({
//         name: "&3Show Prediction",
//         description: "Gives a prediction of how long your term will take",
//         category: "Term Times",
//     }) predictionToggle = false;
//
//     @SwitchProperty({
//         name: "&3Send Prediction In Chat",
//         description: "Sends your party a prediction of how long your term will take",
//         category: "Term Times",
//     }) predictionChatToggle = false;
//     //
//     //TermInfo
//     //
//
//     @SwitchProperty({
//         name: "&9Toggle",
//         description: "Toggles the module &aOn&7/&cOff&7.",
//         category: "Term Info",
//     }) termInfoToggle = false;
//
//     @ButtonProperty({name: "&rMove term info gui",
//         placeholder: "Move",
//     category: "Term Info"})
//     moveTermInfo() {this.termInfoGui.open()};
//
//     @SwitchProperty({
//         name: "&9Simple",
//         description: "Shows ",
//         category: "Term Info",
//     }) simpleToggle = false;
//
//     @SwitchProperty({
//         name: "&cShow advanced options",
//         category: "Term Info",
//     }) showAdvancedOptions = false;
//
//     @SwitchProperty({
//         name: "&9Assume i2",
//         description: "Assumes 2nd dev will be done in 1st section",
//         category: "Term Info",
//     }) assumeI2 = false;
//
//     @SwitchProperty({
//         name: "&9Assume i3",
//         description: "Assumes 3rd dev will be done in under 3s",
//         category: "Term Info",
//     }) assumeI3 = false;
//
//     @SwitchProperty({
//         name: "&9Assume i4",
//         description: "Assumes 4th dev be done in under 9s",
//         category: "Term Info",
//     }) assumeI4 = false;
//     //
//     //Section Times
//     //
//
//     @SwitchProperty({
//         name: "&9Toggle",
//         description: "Toggles the module &aOn&7/&cOff&7.",
//         category: "Section Times",
//     }) sectionTimesToggle = false;
//
//     @ButtonProperty({name: "Move Section Times Gui",
//         placeholder: "Move",
//     category: "Section Times"})
//     movesectionTimesGui() {this.sectionTimesGui.open()};
//     //
//     //Movement Timer
//     //
//
//     @SwitchProperty({
//         name: "&9Toggle",
//         description: "Toggles the module &aOn&7/&cOff&7.",
//         category: "Movement Timer",
//     }) movementTimerToggle = false;
//
//     //
// }
//
// export default new Settings();
//
// import settings from "./index"
// register("command", () => settings.openGUI()).setName("terms")

