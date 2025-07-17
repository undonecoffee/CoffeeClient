

const defaultData = {
	presets: [],
	posAlerts: []
}

const path = "EngineerModules/features/terms/positionalAlerts"

export default new class file {
    constructor() {
		let data = FileLib.read(path, "data.json")
        data = data ? JSON.parse(data) : {}

        Object.assign(this, defaultData, data)
        this.posAlerts.forEach(e => e.done = false);
		this.save()
    }

    save() { 
        FileLib.write(path, "data.json", JSON.stringify(this, null, 4)) }

    addAlert(id) {
        this.posAlerts.splice(id, 1);
        this.save()}

    removeAlert(id) {
        this.posAlerts.splice(id, 1);
        this.save()}
}

export function showList(posAlerts) {
    posAlerts.forEach((e, i) => {new Message([ 
        new TextComponent(`&5ID&8: &e&l${i}&r &7(`), 
        new TextComponent(`${e.toggled? "&aon" : "&coff"}`).setClick("run_command", `/posalerts toggle ${i}`).setHover("show_text", `/posalerts toggle ${i}`),
        new TextComponent(`&7) &3Name&7: "&9${e.name}&7" `),
        new TextComponent(`&7Click to expand`).setClick("run_command", `/extendedAlert ${i}`).setHover("show_text", `/extendedAlert ${i}`)]).chat()});}

export function showExtended(posAlerts, id) {
    const alert = posAlerts[id]
    new Message([ 
        new TextComponent(`\n&5ID&8: &e&l${id}&r &7(`), 
        new TextComponent(`${alert.toggled? "&aon" : "&coff"}`).setClick("run_command", `/posalerts toggle ${id}`).setHover("show_text", `/posalerts toggle ${id}`),
        new TextComponent(`&7)\n   &3Name&7: "&9${alert.name}&7"
   &3Only in p3&7: ${alert.p3Only? "&atrue" : "&cfalse"}
   &3Times&7: ${alert.times? "&atrue" : "&cfalse"}
   &3Players to trigger&7: &e${alert.players}
   &3Position Of Players&7: &7(&e${alert.playerPos.x1}&7, &e${alert.playerPos.y1}&7, &e${alert.playerPos.z1}&7) (&e${alert.playerPos.x2}&7, &e${alert.playerPos.y2}&7, &e${alert.playerPos.z2}&7)
   &3Position Of Self&7: &7(&e${alert.selfPos.x1}&7, &e${alert.selfPos.y1}&7, &e${alert.selfPos.z1}&7) (&e${alert.selfPos.x2}&7, &e${alert.selfPos.y2}&7, &e${alert.selfPos.z2}&7)
   &3Sound&7: ${alert.sound.name} &7(&e${alert.sound.volume}&7, &e${alert.sound.pitch}&7) (&e${alert.sound.timesPlayed}&7, &e${alert.sound.duration}ms&7)
   &3Title&7: &7"${alert.title.name}&7"
      &3Position&7: &7(&9${alert.title.x}&7) (&9${alert.title.y}&7) &8(&7${alert.title.scale}&8)
      &3Time&7: &e${alert.title.time}ms`)]).chat()}

export function showPresetsList(presets){
    ChatLib.chat(`\n`)
    presets.forEach((preset, i) => {
        let togglesText = preset.toggles.map(t => `&9${t}&7`).join(", ");
        new TextComponent(`&7Set alerts to: &3${preset.name} &7(${togglesText})\n`)
            .setClick("run_command", `/posalerts presets toggle ${i}`)
            .setHover("show_text", `/posalerts presets toggle ${i}`).chat();
    });
}

export const texts = {
    editHelpMessage: `                  &0[&cEngineer&bPositionalAlertsEditHelp&0]

&3/posalerts&b edit &8(&7ID&8)
       &bname &8(&7name&8)&7:&9 edits the name of the alert &8(&7doesn't actually change what the alert does&8)
       &bplayers &8(&7int&8)&7:&9 edits the number of players required for alert to trigger
       &bp3only&7:&9 Only triggers alert in p3
       &btimes&7:&9 Shows the time each player entered the area from boss enter / start of p3 &8(&7includes section times&8)
       &bmessage &8(&7message&7):&9 edits the message sent for times (make " " to have no message)
       &bplayerpos &8(&7x1, y1, z1&8) &8(&7x2, y2, z2&8)&7:&9 edits the area in which the number of player needs to be in to trigger the alert
       &bselfpos &8(&7x1, y1, z1&8) &8(&7x2, y2, z2&8)&7:&9 edits the area where you need to be to trigger the alert
       &bsound &8(&7name&8) (&7volume&8) (&7pitch&8) (&7times played&8) (&7duration &8(&7ms&8))&7:&9 edits the sound that plays when the alert is &8(&7/commonsounds to help find sounds&8)
       &btitle name &8(&7name&8)&7:&9 edits name of title. leave it as " " if you dont want a title &8(&7/colors to see all of the colors you can use&8)
           &btitle pos:&9 Opens move Gui
           &btitle time &8(&7time in ms&8)&7:&9 edits the time the title stays on screen

                                      &8Examples: 
            &3/posalerts &bedit 3 sound &9note.Pling 1 12 3 100
            &3/posalerts &bedit 3 sound &9note.Pling 1 12 3 100`,

    helpMessage: `                  &0[&cEngineer&bPositionalAlerts&0]
 &3/posalerts&b presets&7:&9 Shows list of presets
 &3/posalerts&b list&7:&9 Shows list of alerts
 &3/posalerts&b add&7:&9 Adds a blank alert
 &3/posalerts&b remove &8(&7ID&8)&7:&9 Removes the alert at the id
 &3/posalerts&b test &8(&7ID&8)&7:&9 Simulates the alert at the id going off
 &3/posalerts&b toggle &8(&7ID&8)&7:&9 Toggles the alert at the id
 &3/posalerts&b edit &8(&7/edithelp for more info&8)`,
    commonSounds: `               &0[&cEngineer&bCommonSounds&0]
&9Meow sounds
mob.cat.meow 0.45 2.5 30 600

&9Fast dings
10 2 20 5

&9loud dings
10 2 20 5`
}

export const blankAlert = {
    name: "Blank",
    toggled: false,
    p3Only: true,
    times: true,
    players: 1,
    message: "took",
    playerPos: {x1: 0, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0},
    selfPos: {x1: 0, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0},
    sound: {name: "mob.cat.meow", volume: 1, pitch: 2, timesPlayed: 30, duration: 600},
    title: {name: "&5Blank Title", x: 0.5, y: 0.51, scale: 2, time: 1300},
    done: false,
}
// 475 280 3
export function playSound(name, volume, pitch, timesPlayed, duration) {
    if (timesPlayed == 1) return World.playSound(name, volume, pitch)
    function play(count) {
        if (count == timesPlayed) return
        World.playSound(name, volume, pitch);
        setTimeout(() => play(count + 1), duration / timesPlayed)
    }; play(0)
}

export function getClass() {
    let index = TabList?.getNames()?.findIndex(line => line?.includes(Player.getName()))
    if (index == -1) return
    let match = TabList?.getNames()[index]?.removeFormatting().match(/.+ \((.+) .+\)/)
    if (!match) return "EMPTY"
    return match[1];
}

export function ensureCorrectUsage(second, args) {
    
    return true
}

