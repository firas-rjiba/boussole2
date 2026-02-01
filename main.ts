basic.forever(function on_forever() {
    
})
input.calibrateCompass()
basic.forever(function on_forever2() {
    let degre = input.compassHeading()
    if (degre < 45) {
        basic.showString("N")
    } else if (degre < 135) {
        basic.showString("E")
    } else if (degre < 225) {
        basic.showString("S")
    } else if (degre < 315) {
        basic.showString("O")
    } else {
        basic.showString("N")
    }
    
})
