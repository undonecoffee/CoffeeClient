import settings from "./settings"
import "./gui.js"

register("command", (...args) => settings.getConfig().openGui()).setName("ccmisc")
