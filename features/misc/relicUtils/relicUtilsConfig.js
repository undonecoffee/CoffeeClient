// look at "EngineerModules/GlobalUtils/template.js" for how to format this file

let categoryName = [`Relic Utils`]
let guis = [`relicSpawnTimer`]
let categoryDescription = [`"Relic Utils", "&6Relic Utils\n&8Version 1.0\n\n&7Author:&b undonecoffee"`]
let dependencies = [`"Move Relic Spawn Timer","&9Toggle Relic Spawn Timer"/"Spawn Timer Time","&9Toggle Relic Spawn Timer"`]
let settings = [`//
    //Relic Utils
    //

    @SwitchProperty({
        name: "&9Toggle",
        description: "Toggles the module &aOn&7/&cOff&7.",
        category: "Relic Utils",
    }) relicUtilsToggle = false;

    @SwitchProperty({
        name: "&9Toggle Relic Spawn Timer",
        category: "Relic Utils",
        subcategory: "Relic Spawn Timer",
    }) relicSpawnTimerToggle = false;

    
	@TextProperty({name: "Spawn Timer Time",
        description: "ticks into p5 to show the spawn timer\nDefault is 42\nLeap relics are 55",
    category: "Relic Utils", subcategory: "Relic Spawn Timer"
    }) relicSpawnTime = "42";
     
    @ButtonProperty({name: "Move Relic Spawn Timer",
        placeholder: "Move",
    category: "Relic Utils", subcategory: "Relic Spawn Timer"})
    moveRelicSpawnTimer() {this.relicSpawnTimer.open()};

    @SwitchProperty({
        name: "&9Toggle Relic Time",
        description: "Shows how long it took to place your relic",
        category: "Relic Utils",
        subcategory: "Relic Times",
    }) relicTimeToggle = false;

    @SwitchProperty({
        name: "Show Every Relic",
        description: "Shows how long each relic took to place",
        category: "Relic Utils",
        subcategory: "Relic Times",
    }) everyRelicTimeToggle = false;

    @SwitchProperty({
        name: "Announce Bad Relics In Chat",
        description: "If somone has a bad relic, its auto-pastes into party chat.",
        category: "Relic Utils",
        subcategory: "Relic Times",
    }) announceBadRelic = false;
    
`]
