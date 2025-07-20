import {
    @ParagraphProperty,
    @ButtonProperty,
    @CheckboxProperty,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    @SliderProperty,
    @NumberProperty,
    @DecimalSliderProperty,
    Color,
} from "../../../globalUtils/Vigilance";

@Vigilant("misc", "EngineerModules", {
    getCategoryComparator: () => (a, b) => {
        const categories = [
            "Chat Cleaner",
            "Auto Requeue",
            "Relic Utils",
            "Mob Highlight",
            "Sheep Hider",
            "Mask Timer",
            "Auto Bless"
        ];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Settings {
    relicSpawnTimer = new Gui()
    maskTimerGui = new Gui()
    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Chat Cleaner", "&6Chat Cleaner\n&8Version 1.0\n\n&7Author:&b undonecoffee")
        this.setCategoryDescription("Auto Requeue", "&6Auto Requeue\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\n&cLook in controls for the keybind")
        this.setCategoryDescription("Relic Utils", "&6Relic Utils\n&8Version 1.0\n\n&7Author:&b undonecoffee")
        this.setCategoryDescription("Mob Highlight", "&6Mob Highlight\n&8Version 1.0\n\n&7Author:&b undonecoffee")
        this.setCategoryDescription("Sheep Hider", "&6Sheep Hider\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\n&3Disables sheep rendering from a certain distance")
        this.setCategoryDescription("Mask Timer", "&6Mask Timer\n&8Version 1.0\n\n&7Author:&b undonecoffee")
        this.setCategoryDescription("Auto Bless", "&6Auto Bless\n&8Version 3.0\n\n&7Author:&b Legendary_JG")
        
        this.addDependency("Move Relic Spawn Timer","&9Toggle Relic Spawn Timer")
        this.addDependency("Spawn Timer Time","&9Toggle Relic Spawn Timer")
        undefined
    }
    
    //
    // Auto Bless

	@SwitchProperty({name: "Clean Party Messages",
    description: "Makes party messages cleaner",
    category: "Chat Cleaner", subcategory: "Party Chat"}) cleanPartyChat = false;

	@SwitchProperty({name: "Hide Party Messages",
    description: "Hides (leap/melody/300 score) messages",
    category: "Chat Cleaner", subcategory: "Party Chat"}) hidePartyChat = false;
    
	@SwitchProperty({name: "Clean Friend Join Messages",
    description: "Makes Friend Join messages cleaner",
    category: "Chat Cleaner"}) cleanFriendJoin = false;

	@SwitchProperty({name: "Hide Ability Messages",
    description: "Hides cooldowns / ability / 'cant use here' messages",
    category: "Chat Cleaner"}) hideAbilityMessages = false;

	@SwitchProperty({name: "Hide Random Messages",
    description: "Hides 'playing on skyblock profile:' type messages",
    category: "Chat Cleaner"}) hideRandomMessages = false;

	@SwitchProperty({name: "Hide More Random Messages",
    description: "Hides somewhat useful messages but it clogs the chat",
    category: "Chat Cleaner"}) hideMoreRandomMessages = false;

	@SwitchProperty({name: "Hide Boss Messages",
    description: "hides anything starting with '[BOSS] '\nOnly client side so it wont mess with other mods",
    category: "Chat Cleaner", subcategory: "Dungeon"}) hideBossMessages = false;

	@SwitchProperty({name: "Hide More Boss Messages",
    description: "Hides things like crystals and p5 messages",
    category: "Chat Cleaner", subcategory: "Dungeon"}) hideMoreBossMessages = false;

	@SwitchProperty({name: "Hide Dungeon Messages",
    description: "Hides random messages in dungeons",
    category: "Chat Cleaner", subcategory: "Dungeon"}) hideDungeonMessages = false;

	@SwitchProperty({name: "Hide More Dungeon Messages",
    description: "Hides some useful stuff but it clogs the chat so it has to go",
    category: "Chat Cleaner", subcategory: "Dungeon"}) hideMoreDungeonsMessages = false;

	@SwitchProperty({name: "Hide Even More Dungeon Messages",
    description: "Only use if you dont care about the chat",
    category: "Chat Cleaner", subcategory: "Dungeon"}) hideEvenMoreDungeonsMessages = false;
    //
    // Auto Requeue

	@SwitchProperty({name: "Toggle Auto Requeue",
    category: "Auto Requeue"}) AutoRequeueToggle = false;

	@DecimalSliderProperty({name: "Requeue Time",
		category: "Auto Requeue",
        description: "Set to 0 for normal requeue\n-2 for most optimal",
		minF: -2, maxF: 4, decimalPlaces: 1
	}) requeueTime = 0;
    //
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
    //
    // Mob Highlight

	@SwitchProperty({name: "Toggle Highlight",
    category: "Mob Highlight"}) highlightToggle = false;
    //
    //Sheep Hider
    //

    @SwitchProperty({
        name: "&9Toggle",
        description: "Toggles the module &aOn&7/&cOff&7.",
        category: "Sheep Hider",
    }) sheepHiderToggle = false;

	@DecimalSliderProperty({
		name: "Distance",
		category: "Sheep Hider",
        description: "Distance from the player to start showing the sheep",
		minF: 0,
		maxF: 50,
		decimalPlaces: 0
	})
	sheepDistance = 0;
    //
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
    //
    // Auto Bless
    //

	@SwitchProperty({name: "Send On Party Leave",
    category: "Auto Bless"}) partyLeave = false;

    @SwitchProperty({name: "Send On Party Kick",
    category: "Auto Bless"}) partyKick = false;

    @SwitchProperty({name: "Co-op Chat",
    category: "Auto Bless"}) coop = false;

    @SwitchProperty({name: "Direct Messages",
    category: "Auto Bless"}) dms = false;

    @SwitchProperty({name: "Guild Chat",
    category: "Auto Bless"}) guild = false;

    @SwitchProperty({name: "Officer Chat",
    category: "Auto Bless"}) officer = false;

    @SwitchProperty({name: "Party Chat",
    category: "Auto Bless"}) party = false;
        
    @SwitchProperty({name: "All Chat",
    category: "Auto Bless"}) all = false;
}

export default new Settings();

import settings from "./index"
register("command", () => settings.openGUI()).setName("misc")
