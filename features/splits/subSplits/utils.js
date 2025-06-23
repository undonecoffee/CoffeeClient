
const defaultData = { 
    subSplitsGui: {
        x: 0.5,
        y: 0.5,
        scale: 1,
        align: "left"
    },
}

const path = "EngineerModules/features/splits/subSplits"
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

export function blankSplits() {
    return [
        [], // open
        [], // blood
        [], // portal
        [], // maxor
        [], // storm
        [], // terms
        [], // goldor
        [], // necron
        [], // relics
        [], // dragons
    ]
}