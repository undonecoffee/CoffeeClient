import settings from "./settings.js"
import "./gui.js"

register("command", (...args) => settings.getConfig().openGui()).setName("ccsplits")
