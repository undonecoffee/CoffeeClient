import settings from "../config/settings"
import { open } from "./display/open"
import { blood } from "./display/blood"
import { portal } from "./display/portal"
import { maxor } from "./display/maxor"
import { storm } from "./display/storm"
import { terms } from "./display/terms"
import { goldor } from "./display/goldor"
import { relics } from "./display/relics"
import { dragons } from "./display/dragons"

register("command", (split, setting, compact) => {
    if (!split) return ChatLib.chat(splits.default)
    if (!splits.hasOwnProperty(split)) return ChatLib.chat(`couldnt find "${split}" in splits`)
    if (!splits[split].hasOwnProperty(setting)) return ChatLib.chat(`couldnt find "${setting}" in "${split}"`)
    if (splits[split][setting].hasOwnProperty(`compact`)) ChatLib.chat(splits[split][setting][compact ? `compact` : `normal`])
    else ChatLib.chat(splits[split][setting])
}).setName("subsplits").setAliases("ss")
//     default: `/ss &aopen &7(room, key, all) (compact)
// /ss &cblood &7(avg, stats, all) (compact)
// /ss &dportal
// /ss &5maxor &7(crystals, agro, all)
// /ss &bstorm &7(dps, crush, all)
// /ss &6terms &7(section, terms, all) (compact)
// /ss &6goldor &7(leaps, first, all) (compact)
// /ss &cnecron
// /ss &5relics &7(total, each, all) (compact)
// /ss &5dragons &7(total, each, all) (compact)`,

const splits = {
    open,
    blood,
    portal,
    maxor,
    storm,
    terms,
    goldor,
    relics,
    dragons,
}

// let title = Object.keys(splits).forEach(key => {
// })
// let title = `${splits.open.all.compact}
// ${splits.blood.avg.compact}
// ${splits.portal.show.compact}
// ${splits.maxor.agro.compact}
// ${splits.storm.crush.compact}
// ${splits.terms.section.compact}
// ${splits.goldor.all.compact}
// ${splits.relics.all.compact}
// ${splits.dragons.each.compact}
// `
//
// register("renderOverlay", () => new Text(title, 500, 50).setShadow(true).draw())
//
let title = `
&a21.2 &7| &c3.5   &7| &c6.3   &7| &c2.2  &7| &c4.7 &7   | &64.6
&c62.0 &7| &923.8 &7| &363.2 &7| &62.8 &7 | &c0.2 
&d  3.1 &7| &53.0 &7  | &60.0 
&525.2 &7| &32.2 &7  | &62.0 &7  | &c6.5 &7  | &32.2 &7  | &c0.6
&b45.9 &7| &60.4 &7  | &c0.1 &7  | &63.5 &7  | &c0.2 
&620.9 &7| &811.9&7 | &85.2 &7  | &83.9 &7  | &84.1 
&5  7.7 &7| &51.2 &7  | &32.5 &7  | &c2.9 
&c30.7
&650.2 &7| &91.1 &7  | &a1.3 &7  | &61.3 &7  | &c1.1 &7  | &60.6
&d50.2 &7| &91.1 &7  | &a1.3 &7  | &61.3 &7  | &c1.1 &7  | &60.6

`
register("renderOverlay", () => new Text(title, 200, 50).setShadow(true).draw())
