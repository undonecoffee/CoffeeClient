register("command", (type, completed, total) => {
    if (type == "s" || type == "start") ChatLib.command("ct sim [BOSS] Goldor: Who dares trespass into my domain?", true)
    if (type == "t" || type == "term") ChatLib.command(`ct sim undonecoffee completed a terminal! (${completed}/${total})`, true)
    if (type == "d" || type == "dev") ChatLib.command(`ct sim undonecoffee completed a device! (${completed}/${total})`, true)
    if (type == "l" || type == "lever") ChatLib.command(`ct sim undonecoffee activated a lever! (${completed}/${total})`, true)
}).setName("sim")
