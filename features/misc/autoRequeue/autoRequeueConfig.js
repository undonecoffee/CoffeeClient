// look at "EngineerModules/GlobalUtils/template.js" for how to format this file

let categoryName = [`Auto Requeue`]
let guis = [``]
let categoryDescription = [`"Auto Requeue", "&6Auto Requeue\n&8Version 1.0\n\n&7Author:&b undonecoffee\n\n&cLook in controls for the keybind"`]
let dependencies = [``]
let settings = [`//
    // Auto Requeue

	@SwitchProperty({name: "Toggle Auto Requeue",
    category: "Auto Requeue"}) AutoRequeueToggle = false;

	@DecimalSliderProperty({name: "Requeue Time",
		category: "Auto Requeue",
        description: "Set to 0 for normal requeue\n-2 for most optimal",
		minF: -2, maxF: 4, decimalPlaces: 1
	}) requeueTime = 0;
`]
