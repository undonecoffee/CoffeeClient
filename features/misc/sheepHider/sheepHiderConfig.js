// look at "EngineerModules/GlobalUtils/template.js" for how to format this file

let categoryName = [`Sheep Hider`]
let guis = [``]
let categoryDescription = [`"Sheep Hider", "&6Sheep Hider\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\n&3Disables sheep rendering from a certain distance"`]
let dependencies = [``]
let settings = [`//
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
    
`]
