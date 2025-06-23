
let categoryName = [`&aAuto Bless`] // You can organize the catacories by adding an invisible "&a-f". It wont show the colors
let guis = [`gui1/gui2/gui3`] // The guis will be split by "/" and made into variables
// categoryDescription has to be all in one line and i dont know why but im too scared to touch it
let categoryDescription = [`"Auto Bless", "&6Auto Bless\n\n&8Version 3.0\n\n&7Auther:&b Legendary_JG\n\n&8Credits to &9Bloom&8: for most of the code &9KingIsBad&8: for the idea\n\n&3Auto Blesses"`]
let dependencies = [`"Only highlight larger minis", "Highlight Minis"/"Only highlight own boss", "Highlight Bosses"`] // seperated by "/"
// adding the "//" for the names is really annoying. you just have to look in the config file and edit it to look nice as you go
/*
it is recommended to follow this structure

    @Property({ name
        anything else
    category, subcategory }) toggle = false;

if its a gui 

    @ButtonProperty({name: "move soulcry Cooldown",
        placeholder: "Move",
    category: "Katana", subcategory: "soulcry"})
    moveSoulcryCooldown() {this.soulcryGui.open()}

*/
let settings = [`//
    // Auto Bless
    //


	@SwitchProperty({name: "Send On Party Leave",
    category: "Auto Bless"}) partyLeave = false;

    @SwitchProperty({name: "Send On Party Kick",
        category: "Auto Bless"}) partyKick = false;

    @ButtonProperty({name: "move soulcry Cooldown",
    placeholder: "Move",
    category: "Katana", subcategory: "soulcry"})
    moveSoulcryCooldown() {this.soulcryGui.open()};

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
`]
