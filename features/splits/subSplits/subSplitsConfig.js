// look at "EngineerModules/GlobalUtils/template.js" for how to format this file

let categoryName = [`Sub Splits`]
let guis = [`subSplitsGui`]
let categoryDescription = [`"Sub Splits", "&6Sub Splits\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\n&cShows run splits in extreme detail\n\n\n\n\n\n\n&4&kOOOOOO&c DOES NOT WORK &4&kOOOOOO\n\n\n\n\n"`]
let dependencies = [``]
let settings = [`//
    //SubSplits
    //

    @SwitchProperty({
        name: "&9Toggle",
        description: "Toggles the module &aOn&7/&cOff&7.",
        category: "Sub Splits",
    }) subSplitsToggle = false;
     
	@SelectorProperty({
		name: "&7Number of splits shown at a time",
		category: "Sub Splits",
		options: ["1", "2", "3", "All"]
	})
	numberOfSplitsShown = 0;
     
	@SelectorProperty({
		name: "&aBlood Rush",
		category: "Sub Splits",
		subcategory: "Splits",
		options: ["Off", "Show each room", "Show each key/door              "]
	})
	brSubSplit = 0;
    
	@SelectorProperty({
		name: "&cBlood Camp",
		category: "Sub Splits",
		subcategory: "Splits",
		options: ["Off", "Show move and average         ", "Show each mob"]
	})
	campSubSplit = 0;
     
	@SelectorProperty({
		name: "&dPortal",
		category: "Sub Splits",
		subcategory: "Splits",
		options: ["Off", "Show spawn and enter           "]
	})
	portalSubSplit = 0;
     
	@SelectorProperty({
		name: "&5Maxor",
		category: "Sub Splits",
		subcategory: "Splits",
		options: ["Off", "Show move only", "Show move and both crystals", "Show each crystal time"]
	})
	maxorSubSplit = 0;
     
	@SelectorProperty({
		name: "&bStorm",
		category: "Sub Splits",
		subcategory: "Splits",
		options: ["Off", "Show dps only", "Show dps and end only", "Show move and dps                 "]
	})
	stormSubSplit = 0;
     
	@SelectorProperty({
		name: "&6Terms",
		category: "Sub Splits",
		subcategory: "Splits",
		options: ["Off", "Show sections                         "]
	})
	termsSubSplit = 0;
     
	@SelectorProperty({
		name: "&eGoldor",
		category: "Sub Splits",
		subcategory: "Splits",
		options: ["Off", "Show Total leaps", "Show each leap                       "]
	})
	goldorsSubSplit = 0;

	@SelectorProperty({
		name: "&cNecron",
		category: "Sub Splits",
		subcategory: "Splits",
		options: ["Off", "needs testing idk                    "]
	})
	necronSubSplit = 0;

	@SelectorProperty({
		name: "&dRelics",
		category: "Sub Splits",
		subcategory: "Splits",
		options: ["Off", "Show total relics only", "Show dragon kill time", "Show each relic                     "]
	})
	dragonsSubSplit = 0;


    //`]
