import settings from "../config/settings"

register("renderEntity", (entity, poss, pt, event) => {
    if (entity.getName() !== "Sheep") return
    if (parseFloat(Math.abs(entity.getX() - Player.getRenderX())) >= settings.hideDistance) return
    if (parseFloat(Math.abs(entity.getY() - Player.getRenderY())) >= settings.hideDistance) return
    if (parseFloat(Math.abs(entity.getZ() - Player.getRenderZ())) >= settings.hideDistance) return
    cancel(event)
})
