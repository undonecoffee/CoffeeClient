import settings from "./settings"
import "./gui"

register("command", (...args) => settings.getConfig().openGui()).setName("cctermsinfo")
