import settings from "../config/index"

const toggle = register("renderEntity", (entity, poss, pt, event) => {
    if (parseFloat(Math.abs(entity.getX() - Player.getRenderX())) < settings.sheepDistance &&
    parseFloat(Math.abs(entity.getY() - Player.getRenderY())) < settings.sheepDistance &&
    parseFloat(Math.abs(entity.getZ() - Player.getRenderZ())) < settings.sheepDistance &&
    entity.getName() == "Sheep") cancel(event)
}).unregister()

function checkToggle(setting) {
    toggle[setting? "register" : "unregister"]()
} checkToggle(settings.sheepHiderToggle)

register("guiClosed", gui => { if (!(gui instanceof Java.type("gg.essential.vigilance.gui.SettingsGui"))) return; checkToggle(settings.sheepHiderToggle)});