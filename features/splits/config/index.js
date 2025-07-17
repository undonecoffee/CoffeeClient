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
// @Vigilant("splits", "EngineerModules", {
//     getCategoryComparator: () => (a, b) => {
//         const categories = [
//             "Splits",
//             "Sub Splits",
//             "Predev Splits",
//             "Pad Timers"
//         ];
//         return categories.indexOf(a.name) - categories.indexOf(b.name);
//     }
// })
// class Settings {
//     splitsGui = new Gui()
//     subSplitsGui = new Gui()
//     constructor() {
//         this.initialize(this);
//         this.setCategoryDescription("Splits", "&6Sub Spltis\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\n&9Tick accurate splits")
//         this.setCategoryDescription("Sub Splits", "&6Sub Splits\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\n&cShows run splits in extreme detail\n\n\n\n\n\n\n&4&kOOOOOO&c DOES NOT WORK &4&kOOOOOO\n\n\n\n\n")
//         this.setCategoryDescription("Predev Splits", "&6Predev Splits\n&8Version 1.0\n\n&7Author:&b undonecoffee")
//         this.setCategoryDescription("Pad Timers", "&6Pad Timers\n&8Version 1.0\n\n&7Author:&b undonecoffee")
//
//         this.addDependency("&cRemove Names", "&cShow advanced options")
//         this.addDependency("&3Show Pace", "&cShow advanced options")
//         this.addDependency("&5Only Show Ticks", "&cShow advanced options"
// )
//         this.addDependency("&9Show Enter", "&cShow advanced options")
//         this.addDependency("&eSend Afer Run", "&cShow advanced options")
//         this.addDependency("&dDont Reset On World Load", "&cShow advanced options")
//         this.hidePropertyIf("Current f7 profile", (this.floor !== 0)) // hide on start
//         this.hidePropertyIf("Current m7 profile", (this.floor !== 1)) // hide on start
//
//
//         this.hidePropertyIf(["&0&0&aOpen","&0&0&cCamp","&0&0&dPortal","&0&0&dPortal","&0&0&5Maxor","&0&0&bStorm","&0&0&6Terms","&0&0&eGoldor","&0&0&cNecron","&0&0&dAnimation"], (this.floor !== 0 || this.f7Profile !== 0))
// 		setTimeout(() => this.hidePropertyIf(["&0&1&aOpen","&0&1&cCamp","&0&1&dPortal","&0&1&dPortal","&0&1&5Maxor","&0&1&bStorm","&0&1&6Terms","&0&1&eGoldor","&0&1&cNecron","&0&1&dAnimation"], (this.floor !== 0 || this.f7Profile !== 1)), 10);
// 		setTimeout(() => this.hidePropertyIf(["&0&2&aOpen","&0&2&cCamp","&0&2&dPortal","&0&2&dPortal","&0&2&5Maxor","&0&2&bStorm","&0&2&6Terms","&0&2&eGoldor","&0&2&cNecron","&0&2&dAnimation"], (this.floor !== 0 || this.f7Profile !== 2)), 20);
// 		setTimeout(() => this.hidePropertyIf(["&1&0&aOpen","&1&0&cCamp","&1&0&dPortal","&1&0&dPortal","&1&0&5Maxor","&1&0&bStorm","&1&0&6Terms","&1&0&eGoldor","&1&0&cNecron","&1&0&dDragons"], (this.floor !== 1 || this.m7Profile !== 0)), 30);
// 		setTimeout(() => this.hidePropertyIf(["&1&1&aOpen","&1&1&cCamp","&1&1&dPortal","&1&1&dPortal","&1&1&5Maxor","&1&1&bStorm","&1&1&6Terms","&1&1&eGoldor","&1&1&cNecron","&1&1&dDragons"], (this.floor !== 1 || this.m7Profile !== 1)), 40);
// 		setTimeout(() => this.hidePropertyIf(["&1&2&aOpen","&1&2&cCamp","&1&2&dPortal","&1&2&dPortal","&1&2&5Maxor","&1&2&bStorm","&1&2&6Terms","&1&2&eGoldor","&1&2&cNecron","&1&2&dDragons"], (this.floor !== 1 || this.m7Profile !== 2)), 50);
//
//         this.registerListener('Floor', t => {if (t == 0) {
//                 this.showProperty("Current f7 profile")
//                 this.hideProperty("Current m7 profile")
// 				this.hideProperty(["&1&0&aOpen","&1&0&cCamp","&1&0&dPortal","&1&0&dPortal","&1&0&5Maxor","&1&0&bStorm","&1&0&6Terms","&1&0&eGoldor","&1&0&cNecron","&1&0&dDragons"])
// 				this.hideProperty(["&1&1&aOpen","&1&1&cCamp","&1&1&dPortal","&1&1&dPortal","&1&1&5Maxor","&1&1&bStorm","&1&1&6Terms","&1&1&eGoldor","&1&1&cNecron","&1&1&dDragons"])
// 				this.hideProperty(["&1&2&aOpen","&1&2&cCamp","&1&2&dPortal","&1&2&dPortal","&1&2&5Maxor","&1&2&bStorm","&1&2&6Terms","&1&2&eGoldor","&1&2&cNecron","&1&2&dDragons"])
//
// 				switch (this.f7Profile) {
// 					case 0:this.showProperty(["&0&0&aOpen","&0&0&cCamp","&0&0&dPortal","&0&0&dPortal","&0&0&5Maxor","&0&0&bStorm","&0&0&6Terms","&0&0&eGoldor","&0&0&cNecron","&0&0&dAnimation"])
// 						this.hideProperty(["&0&1&aOpen","&0&1&cCamp","&0&1&dPortal","&0&1&dPortal","&0&1&5Maxor","&0&1&bStorm","&0&1&6Terms","&0&1&eGoldor","&0&1&cNecron","&0&1&dAnimation"])
// 						this.hideProperty(["&0&2&aOpen","&0&2&cCamp","&0&2&dPortal","&0&2&dPortal","&0&2&5Maxor","&0&2&bStorm","&0&2&6Terms","&0&2&eGoldor","&0&2&cNecron","&0&2&dAnimation"]); break
// 					case 1:this.hideProperty(["&0&0&aOpen","&0&0&cCamp","&0&0&dPortal","&0&0&dPortal","&0&0&5Maxor","&0&0&bStorm","&0&0&6Terms","&0&0&eGoldor","&0&0&cNecron","&0&0&dAnimation"])
// 						this.showProperty(["&0&1&aOpen","&0&1&cCamp","&0&1&dPortal","&0&1&dPortal","&0&1&5Maxor","&0&1&bStorm","&0&1&6Terms","&0&1&eGoldor","&0&1&cNecron","&0&1&dAnimation"])
// 						this.hideProperty(["&0&2&aOpen","&0&2&cCamp","&0&2&dPortal","&0&2&dPortal","&0&2&5Maxor","&0&2&bStorm","&0&2&6Terms","&0&2&eGoldor","&0&2&cNecron","&0&2&dAnimation"]); break
// 					case 2:this.hideProperty(["&0&0&aOpen","&0&0&cCamp","&0&0&dPortal","&0&0&dPortal","&0&0&5Maxor","&0&0&bStorm","&0&0&6Terms","&0&0&eGoldor","&0&0&cNecron","&0&0&dAnimation"])
// 						this.hideProperty(["&0&1&aOpen","&0&1&cCamp","&0&1&dPortal","&0&1&dPortal","&0&1&5Maxor","&0&1&bStorm","&0&1&6Terms","&0&1&eGoldor","&0&1&cNecron","&0&1&dAnimation"])
// 						this.showProperty(["&0&2&aOpen","&0&2&cCamp","&0&2&dPortal","&0&2&dPortal","&0&2&5Maxor","&0&2&bStorm","&0&2&6Terms","&0&2&eGoldor","&0&2&cNecron","&0&2&dAnimation"]); break
// 			}} else {
//                 this.showProperty("Current m7 profile")
//                 this.hideProperty("Current f7 profile")
// 				this.hideProperty(["&0&0&aOpen","&0&0&cCamp","&0&0&dPortal","&0&0&dPortal","&0&0&5Maxor","&0&0&bStorm","&0&0&6Terms","&0&0&eGoldor","&0&0&cNecron","&0&0&dAnimation"])
// 				this.hideProperty(["&0&1&aOpen","&0&1&cCamp","&0&1&dPortal","&0&1&dPortal","&0&1&5Maxor","&0&1&bStorm","&0&1&6Terms","&0&1&eGoldor","&0&1&cNecron","&0&1&dAnimation"])
// 				this.hideProperty(["&0&2&aOpen","&0&2&cCamp","&0&2&dPortal","&0&2&dPortal","&0&2&5Maxor","&0&2&bStorm","&0&2&6Terms","&0&2&eGoldor","&0&2&cNecron","&0&2&dAnimation"])
//
// 				switch (this.m7Profile) {
// 					case 0:this.showProperty(["&1&0&aOpen","&1&0&cCamp","&1&0&dPortal","&1&0&dPortal","&1&0&5Maxor","&1&0&bStorm","&1&0&6Terms","&1&0&eGoldor","&1&0&cNecron","&1&0&dDragons"])
// 						this.hideProperty(["&1&1&aOpen","&1&1&cCamp","&1&1&dPortal","&1&1&dPortal","&1&1&5Maxor","&1&1&bStorm","&1&1&6Terms","&1&1&eGoldor","&1&1&cNecron","&1&1&dDragons"])
// 						this.hideProperty(["&1&2&aOpen","&1&2&cCamp","&1&2&dPortal","&1&2&dPortal","&1&2&5Maxor","&1&2&bStorm","&1&2&6Terms","&1&2&eGoldor","&1&2&cNecron","&1&2&dDragons"]); break
// 					case 1:this.hideProperty(["&1&0&aOpen","&1&0&cCamp","&1&0&dPortal","&1&0&dPortal","&1&0&5Maxor","&1&0&bStorm","&1&0&6Terms","&1&0&eGoldor","&1&0&cNecron","&1&0&dDragons"])
// 						this.showProperty(["&1&1&aOpen","&1&1&cCamp","&1&1&dPortal","&1&1&dPortal","&1&1&5Maxor","&1&1&bStorm","&1&1&6Terms","&1&1&eGoldor","&1&1&cNecron","&1&1&dDragons"])
// 						this.hideProperty(["&1&2&aOpen","&1&2&cCamp","&1&2&dPortal","&1&2&dPortal","&1&2&5Maxor","&1&2&bStorm","&1&2&6Terms","&1&2&eGoldor","&1&2&cNecron","&1&2&dDragons"]); break
// 					case 2:this.hideProperty(["&1&0&aOpen","&1&0&cCamp","&1&0&dPortal","&1&0&dPortal","&1&0&5Maxor","&1&0&bStorm","&1&0&6Terms","&1&0&eGoldor","&1&0&cNecron","&1&0&dDragons"])
// 						this.hideProperty(["&1&1&aOpen","&1&1&cCamp","&1&1&dPortal","&1&1&dPortal","&1&1&5Maxor","&1&1&bStorm","&1&1&6Terms","&1&1&eGoldor","&1&1&cNecron","&1&1&dDragons"])
// 						this.showProperty(["&1&2&aOpen","&1&2&cCamp","&1&2&dPortal","&1&2&dPortal","&1&2&5Maxor","&1&2&bStorm","&1&2&6Terms","&1&2&eGoldor","&1&2&cNecron","&1&2&dDragons"]); break
// 				}}setTimeout(() => ChatLib.command("splits", true), 10);
// 			});
//         this.registerListener('Current f7 profile', t => {
// 			setTimeout(() => {switch (this.f7Profile) {
// 				case 0:this.showProperty(["&0&0&aOpen","&0&0&cCamp","&0&0&dPortal","&0&0&dPortal","&0&0&5Maxor","&0&0&bStorm","&0&0&6Terms","&0&0&eGoldor","&0&0&cNecron","&0&0&dAnimation"])
// 					this.hideProperty(["&0&1&aOpen","&0&1&cCamp","&0&1&dPortal","&0&1&dPortal","&0&1&5Maxor","&0&1&bStorm","&0&1&6Terms","&0&1&eGoldor","&0&1&cNecron","&0&1&dAnimation"])
// 					this.hideProperty(["&0&2&aOpen","&0&2&cCamp","&0&2&dPortal","&0&2&dPortal","&0&2&5Maxor","&0&2&bStorm","&0&2&6Terms","&0&2&eGoldor","&0&2&cNecron","&0&2&dAnimation"]); break
// 				case 1:this.hideProperty(["&0&0&aOpen","&0&0&cCamp","&0&0&dPortal","&0&0&dPortal","&0&0&5Maxor","&0&0&bStorm","&0&0&6Terms","&0&0&eGoldor","&0&0&cNecron","&0&0&dAnimation"])
// 					this.showProperty(["&0&1&aOpen","&0&1&cCamp","&0&1&dPortal","&0&1&dPortal","&0&1&5Maxor","&0&1&bStorm","&0&1&6Terms","&0&1&eGoldor","&0&1&cNecron","&0&1&dAnimation"])
// 					this.hideProperty(["&0&2&aOpen","&0&2&cCamp","&0&2&dPortal","&0&2&dPortal","&0&2&5Maxor","&0&2&bStorm","&0&2&6Terms","&0&2&eGoldor","&0&2&cNecron","&0&2&dAnimation"]); break
// 				case 2:this.hideProperty(["&0&0&aOpen","&0&0&cCamp","&0&0&dPortal","&0&0&dPortal","&0&0&5Maxor","&0&0&bStorm","&0&0&6Terms","&0&0&eGoldor","&0&0&cNecron","&0&0&dAnimation"])
// 					this.hideProperty(["&0&1&aOpen","&0&1&cCamp","&0&1&dPortal","&0&1&dPortal","&0&1&5Maxor","&0&1&bStorm","&0&1&6Terms","&0&1&eGoldor","&0&1&cNecron","&0&1&dAnimation"])
// 					this.showProperty(["&0&2&aOpen","&0&2&cCamp","&0&2&dPortal","&0&2&dPortal","&0&2&5Maxor","&0&2&bStorm","&0&2&6Terms","&0&2&eGoldor","&0&2&cNecron","&0&2&dAnimation"]); break
// 			}}, 10);
//             setTimeout(() => ChatLib.command("splits", true), 20);
//         });
//         this.registerListener('Current m7 profile', t => {
// 			setTimeout(() => { switch (this.m7Profile) {
// 				case 0:this.showProperty(["&1&0&aOpen","&1&0&cCamp","&1&0&dPortal","&1&0&dPortal","&1&0&5Maxor","&1&0&bStorm","&1&0&6Terms","&1&0&eGoldor","&1&0&cNecron","&1&0&dDragons"])
// 					this.hideProperty(["&1&1&aOpen","&1&1&cCamp","&1&1&dPortal","&1&1&dPortal","&1&1&5Maxor","&1&1&bStorm","&1&1&6Terms","&1&1&eGoldor","&1&1&cNecron","&1&1&dDragons"])
// 					this.hideProperty(["&1&2&aOpen","&1&2&cCamp","&1&2&dPortal","&1&2&dPortal","&1&2&5Maxor","&1&2&bStorm","&1&2&6Terms","&1&2&eGoldor","&1&2&cNecron","&1&2&dDragons"]); break
// 				case 1:this.hideProperty(["&1&0&aOpen","&1&0&cCamp","&1&0&dPortal","&1&0&dPortal","&1&0&5Maxor","&1&0&bStorm","&1&0&6Terms","&1&0&eGoldor","&1&0&cNecron","&1&0&dDragons"])
// 					this.showProperty(["&1&1&aOpen","&1&1&cCamp","&1&1&dPortal","&1&1&dPortal","&1&1&5Maxor","&1&1&bStorm","&1&1&6Terms","&1&1&eGoldor","&1&1&cNecron","&1&1&dDragons"])
// 					this.hideProperty(["&1&2&aOpen","&1&2&cCamp","&1&2&dPortal","&1&2&dPortal","&1&2&5Maxor","&1&2&bStorm","&1&2&6Terms","&1&2&eGoldor","&1&2&cNecron","&1&2&dDragons"]); break
// 				case 2:this.hideProperty(["&1&0&aOpen","&1&0&cCamp","&1&0&dPortal","&1&0&dPortal","&1&0&5Maxor","&1&0&bStorm","&1&0&6Terms","&1&0&eGoldor","&1&0&cNecron","&1&0&dDragons"])
// 					this.hideProperty(["&1&1&aOpen","&1&1&cCamp","&1&1&dPortal","&1&1&dPortal","&1&1&5Maxor","&1&1&bStorm","&1&1&6Terms","&1&1&eGoldor","&1&1&cNecron","&1&1&dDragons"])
// 					this.showProperty(["&1&2&aOpen","&1&2&cCamp","&1&2&dPortal","&1&2&dPortal","&1&2&5Maxor","&1&2&bStorm","&1&2&6Terms","&1&2&eGoldor","&1&2&cNecron","&1&2&dDragons"]); break
// 			}}, 10);
//             setTimeout(() => ChatLib.command("splits", true), 20);
//         });
//     }
//
//     //
//     //Splits
//     //
//
//     @SwitchProperty({
//         name: "&9Toggle",
//         description: "Toggles the module &aOn&7/&cOff&7.",
//         category: "Splits",
//     }) splitsToggle = false;
//
//     @ButtonProperty({name: "&0&rMove splits gui",
//         placeholder: "Move",
//     category: "Splits"})
//     moveSplits() {this.splitsGui.open()};
//
//     @SwitchProperty({
//         name: "&cShow advanced options",
//         category: "Splits",
//     }) showAdvancedOptions = false;
//
//     @SwitchProperty({
//         name: "&cRemove Names",
//         description: "Removes the names form splits",
//         category: "Splits",
//     }) removeNames = false;
//
//     @SwitchProperty({
//         name: "&5Only Show Ticks",
//         description: "Only shows the tick accurate splits",
//         category: "Splits",
//     }) onlyTicks = false;
//
//     @SwitchProperty({
//         name: "&3Show Pace",
//         description: "Shows prediction of how long the run will take",
//         category: "Splits",
//     }) showPace = false;
//
//     @SwitchProperty({
//         name: "&9Show Enter",
//         description: "Shows how long it took to enter boss",
//         category: "Splits",
//     }) showEnter = false;
//
//     @SwitchProperty({
//         name: "&eSend Afer Run",
//         description: "Sends all splits after the run ends",
//         category: "Splits",
//     }) sendAfterRun = false;
//
//     @SwitchProperty({
//         name: "&dDont Reset On World Load",
//         description: "Shows splits until the next run starts",
//         category: "Splits",
//     }) notWorldLoad = false;
//
//     @SelectorProperty({
//         name: "Floor",
//         category: "Splits",
// 		subcategory: "Pace",
// 		options: ["F7", "M7"]
//     }) floor = 0;
//
//     @SelectorProperty({
//         name: "Current f7 profile",
//         category: "Splits",
// 		subcategory: "Pace",
// 		options: ["Casual", "Party finder", "Custom"]
//     }) f7Profile = 0;
//
//     @SelectorProperty({
//         name: "Current m7 profile",
//         category: "Splits",
// 		subcategory: "Pace",
// 		options: ["Casual", "Party finder", "Custom"]
//     }) m7Profile = 0;
//
//     // f7 casual
// 	@TextProperty({name: "&0&0&aOpen",      category: "Splits", subcategory: "Pace"}) f7CasualOpen = "26";
// 	@TextProperty({name: "&0&0&cCamp",      category: "Splits", subcategory: "Pace"}) f7CasualCamp = "65";
// 	@TextProperty({name: "&0&0&dPortal",    category: "Splits", subcategory: "Pace"}) f7CasualPortal = "4.2";
// 	@TextProperty({name: "&0&0&5Maxor",     category: "Splits", subcategory: "Pace"}) f7CasualMaxor = "25.5";
// 	@TextProperty({name: "&0&0&bStorm",     category: "Splits", subcategory: "Pace"}) f7CasualStorm = "45.5";
// 	@TextProperty({name: "&0&0&6Terms",     category: "Splits", subcategory: "Pace"}) f7CasualTerms = "45";
// 	@TextProperty({name: "&0&0&eGoldor",    category: "Splits", subcategory: "Pace"}) f7CasualGoldor = "8.5";
// 	@TextProperty({name: "&0&0&cNecron",    category: "Splits", subcategory: "Pace"}) f7CasualNecron = "30.3";
// 	@TextProperty({name: "&0&0&dAnimation", category: "Splits", subcategory: "Pace"}) f7CasualAnimation = "4.2";
//     // f7 party finder
// 	@TextProperty({name: "&0&1&aOpen",      category: "Splits", subcategory: "Pace"}) f7PartyFinderOpen = "36";
// 	@TextProperty({name: "&0&1&cCamp",      category: "Splits", subcategory: "Pace"}) f7PartyFinderCamp = "72";
// 	@TextProperty({name: "&0&1&dPortal",    category: "Splits", subcategory: "Pace"}) f7PartyFinderPortal = "4.2";
// 	@TextProperty({name: "&0&1&5Maxor",     category: "Splits", subcategory: "Pace"}) f7PartyFinderMaxor = "25.5";
// 	@TextProperty({name: "&0&1&bStorm",     category: "Splits", subcategory: "Pace"}) f7PartyFinderStorm = "50";
// 	@TextProperty({name: "&0&1&6Terms",     category: "Splits", subcategory: "Pace"}) f7PartyFinderTerms = "52";
// 	@TextProperty({name: "&0&1&eGoldor",    category: "Splits", subcategory: "Pace"}) f7PartyFinderGoldor = "9.2";
// 	@TextProperty({name: "&0&1&cNecron",    category: "Splits", subcategory: "Pace"}) f7PartyFinderNecron = "30.3";
// 	@TextProperty({name: "&0&1&dAnimation", category: "Splits", subcategory: "Pace"}) f7PartyFinderAnimation = "4.2";
//     // f7 custom
// 	@TextProperty({name: "&0&2&aOpen",      category: "Splits", subcategory: "Pace"}) f7CustomOpen = "18";
// 	@TextProperty({name: "&0&2&cCamp",      category: "Splits", subcategory: "Pace"}) f7CustomCamp = "82";
// 	@TextProperty({name: "&0&2&dPortal",    category: "Splits", subcategory: "Pace"}) f7CustomPortal = "4.2";
// 	@TextProperty({name: "&0&2&5Maxor",     category: "Splits", subcategory: "Pace"}) f7CustomMaxor = "27.5";
// 	@TextProperty({name: "&0&2&bStorm",     category: "Splits", subcategory: "Pace"}) f7CustomStorm = "45.5";
// 	@TextProperty({name: "&0&2&6Terms",     category: "Splits", subcategory: "Pace"}) f7CustomTerms = "65";
// 	@TextProperty({name: "&0&2&eGoldor",    category: "Splits", subcategory: "Pace"}) f7CustomGoldor = "6.5";
// 	@TextProperty({name: "&0&2&cNecron",    category: "Splits", subcategory: "Pace"}) f7CustomNecron = "30.3";
// 	@TextProperty({name: "&0&2&dAnimation", category: "Splits", subcategory: "Pace"}) f7CustomAnimation = "4.2";
//
//
//     // m7 casual
// 	@TextProperty({name: "&1&0&aOpen",    category: "Splits", subcategory: "Pace"}) m7CasualOpen = "23";
// 	@TextProperty({name: "&1&0&cCamp",    category: "Splits", subcategory: "Pace"}) m7CasualCamp = "65";
// 	@TextProperty({name: "&1&0&dPortal",  category: "Splits", subcategory: "Pace"}) m7CasualPortal = "4.2";
// 	@TextProperty({name: "&1&0&5Maxor",   category: "Splits", subcategory: "Pace"}) m7CasualMaxor = "26";
// 	@TextProperty({name: "&1&0&bStorm",   category: "Splits", subcategory: "Pace"}) m7CasualStorm = "48";
// 	@TextProperty({name: "&1&0&6Terms",   category: "Splits", subcategory: "Pace"}) m7CasualTerms = "42";
// 	@TextProperty({name: "&1&0&eGoldor",  category: "Splits", subcategory: "Pace"}) m7CasualGoldor = "9.5";
// 	@TextProperty({name: "&1&0&cNecron",  category: "Splits", subcategory: "Pace"}) m7CasualNecron = "32.3";
// 	@TextProperty({name: "&1&0&dDragons", category: "Splits", subcategory: "Pace"}) m7CasualDragons = "57.5";
//     // m7 party finder
// 	@TextProperty({name: "&1&1&aOpen",    category: "Splits", subcategory: "Pace"}) m7PartyFinderOpen = "36";
// 	@TextProperty({name: "&1&1&cCamp",    category: "Splits", subcategory: "Pace"}) m7PartyFinderCamp = "72";
// 	@TextProperty({name: "&1&1&dPortal",  category: "Splits", subcategory: "Pace"}) m7PartyFinderPortal = "4.2";
// 	@TextProperty({name: "&1&1&5Maxor",   category: "Splits", subcategory: "Pace"}) m7PartyFinderMaxor = "27";
// 	@TextProperty({name: "&1&1&bStorm",   category: "Splits", subcategory: "Pace"}) m7PartyFinderStorm = "52";
// 	@TextProperty({name: "&1&1&6Terms",   category: "Splits", subcategory: "Pace"}) m7PartyFinderTerms = "52";
// 	@TextProperty({name: "&1&1&eGoldor",  category: "Splits", subcategory: "Pace"}) m7PartyFinderGoldor = "10.2";
// 	@TextProperty({name: "&1&1&cNecron",  category: "Splits", subcategory: "Pace"}) m7PartyFinderNecron = "34.3";
// 	@TextProperty({name: "&1&1&dDragons", category: "Splits", subcategory: "Pace"}) m7PartyFinderDragons = "58.7";
//     // m7 custom
// 	@TextProperty({name: "&1&2&aOpen",    category: "Splits", subcategory: "Pace"}) m7CustomOpen = "18";
// 	@TextProperty({name: "&1&2&cCamp",    category: "Splits", subcategory: "Pace"}) m7CustomCamp = "82";
// 	@TextProperty({name: "&1&2&dPortal",  category: "Splits", subcategory: "Pace"}) m7CustomPortal = "4.2";
// 	@TextProperty({name: "&1&2&5Maxor",   category: "Splits", subcategory: "Pace"}) m7CustomMaxor = "29.5";
// 	@TextProperty({name: "&1&2&bStorm",   category: "Splits", subcategory: "Pace"}) m7CustomStorm = "47.5";
// 	@TextProperty({name: "&1&2&6Terms",   category: "Splits", subcategory: "Pace"}) m7CustomTerms = "65";
// 	@TextProperty({name: "&1&2&eGoldor",  category: "Splits", subcategory: "Pace"}) m7CustomGoldor = "8.5";
// 	@TextProperty({name: "&1&2&cNecron",  category: "Splits", subcategory: "Pace"}) m7CustomNecron = "31.3";
// 	@TextProperty({name: "&1&2&dDragons", category: "Splits", subcategory: "Pace"}) m7CustomDragons = "59";
//
//
//
//     //
//     //
//     //SubSplits
//     //
//
//     @SwitchProperty({
//         name: "&9Toggle",
//         description: "Toggles the module &aOn&7/&cOff&7.",
//         category: "Sub Splits",
//     }) subSplitsToggle = false;
//
// 	@SelectorProperty({
// 		name: "&7Number of splits shown at a time",
// 		category: "Sub Splits",
// 		options: ["1", "2", "3", "All"]
// 	})
// 	numberOfSplitsShown = 0;
//
// 	@SelectorProperty({
// 		name: "&aBlood Rush",
// 		category: "Sub Splits",
// 		subcategory: "Splits",
// 		options: ["Off", "Show each room", "Show each key/door              "]
// 	})
// 	brSubSplit = 0;
//
// 	@SelectorProperty({
// 		name: "&cBlood Camp",
// 		category: "Sub Splits",
// 		subcategory: "Splits",
// 		options: ["Off", "Show move and average         ", "Show each mob"]
// 	})
// 	campSubSplit = 0;
//
// 	@SelectorProperty({
// 		name: "&dPortal",
// 		category: "Sub Splits",
// 		subcategory: "Splits",
// 		options: ["Off", "Show spawn and enter           "]
// 	})
// 	portalSubSplit = 0;
//
// 	@SelectorProperty({
// 		name: "&5Maxor",
// 		category: "Sub Splits",
// 		subcategory: "Splits",
// 		options: ["Off", "Show move only", "Show move and both crystals", "Show each crystal time"]
// 	})
// 	maxorSubSplit = 0;
//
// 	@SelectorProperty({
// 		name: "&bStorm",
// 		category: "Sub Splits",
// 		subcategory: "Splits",
// 		options: ["Off", "Show dps only", "Show dps and end only", "Show move and dps                 "]
// 	})
// 	stormSubSplit = 0;
//
// 	@SelectorProperty({
// 		name: "&6Terms",
// 		category: "Sub Splits",
// 		subcategory: "Splits",
// 		options: ["Off", "Show sections                         "]
// 	})
// 	termsSubSplit = 0;
//
// 	@SelectorProperty({
// 		name: "&eGoldor",
// 		category: "Sub Splits",
// 		subcategory: "Splits",
// 		options: ["Off", "Show Total leaps", "Show each leap                       "]
// 	})
// 	goldorsSubSplit = 0;
//
// 	@SelectorProperty({
// 		name: "&cNecron",
// 		category: "Sub Splits",
// 		subcategory: "Splits",
// 		options: ["Off", "needs testing idk                    "]
// 	})
// 	necronSubSplit = 0;
//
// 	@SelectorProperty({
// 		name: "&dRelics",
// 		category: "Sub Splits",
// 		subcategory: "Splits",
// 		options: ["Off", "Show total relics only", "Show dragon kill time", "Show each relic                     "]
// 	})
// 	dragonsSubSplit = 0;
//
//
//     //
//     //Predev Splits
//     //
//
//     @SwitchProperty({
//         name: "Toggle Times",
//         description: "Shows how long it took for each part of predev &4BETA",
//         category: "Predev Splits",
//     }) pdSplitsToggle = false;
//
//     @SwitchProperty({
//         name: "Show Stair Lines",
//         description: "Shows lines on the stairs to get down to p2",
//         category: "Predev Splits",
//     }) stairLinesToggle = false;
//     //
//     // Pad Timers
//
// 	@SwitchProperty({name: "&dToggle Purple",
//     category: "Pad Timers"}) pruplePad = false;
//
// 	@SwitchProperty({name: "&aToggle Green",
//     category: "Pad Timers"}) greenPad = false;
//
// 	@SwitchProperty({name: "&eToggle Yellow",
//     category: "Pad Timers"}) yellowPad = false;
// }
//
// export default new Settings();
//
// import settings from "./index"
// register("command", () => settings.openGUI()).setName("splits")

