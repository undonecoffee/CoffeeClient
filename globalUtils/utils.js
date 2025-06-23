export function inBox(x1, x2, y1, y2, z1, z2) {
    let [x, y, z] = [Player.getRenderX(), Player.getRenderY(), Player.getRenderZ()]
    // i tried to order these in order of how likely they are to happen
    if (y > y2) return false // most of the time your y level will be above where you are
    else if (y < y1) return false // this is just incase your y level is at an exact amount
    // all of these have almost the exact same chance so i put them on the same line
    else if (x < x1 || x > x2 || z < z1 || z > z2) return false
    return true
}

export function timeFrom(time, toFixed = 2) {
    return parseFloat(((Date.now() - time) / 1000).toFixed(toFixed))
}

export function fromatMs(time, toFixed = 2) {
    return parseFloat((time / 1000).toFixed(toFixed))
}

export function fromatMinutes(time, milli = false) {
    if (milli) time /= 1000
    if (time <= 60) return `${time.toFixed(1)}s`
    return `${Math.floor(time / 60)}m ${(time % 60).toFixed(1)}s`
}

export function time(time) {
    return `${(time / 1000).toFixed(2)}s`
}

export function ticks(ticks) {
    return `${(ticks / 20).toFixed(2)}s`
}

