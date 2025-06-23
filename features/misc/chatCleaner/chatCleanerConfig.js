// look at "EngineerModules/GlobalUtils/template.js" for how to format this file

let categoryName = [`Chat Cleaner`]
let guis = [``]
let categoryDescription = [`"Chat Cleaner", "&6Chat Cleaner\n&8Version 1.0\n\n&7Author:&b undonecoffee"`]
let dependencies = [``]
let settings = [`//
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
    

`]
