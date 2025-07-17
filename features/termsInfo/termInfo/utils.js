const defaultData = { 
    termInfoGui: {
        x: 0.1,
        y: 0.5,
        scale: 1,
        align: "left"
    },
}

const path = "EngineerModules/features/terms/termInfo"
export default new class file {
    constructor() {
		let data = FileLib.read(path, "data.json")
        data = data ? JSON.parse(data) : {}

        Object.assign(this, defaultData, data)
		this.save()
    }

    save() { 
        FileLib.write(path, "data.json", JSON.stringify(this, null, 4)) 
    }
}